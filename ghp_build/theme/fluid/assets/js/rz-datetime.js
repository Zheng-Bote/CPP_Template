import{c as K,p as Z,t as k,b as h,e as g,f as X,h as l,i as C,m as I,a as c,s as E,r as i,u as q,j as p,g as A}from"./custom-element.js";import{a as J}from"./css.js";import{i as S}from"./if.js";import{s as Q}from"./attributes2.js";import{s as $}from"./class.js";import{i as oo}from"./lifecycle.js";import{p as d}from"./props.js";import{o as ro,a as eo}from"./index-client.js";import"./attributes.js";var to=k('<div class="stardate-wrapper svelte-16kdkpr"><span class="label svelte-16kdkpr">STARDATE</span> <time class="mono svelte-16kdkpr"> </time></div>'),ao=k('<div class="tz-top svelte-16kdkpr"> </div>'),lo=k('<span class="tz-inline svelte-16kdkpr"> </span>'),no=k('<span class="tz-inline svelte-16kdkpr"> </span>'),co=k('<!> <div class="time-row svelte-16kdkpr"><!> <time class="svelte-16kdkpr"> </time> <!></div>',1),io=k("<span><!></span>");const so={hash:"svelte-16kdkpr",code:`
  /* 1. Fluid Tokens importieren */
  /* =========================================================
   GLOBAL SHARED TOKENS (Spacing, Typography, Radius)
   ========================================================= */:root {color-scheme:light dark;

  /* Radius */--radius-xs: 4px;--radius-sm: 8px;--radius-md: 12px;--radius-lg: 18px;--radius-pill: 999px;

  /* Spacing */--space-1: 0.25rem;--space-2: 0.5rem;--space-3: 0.75rem;--space-4: 1rem;--space-5: 1.5rem;--space-6: 2rem;

  /* Typography */--font-family-sans:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--font-size-root: clamp(16px, 1.2vw + 0.5rem, 22px);--font-size-small: clamp(0.8rem, 0.96vw + 0.4rem, 1.1rem);--font-size-smaller: clamp(0.7rem, 0.84vw + 0.35rem, 0.96rem);--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-bold: 600;

  /* Motion */--transition-fast: 0.18s ease-out;--transition-normal: 0.25s ease;

  /* Default Transition for Theme Switching */transition:background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;}
  /* =========================================================
   THEME DEFINITIONS
   Logic: Each theme defines its palette (Light & Dark) 
   based on a specific HUE.
   ========================================================= */
  /* --- BLUE THEME (Default) --- 
   Hue: ~250 (Cool Blue) 
*/:root,
:root[data-theme="blue"] {
  /* Palette: Light (Hue 250) */--color-bg-light: oklch(0.98 0.01 250);--color-bg-alt-light: oklch(0.99 0.01 250);--color-bg-elevated-light: oklch(0.97 0.02 250);--color-text-light: oklch(0.18 0.02 250);--color-text-muted-light: oklch(0.45 0.02 250);--color-border-light: oklch(0.88 0.02 250);

  /* Palette: Dark (Hue 250) */--color-bg-dark: oklch(0.16 0.02 250);--color-bg-alt-dark: oklch(0.2 0.02 250);--color-bg-elevated-dark: oklch(0.24 0.03 250);--color-text-dark: oklch(0.94 0.02 250);--color-text-muted-dark: oklch(0.7 0.02 250);--color-border-dark: oklch(0.32 0.02 250);

  /* Primary Brand Colors */--color-primary: oklch(0.65 0.16 250);--color-primary-soft: oklch(0.78 0.08 250);--color-primary-dark: oklch(0.45 0.12 250);

  /* Shadows */--shadow-soft-light: 0 10px 30px rgba(15, 23, 42, 0.08); /* Blueish shadow */--shadow-soft-dark: 0 14px 40px rgba(0, 0, 0, 0.45);

  /* --- MAPPING (Default to Light) --- */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}
  /* Dark Mode Override for Blue */
  @media (prefers-color-scheme: dark) {:root {--mode-auto: dark;}
}:root[data-mode="dark"],
:root[data-theme="blue"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- EMERALD THEME --- 
   Hue: 150 (Natural Green)
*/:root[data-theme="emerald"] {
  /* Palette: Light */--color-bg-light: oklch(0.98 0.01 150);--color-bg-alt-light: oklch(0.99 0.01 150);--color-bg-elevated-light: oklch(0.97 0.02 150);--color-text-light: oklch(0.18 0.02 150);--color-text-muted-light: oklch(0.45 0.02 150);--color-border-light: oklch(0.88 0.02 150);

  /* Palette: Dark */--color-bg-dark: oklch(0.16 0.02 150);--color-bg-alt-dark: oklch(0.2 0.02 150);--color-bg-elevated-dark: oklch(0.24 0.03 150);--color-text-dark: oklch(0.94 0.02 150);--color-text-muted-dark: oklch(0.7 0.02 150);--color-border-dark: oklch(0.32 0.02 150);

  /* Primary */--color-primary: oklch(0.65 0.16 150); /* Unified Lightness for consistency */--color-primary-soft: oklch(0.78 0.08 150);--color-primary-dark: oklch(0.45 0.12 150);

  /* Shadows (Greenish tint) */--shadow-soft-light: 0 10px 30px rgba(18, 42, 25, 0.08);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="emerald"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- AMBER THEME --- 
   Hue: 80 (Warm Yellow/Orange)
   Note: Amber often needs slightly tweaked lightness for contrast
*/:root[data-theme="amber"] {
  /* Palette: Light */--color-bg-light: oklch(0.99 0.01 80); /* Brighter bg for yellow */--color-bg-alt-light: oklch(0.995 0.01 80);--color-bg-elevated-light: oklch(0.98 0.02 80);--color-text-light: oklch(0.2 0.03 80); /* Warmer text */--color-text-muted-light: oklch(0.48 0.03 80);--color-border-light: oklch(0.88 0.03 80);

  /* Palette: Dark */--color-bg-dark: oklch(0.17 0.02 80);--color-bg-alt-dark: oklch(0.21 0.02 80);--color-bg-elevated-dark: oklch(0.25 0.03 80);--color-text-dark: oklch(0.95 0.02 80);--color-text-muted-dark: oklch(0.75 0.02 80);--color-border-dark: oklch(0.32 0.02 80);

  /* Primary */--color-primary: oklch(
    0.78 0.18 80
  ); /* Must be lighter than blue/green to be visible */--color-primary-soft: oklch(0.88 0.1 80);--color-primary-dark: oklch(0.6 0.15 80);

  /* Shadows (Warm tint) */--shadow-soft-light: 0 10px 30px rgba(42, 35, 15, 0.08);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="amber"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- BERRY THEME (NEW) --- 
   Hue: 340 (Rose/Pink/Red)
*/:root[data-theme="berry"] {
  /* Palette: Light */--color-bg-light: oklch(
    0.98 0.005 340
  ); /* Less chroma for red bg to avoid "bloody" look */--color-bg-alt-light: oklch(0.99 0.005 340);--color-bg-elevated-light: oklch(0.97 0.015 340);--color-text-light: oklch(0.18 0.02 340);--color-text-muted-light: oklch(0.45 0.02 340);--color-border-light: oklch(0.88 0.02 340);

  /* Palette: Dark */--color-bg-dark: oklch(0.16 0.02 340);--color-bg-alt-dark: oklch(0.2 0.02 340);--color-bg-elevated-dark: oklch(0.24 0.03 340);--color-text-dark: oklch(0.94 0.02 340);--color-text-muted-dark: oklch(0.7 0.02 340);--color-border-dark: oklch(0.32 0.02 340);

  /* Primary */--color-primary: oklch(0.63 0.22 340); /* Vivid pink/red */--color-primary-soft: oklch(0.8 0.12 340);--color-primary-dark: oklch(0.45 0.15 340);

  /* Shadows (Reddish tint) */--shadow-soft-light: 0 10px 30px rgba(42, 15, 20, 0.08);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="berry"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- VIOLET THEME (NEW) --- 
   Hue: 290 (Deep Purple)
*/:root[data-theme="violet"] {
  /* Palette: Light */--color-bg-light: oklch(0.98 0.01 290);--color-bg-alt-light: oklch(0.99 0.01 290);--color-bg-elevated-light: oklch(0.97 0.02 290);--color-text-light: oklch(0.18 0.02 290);--color-text-muted-light: oklch(0.45 0.02 290);--color-border-light: oklch(0.88 0.02 290);

  /* Palette: Dark */--color-bg-dark: oklch(0.16 0.02 290);--color-bg-alt-dark: oklch(0.2 0.02 290);--color-bg-elevated-dark: oklch(0.24 0.03 290);--color-text-dark: oklch(0.94 0.02 290);--color-text-muted-dark: oklch(0.7 0.02 290);--color-border-dark: oklch(0.32 0.02 290);

  /* Primary */--color-primary: oklch(0.6 0.2 290);--color-primary-soft: oklch(0.78 0.12 290);--color-primary-dark: oklch(0.4 0.15 290);

  /* Shadows (Purple tint) */--shadow-soft-light: 0 10px 30px rgba(35, 15, 42, 0.08);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="violet"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- CYAN / TEAL THEME --- 
   Hue: 190 (Refreshing Teal)
*/:root[data-theme="cyan"] {
  /* Palette: Light */--color-bg-light: oklch(0.98 0.01 190);--color-bg-alt-light: oklch(0.99 0.01 190);--color-bg-elevated-light: oklch(0.97 0.02 190);--color-text-light: oklch(0.18 0.02 190);--color-text-muted-light: oklch(0.45 0.02 190);--color-border-light: oklch(0.88 0.02 190);

  /* Palette: Dark */--color-bg-dark: oklch(0.16 0.02 190);--color-bg-alt-dark: oklch(0.2 0.02 190);--color-bg-elevated-dark: oklch(0.24 0.03 190);--color-text-dark: oklch(0.94 0.02 190);--color-text-muted-dark: oklch(0.7 0.02 190);--color-border-dark: oklch(0.32 0.02 190);

  /* Primary */--color-primary: oklch(0.65 0.15 190);--color-primary-soft: oklch(0.8 0.1 190);--color-primary-dark: oklch(0.5 0.12 190);

  /* Shadows (Cyan tint) */--shadow-soft-light: 0 10px 30px rgba(15, 42, 42, 0.08);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="cyan"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- SLATE THEME (Neutral) --- 
   Hue: 260 (Cool Gray)
   Note: Low chroma for a professional, "industrial" look.
*/:root[data-theme="slate"] {
  /* Palette: Light (Very subtle cool tint) */--color-bg-light: oklch(0.985 0.002 260); /* Almost pure white/grey */--color-bg-alt-light: oklch(0.995 0.001 260);--color-bg-elevated-light: oklch(0.96 0.005 260);--color-text-light: oklch(0.15 0.01 260); /* Almost black */--color-text-muted-light: oklch(0.45 0.01 260);--color-border-light: oklch(0.88 0.01 260);

  /* Palette: Dark */--color-bg-dark: oklch(0.16 0.01 260);--color-bg-alt-dark: oklch(0.2 0.01 260);--color-bg-elevated-dark: oklch(0.24 0.02 260);--color-text-dark: oklch(0.96 0.01 260); /* Almost white */--color-text-muted-dark: oklch(0.65 0.01 260);--color-border-dark: oklch(0.32 0.01 260);

  /* Primary: "Steel" look */
  /* Instead of a color, we use a dark slate for high contrast */--color-primary: oklch(0.4 0.04 260); /* Dark Slate Blue */--color-primary-soft: oklch(0.85 0.02 260); /* Pale Gray */--color-primary-dark: oklch(0.25 0.04 260); /* Deep Iron */

  /* Shadows (Neutral) */--shadow-soft-light: 0 10px 30px rgba(0, 0, 0, 0.06);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);}:root[data-theme="slate"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);

  /* Adjust primary for dark mode to be visible (lighter steel) */--color-primary: oklch(0.8 0.02 260);--color-primary-soft: oklch(0.3 0.02 260);--color-primary-dark: oklch(0.9 0.01 260);}
  /* --- Legacy --- */
  /* --- BLUE 2 THEME (Legacy Port) --- 
   Hue: 240 (Indigo / Royal Blue)
   Based on main.css: GitHub-like Dark Mode & Indigo Primary
*/:root[data-theme="blue2"] {
  /* Palette: Light */
  /* #f8f9fa converted to oklch */--color-bg-light: oklch(0.98 0.01 240);
  /* #ffffff panel */--color-bg-alt-light: oklch(1 0 0);--color-bg-elevated-light: oklch(0.96 0.01 240);

  /* Text & Border */--color-text-light: oklch(0.15 0.02 240);--color-text-muted-light: oklch(0.45 0.02 240);
  /* #e1e4e8 converted */--color-border-light: oklch(0.9 0.01 240);

  /* Palette: Dark */
  /* #0d1117 converted (GitHub Dark Dimmed) */--color-bg-dark: oklch(0.18 0.03 260);
  /* #161b22 converted */--color-bg-alt-dark: oklch(0.22 0.03 260);--color-bg-elevated-dark: oklch(0.26 0.03 260);

  /* Text & Border Dark */--color-text-dark: oklch(0.95 0.01 240);--color-text-muted-dark: oklch(0.65 0.02 240);
  /* #30363d converted */--color-border-dark: oklch(0.35 0.02 260);

  /* Primary (taken from main.css light mode) */--color-primary: oklch(0.55 0.15 240);
  /* Secondary from main.css approximation */--color-primary-soft: oklch(0.8 0.06 240);--color-primary-dark: oklch(0.4 0.15 240);

  /* Header */--color-text-header-light: oklch(0.55 0.15 240);--color-text-header-dark: oklch(0.7 0.12 240);

  /* Shadows */--shadow-soft-light: 0 10px 30px rgba(0, 0, 0, 0.12);

  /* Mapping */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--text-header: var(--color-text-header-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);

  /* CODE TOKENS (GitHub Style) */--code-font-family:
    "ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, monospace;--code-text-shadow: none;--code-background: rgba(175, 184, 193, 0.2); /* Dezent Grau */--code-color: var(--text); /* Normaler Text statt Farbe */--code-border: 1px solid transparent;--code-border-radius: 6px;--code-box-shadow: none;}:root[data-theme="blue2"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);

  /* Override Primary for Dark Mode (taken from main.css dark variant) 
     oklch(0.7 0.12 240) is brighter for contrast on dark bg */--color-primary: oklch(0.7 0.12 240);--color-primary-soft: oklch(0.3 0.05 240);--color-primary-dark: oklch(0.8 0.1 240);--text-header: var(--color-text-header-dark);}
  /* --- MATRIX THEME --- 
   Hue: 142 (Neon Green)
   Style: High Contrast, Terminal/Hacker Aesthetics
*/:root[data-theme="matrix"] {
  /* --- TYPOGRAPHY & SHAPE OVERRIDES --- */
  /* Matrix nutzt Monospace Fonts */--font-family-sans: "Courier New", Courier, monospace;

  /* Eckigerer Look für Matrix (Tech-Style) */--radius-xs: 2px;--radius-sm: 4px;--radius-md: 6px;--radius-lg: 8px;--radius-pill: 4px; /* Auch Pills eher eckig */

  /* --- PALETTE --- */

  /* Palette: Light (Day Mode Terminal - Pale Green BG, Dark Green Text) */
  /* Optional: Falls du Light Mode erlauben willst */--color-bg-light: oklch(0.96 0.02 142); /* Very pale green */--color-bg-alt-light: oklch(0.92 0.04 142);--color-bg-elevated-light: oklch(1 0 0);--color-text-light: oklch(0.2 0.1 142); /* Dark Green Text */--color-text-muted-light: oklch(0.4 0.1 142);--color-border-light: oklch(0.7 0.1 142);

  /* Palette: Dark (The Real Matrix - Black BG, Neon Green Text) */
  /* #0d0d0d -> oklch(0.05 0 0) */--color-bg-dark: oklch(0.05 0 0);
  /* rgba(0, 10, 0, 0.9) -> Darker Green/Black */--color-bg-alt-dark: oklch(0.08 0.05 142);
  /* rgba(0, 20, 0, 0.6) -> Glass Green */--color-bg-elevated-dark: oklch(0.12 0.08 142);

  /* #00ff41 -> Matrix Green */--color-text-dark: oklch(0.85 0.29 142);
  /* #003b00 -> Dark Green (Muted Text) */--color-text-muted-dark: oklch(0.5 0.2 142);
  /* #003b00 -> Border */--color-border-dark: oklch(0.3 0.15 142);

  /* Primary Colors */
  /* #0aff0a -> Bright Green */--color-primary: oklch(0.9 0.37 142);
  /* #00ff41 -> Soft/Regular Green */--color-primary-soft: oklch(0.85 0.29 142);
  /* #003b00 -> Dark Green */--color-primary-dark: oklch(0.22 0.13 142);

  /* Shadows (Neon Glow) */--shadow-soft-light: 0 0 10px oklch(0.85 0.29 142 / 0.2);--shadow-soft-dark: 0 0 15px oklch(0.85 0.29 142 / 0.4);

  /* --- MAPPING --- */
  /* Default to Dark Mode mapping if system is dark, otherwise light */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);

  /* CODE TOKENS */--code-font-family: "Courier New", Courier, monospace;--code-text-shadow: 0 0 2px var(--color-primary);--code-background: oklch(0.12 0.08 142);--code-color: var(--color-primary);--code-border: 1px solid var(--color-primary-dark);--code-border-radius: 2px;--code-box-shadow: 0 0 8px var(--color-primary-dark);}
  /* Force Dark Mode look usually preferred for Matrix */:root[data-theme="matrix"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* --- TRON THEME --- 
   Hue: 210 (Electric Cyan)
   Style: Futuristic, Glassmorphism, Neon Glow
   Based on main.css provided
*/:root[data-theme="tron"] {
  /* --- TYPOGRAPHY & SHAPE OVERRIDES --- */
  /* Tron nutzt Orbitron für Headings, Inter für Body. 
     Hier setzen wir den Standard auf Orbitron für den "Tech"-Look */--font-family-sans: "Orbitron", "Inter", sans-serif;

  /* Etwas rundere Ecken wie im Original CSS (--border-radius: 12px) */--radius-xs: 4px;--radius-sm: 8px;--radius-md: 12px;--radius-lg: 16px;--radius-pill: 999px;

  /* --- PALETTE --- */

  /* Palette: Light (Hypothetical "Day Mode" Tron - High Tech White) */--color-bg-light: oklch(0.96 0.01 210);--color-bg-alt-light: oklch(0.99 0.01 210);--color-bg-elevated-light: oklch(1 0 0);--color-text-light: oklch(0.15 0.03 210);--color-text-muted-light: oklch(0.45 0.03 210);--color-border-light: oklch(0.85 0.05 210);

  /* Palette: Dark (The Real Tron) */
  /* --primary-bg: #000206 -> oklch approx */--color-bg-dark: oklch(0.01 0.01 210);

  /* --ob-glass approx for panels */--color-bg-alt-dark: oklch(0.05 0.02 210);

  /* Lighter glass for elevated cards */--color-bg-elevated-dark: oklch(0.08 0.03 210);

  /* --ob-white */--color-text-dark: oklch(0.98 0.01 210);--color-text-muted-dark: oklch(0.7 0.05 210);

  /* --tron-glow for borders */--color-border-dark: oklch(0.75 0.18 210 / 0.3);

  /* Primary Colors */
  /* --tron-cyan: oklch(0.75 0.18 210) */--color-primary: oklch(0.75 0.18 210);

  /* Soft version for backgrounds/hovers */--color-primary-soft: oklch(0.75 0.18 210 / 0.15);

  /* Darker version for text contrast if needed */--color-primary-dark: oklch(0.6 0.15 210);

  /* Shadows (Neon Glow) */--shadow-soft-light: 0 5px 15px oklch(0.75 0.18 210 / 0.15);
  /* Strong Cyan Glow */--shadow-soft-dark: 0 0 15px oklch(0.75 0.18 210 / 0.4);

  /* --- MAPPING --- */--bg: var(--color-bg-light);--bg-alt: var(--color-bg-alt-light);--bg-elevated: var(--color-bg-elevated-light);--text: var(--color-text-light);--text-muted: var(--color-text-muted-light);--border: var(--color-border-light);--shadow-soft: var(--shadow-soft-light);--bg-table-odd: var(--bg-alt);--bg-table-even: var(--bg-elevated);

  /* CODE TOKENS (Neon Style) */--code-font-family: "Menlo", "Consolas", monospace;--code-text-shadow: none;--code-background: oklch(0.75 0.18 210 / 0.1); /* Cyan Tint */--code-color: var(--color-primary);--code-border: 1px solid oklch(0.75 0.18 210 / 0.3);--code-border-radius: 4px;--code-box-shadow: 0 0 10px oklch(0.75 0.18 210 / 0.15);}
  /* Force Dark Mode defaults for authentic Tron feel */:root[data-theme="tron"][data-mode="dark"] {--bg: var(--color-bg-dark);--bg-alt: var(--color-bg-alt-dark);--bg-elevated: var(--color-bg-elevated-dark);--text: var(--color-text-dark);--text-muted: var(--color-text-muted-dark);--border: var(--color-border-dark);--shadow-soft: var(--shadow-soft-dark);}
  /* =========================================================
   FLUID BLUE UI FRAMEWORK – CONSOLIDATED CORE
   Tokens • Base • Layout • Components • Utilities
   ========================================================= */
  /* ---------------------------------------------------------
   1) BASE STYLES
   --------------------------------------------------------- */.svelte-16kdkpr,
.svelte-16kdkpr::before,
.svelte-16kdkpr::after {box-sizing:border-box;}
  @starting-style {
}
  /* --- Breadcrumbs --- */
  /* =========================================================
   Fluid Responsive Headings (H1–H6)
   ========================================================= */
  /* H1 – Größtes Heading */
  /* H2 */
  /* H3 */
  /* H4 */
  /* H5 */
  /* H6 – kleinste Überschrift */
  /* ---------------------------------------------------------
   3) COMPONENTS
   --------------------------------------------------------- */
  /* --- Buttons --- */
  /* --- Pagination --- */
  /* --- Theme Toggle Button --- */
  /* --- Inputs --- */
  /* Checkbox & Radio */
  /* Toggle Switch */
  /* Select */
  /* --- Cards --- */
  /* =========================================================
   Card Status Variants
   ========================================================= */
  /* --- Theme Preview Cards – feste Farben je Theme --- */
  /* Blue */
  /* Emerald */
  /* Amber */
  /* Berry */
  /* Violet */
  /* Cyan */
  /* Slate */
  /* Blue2 */
  /* Matrix */
  /* Tron */
  /* Anwendung der Preview-Variablen */
  /* =========================================================
   Message Boxes
   ========================================================= */
  /* --- Badges & Chips --- */
  /* --- Tabs --- */
  /* Modal */
  /* --- Images --- */
  /* =========================================================
   Lazy Loading Images
   ========================================================= */
  /* --- Figures --- */
  /* Gallery */
  /* Modal Image */
  /* Accordion */
  /* Toasts */
  /* Tooltip */
  /* =========================================================
   TABLE OF CONTENTS (TOC)
   Generated automatically by SSG
   Adapted for Fluid Tokens & Themes
   ========================================================= */
  /* 1. Container-Look für die Hauptliste */
  /* 2. Reset für alle Listen-Ebenen */
  /* 3. Abstände der Listeneinträge */
  /* 4. Einrückung und Guides für Unterebenen (h3, h4) */
  /* 5. Link-Styling */
  /* 6. Anpassung des Pfeils (Breadcrumb-Style Arrow) */
  /* --- THEME SPECIFIC OVERRIDES (Optional tweaks) --- */
  /* Tron: Stärkerer Glow für das TOC */
  /* Matrix: Terminal Look */
  /* ---------------------------------------------------------
   4) UTILITIES
   --------------------------------------------------------- */
  /* Flex */
  /* Grid */
  /* Spacing */
  /* Width & Height */
  /* Display */
  /* Text */
  /* Containers */
  /* Sections */
  /* =========================================================
   Docs-Navigation (Sidebar)
   ========================================================= */
  /* =========================================================
   Tables
   ========================================================= */
  /* =========================================================
   Scroll-To-Top Button
   ========================================================= */
  /* =========================================================
   SSG NAVIGATION PATCH (für main.cpp Output)
   ========================================================= */
  /* Reset der Liste */
  /* Kategorien (Ordnernamen) stylen wie h3 im Original */
  /* Links stylen */
  /* Hover & Active Status */
  /* Verschachtelte Ebenen (Sub-Navigation) */
  /* =========================================================
   THEME AWARE CODE STYLES
   Uses tokens defined in tokens.css
   ========================================================= */
  /* Inline Code */
  /* Code Blocks (Pre) */
  /* Spezifische Anpassung für Code innerhalb von Pre (Inherit) */
  /*
 =========================================================
 Mobile Docs Navigation als Buttons 
 ========================================================= 
 */
  @media (max-width: 899px) {
}
  @media (min-width: 1024px) {
}:host {display:inline-block;vertical-align:middle;}
  /* Basis Container (Chip / Badge Style) */.rz-datetime-badge.svelte-16kdkpr {display:inline-flex;flex-direction:column;justify-content:center;background-color:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-pill); /* Runde Ecken (Chip) */padding:0.35rem 0.85rem;font-family:var(--font-family-sans);color:var(--text);font-size:0.9rem;line-height:1.2;box-shadow:var(--shadow-soft);transition:border-color 0.3s ease;}.rz-datetime-badge.svelte-16kdkpr:hover {border-color:var(--color-primary);}
  /* Wenn TZ oben steht, brauchen wir etwas mehr eckige Form */.rz-datetime-badge.is-stacked.svelte-16kdkpr {border-radius:var(--radius-md);padding:0.5rem 0.85rem;align-items:flex-start;}
  /* --- Elemente --- */.time-row.svelte-16kdkpr {display:flex;align-items:center;gap:var(--space-2);white-space:nowrap;}
  /* Timezone Styling (dezent) */.tz-inline.svelte-16kdkpr {font-size:0.75em;font-weight:var(--font-weight-bold);color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;background:var(--bg-alt);padding:2px 6px;border-radius:4px;}.tz-top.svelte-16kdkpr {font-size:0.7em;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px;letter-spacing:1px;}
  /* Stardate Look */.stardate-wrapper.svelte-16kdkpr {display:flex;align-items:center;gap:var(--space-2);}.label.svelte-16kdkpr {font-size:0.65em;font-weight:bold;color:var(--text-muted);letter-spacing:1px;}.mono.svelte-16kdkpr {font-family:"Courier New", Courier, monospace; /* Tech look */font-weight:bold;letter-spacing:-0.5px;}
  /* Matrix Theme Support (Automagisch via Tokens, aber hier spezifischer Glow) */`};function ho(G,a){Z(a,!1),J(G,so);let s=d(a,"tz",12,"Europe/Berlin"),P=d(a,"show_tz_pre",12,"no"),M=d(a,"show_tz_post",12,"no"),u=d(a,"show_tz_top",12,"no"),D=d(a,"format",12,"de-DE"),_=d(a,"fulldatetime",12,"yes"),H=d(a,"justdate",12,"no"),L=d(a,"justtime",12,"no"),x=d(a,"stardate",12,"no"),f=I(""),B=I(""),z;function R(o){const r=o.getFullYear(),n=new Date(r,0,0),b=Number(o)-Number(n),w=1e3*60*60*24,T=Math.floor(b/w);return(1e3*(r-2323)+T/365*1e3).toFixed(2)}function O(){const o=new Date;if(x()==="yes"){C(B,R(o));return}let r={timeZone:s()};_()==="yes"?r={...r,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}:H()==="yes"?r={...r,year:"numeric",month:"numeric",day:"numeric"}:L()==="yes"&&(r={...r,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});try{C(f,new Intl.DateTimeFormat(D(),r).format(o))}catch{C(f,"Invalid Format")}}ro(()=>{O(),z=setInterval(O,1e3)}),eo(()=>{z&&clearInterval(z)}),oo();var y=io(),F=c(y);{var j=o=>{var r=to(),n=E(c(r),2),b=c(n,!0);i(n),i(r),h(()=>p(b,A(B))),g(o,r)},Y=o=>{var r=co(),n=q(r);{var b=e=>{var t=ao(),v=c(t,!0);i(t),h(()=>p(v,s())),g(e,t)};S(n,e=>{u()==="yes"&&e(b)})}var w=E(n,2),T=c(w);{var N=e=>{var t=lo(),v=c(t,!0);i(t),h(()=>p(v,s())),g(e,t)};S(T,e=>{P()==="yes"&&e(N)})}var m=E(T,2),U=c(m,!0);i(m);var V=E(m,2);{var W=e=>{var t=no(),v=c(t,!0);i(t),h(()=>p(v,s())),g(e,t)};S(V,e=>{M()==="yes"&&e(W)})}i(w),h(()=>{Q(m,"datetime",A(f)),p(U,A(f))}),g(o,r)};S(F,o=>{x()==="yes"?o(j):o(Y,!1)})}return i(y),h(()=>$(y,1,`rz-datetime-badge ${u()==="yes"?"is-stacked":""}`,"svelte-16kdkpr")),g(G,y),X({get tz(){return s()},set tz(o){s(o),l()},get show_tz_pre(){return P()},set show_tz_pre(o){P(o),l()},get show_tz_post(){return M()},set show_tz_post(o){M(o),l()},get show_tz_top(){return u()},set show_tz_top(o){u(o),l()},get format(){return D()},set format(o){D(o),l()},get fulldatetime(){return _()},set fulldatetime(o){_(o),l()},get justdate(){return H()},set justdate(o){H(o),l()},get justtime(){return L()},set justtime(o){L(o),l()},get stardate(){return x()},set stardate(o){x(o),l()}})}customElements.define("rz-datetime",K(ho,{tz:{},show_tz_pre:{},show_tz_post:{},show_tz_top:{},format:{},fulldatetime:{},justdate:{},justtime:{},stardate:{}},[],[],!0));
