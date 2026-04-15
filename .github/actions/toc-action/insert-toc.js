#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const argv = require("minimist")(process.argv.slice(2), {
  string: ["files", "collapsed"],
  default: { files: "./README.md", collapsed: "true" },
});

const filesArg = argv.files;
const collapsed = String(argv.collapsed).toLowerCase() === "true";
const markers = {
  start:
    "<!-- START doctoc generated TOC please keep comment here to allow auto update -->",
  end: "<!-- END doctoc generated TOC please keep comment here to allow auto update -->",
};

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function buildToc(headings) {
  if (headings.length === 0) return "";
  const lines = headings.map((h) => {
    const indent = "  ".repeat(Math.max(0, h.level - 2));
    const anchor = slugify(h.text);
    return `${indent}- [${h.text}](#${anchor})`;
  });
  const toc = lines.join("\n");
  if (collapsed) {
    return `\n---\n<details>\n<summary>Table of Contents</summary>\n\n${toc}\n\n</details>\n---\n`;
  } else {
    return toc;
  }
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const startIdx = content.indexOf(markers.start);
  const endIdx = content.indexOf(markers.end);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.log(`Skipping ${filePath}: TOC markers not found or malformed`);
    return false;
  }

  // Extract headings level >= 2
  const lines = content.split(/\r?\n/);
  const headings = [];
  for (const line of lines) {
    const m = line.match(/^(#{2,6})\s+(.*)$/);
    if (m) {
      const level = m[1].length;
      const text = m[2].trim();
      headings.push({ level, text });
    }
  }

  const toc = buildToc(headings);
  const before = content.slice(0, startIdx + markers.start.length);
  const after = content.slice(endIdx);
  const newContent = `${before}\n\n${toc}\n\n${after}`;

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`Updated TOC in ${filePath}`);
    return true;
  } else {
    console.log(`No changes for ${filePath}`);
    return false;
  }
}

function expandFiles(arg) {
  // simple comma split and trim; support single file or comma list
  return arg
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

const files = expandFiles(filesArg);
let changed = false;
for (const f of files) {
  const p = path.resolve(process.cwd(), f);
  if (!fs.existsSync(p)) {
    console.warn(`File not found: ${p}`);
    continue;
  }
  const didChange = processFile(p);
  changed = changed || didChange;
}

if (changed) {
  process.exitCode = 0;
} else {
  process.exitCode = 0;
}
