#!/usr/bin/env python3
import argparse, re, sys
from pathlib import Path
from glob import glob
from collections import defaultdict
import unicodedata

MARKER_START = "<!-- START doctoc generated TOC please keep comment here to allow auto update -->"
MARKER_END = "<!-- END doctoc generated TOC please keep comment here to allow auto update -->"

def github_slug(text, seen):
    # Normalize and remove combining marks
    s = unicodedata.normalize("NFKD", text)
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = s.strip().lower()
    # remove punctuation except spaces and unicode letters/numbers
    s = re.sub(r"[^\w\s-]", "", s, flags=re.UNICODE)
    s = re.sub(r"\s+", "-", s)
    s = s.strip("-")
    base = s or "-"
    count = seen[base]
    seen[base] += 1
    return base if count == 0 else f"{base}-{count}"

def build_toc(headings, collapsed):
    if not headings:
        return ""
    seen = defaultdict(int)
    lines = []
    for level, text in headings:
        indent = "  " * max(0, level - 2)
        anchor = github_slug(text, seen)
        lines.append(f"{indent}- [{text}](#{anchor})")
    toc = "\n".join(lines)
    if collapsed:
        return f"<details>\n<summary>Table of Contents</summary>\n\n{toc}\n\n</details>"
    return toc

def process_file(path, collapsed):
    txt = path.read_text(encoding="utf-8")
    if MARKER_START not in txt or MARKER_END not in txt:
        print(f"Skipping {path}: markers not found")
        return False
    # collect headings >= level 2
    headings = []
    for m in re.finditer(r'^(#{2,6})\s+(.*)$', txt, flags=re.MULTILINE):
        lvl = len(m.group(1))
        txt_h = m.group(2).strip()
        headings.append((lvl, txt_h))
    toc = build_toc(headings, collapsed)
    before, rest = txt.split(MARKER_START, 1)
    _, after = rest.split(MARKER_END, 1)
    new = before + MARKER_START + "\n\n" + toc + "\n\n" + MARKER_END + after
    if new != txt:
        path.write_text(new, encoding="utf-8")
        print(f"Updated {path}")
        return True
    print(f"No changes for {path}")
    return False

def expand_files(patterns):
    out = []
    for p in patterns:
        p = p.strip()
        if any(ch in p for ch in "*?[]"):
            out += glob(p, recursive=True)
        else:
            out.append(p)
    return [Path(x) for x in out]

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--files", default="./README.md")
    ap.add_argument("--collapsed", default="true")
    args = ap.parse_args()
    patterns = args.files.split(",")
    collapsed = args.collapsed.lower() in ("1","true","yes")
    paths = expand_files(patterns)
    changed = False
    for p in paths:
        if not p.exists():
            print(f"Not found: {p}")
            continue
        if process_file(p, collapsed):
            changed = True
    sys.exit(0 if changed else 0)

if __name__ == "__main__":
    main()
