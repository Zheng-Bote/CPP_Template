import{c as Ve,p as Ue,i as g,g as e,m as u,t as f,s as a,a as t,e as k,f as We,h as Z,r as o,b as S,o as D,j as d,K as se,u as Ye,d as Ke}from"./custom-element.js";import{a as je}from"./css.js";import{i as p}from"./if.js";import{r as ge}from"./attributes2.js";import{b as ce}from"./input.js";import{i as $e}from"./lifecycle.js";import{p as ee}from"./props.js";import{o as Qe}from"./index-client.js";var Xe=f('<header class="widget-header svelte-1q2gxgn"><h4 class="svelte-1q2gxgn"> </h4> <button class="btn btn-icon btn-ghost svelte-1q2gxgn" title="Settings"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1q2gxgn"><circle cx="12" cy="12" r="3" class="svelte-1q2gxgn"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" class="svelte-1q2gxgn"></path></svg></button></header>'),Je=f('<div class="settings-panel card svelte-1q2gxgn"><h5 class="svelte-1q2gxgn">Configuration</h5> <p class="text-muted small svelte-1q2gxgn">API Key is stored locally in your browser.</p> <label class="field-label svelte-1q2gxgn">WeatherAPI.com Key</label> <input type="password" class="field-control mb-3 svelte-1q2gxgn" placeholder="Enter API Key"> <div class="flex justify-end gap-2 svelte-1q2gxgn"><button class="btn btn-ghost svelte-1q2gxgn">Cancel</button> <button class="btn btn-primary svelte-1q2gxgn">Save</button></div></div>'),Ze=f('<div class="error-msg svelte-1q2gxgn"> </div>'),er=f('<form class="search-form svelte-1q2gxgn"><div class="form-group svelte-1q2gxgn"><label for="cityInput" class="field-label svelte-1q2gxgn">City:</label> <div class="input-group svelte-1q2gxgn"><input id="cityInput" type="text" class="field-control svelte-1q2gxgn" placeholder="London, Berlin, New York..."> <button type="submit" class="btn btn-primary svelte-1q2gxgn"><!></button></div></div></form>'),rr=f('<div class="divider full-width svelte-1q2gxgn"></div> <div class="header full-width svelte-1q2gxgn">Air Quality</div> <div class="label svelte-1q2gxgn">Ozon (O3):</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">CO:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">NO2:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">SO2:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">PM10:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">PM2.5:</div> <div class="value svelte-1q2gxgn"> </div>',1),tr=f('<div class="card mt-3 fade-in svelte-1q2gxgn"><div class="grid-container svelte-1q2gxgn"><div class="label svelte-1q2gxgn">Name:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Region:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Country:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Geo:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Timezone:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Local time:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Updated:</div> <div class="value svelte-1q2gxgn"> </div> <div class="divider full-width svelte-1q2gxgn"></div> <div class="label svelte-1q2gxgn">Conditions:</div> <div class="value highlight svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Temp:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Feels like:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Wind:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Humidity:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">Pressure:</div> <div class="value svelte-1q2gxgn"> </div> <div class="label svelte-1q2gxgn">UV Index:</div> <div class="value svelte-1q2gxgn"> </div> <!></div></div>'),or=f('<div class="rz-weather-wrapper svelte-1q2gxgn"><!> <!> <!> <!> <!></div>');const ar={hash:"svelte-1q2gxgn",code:`
  /* 1. Import Fluid Tokens & Styles */
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
   --------------------------------------------------------- */.svelte-1q2gxgn,
.svelte-1q2gxgn::before,
.svelte-1q2gxgn::after {box-sizing:border-box;}
  @starting-style {
}
  /* --- Breadcrumbs --- */
  /* =========================================================
   Fluid Responsive Headings (H1–H6)
   ========================================================= */
h4.svelte-1q2gxgn,
h5.svelte-1q2gxgn {font-weight:var(--font-weight-bold);line-height:1.2;text-wrap:pretty;margin-top:0;margin-bottom:var(--space-3);color:var(--text-header);}
  /* H1 – Größtes Heading */
  /* H2 */
  /* H3 */
  /* H4 */h4.svelte-1q2gxgn {font-size:clamp(1.25rem, 1.2vw + 0.7rem, 1.7rem);}
  /* H5 */h5.svelte-1q2gxgn {font-size:clamp(1.1rem, 1vw + 0.6rem, 1.5rem);}
  /* H6 – kleinste Überschrift */
  /* ---------------------------------------------------------
   3) COMPONENTS
   --------------------------------------------------------- */
  /* --- Buttons --- */.btn.svelte-1q2gxgn {padding:0.55rem 1.1rem;border-radius:var(--radius-md);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);cursor:pointer;font:inherit;display:inline-flex;align-items:center;justify-content:center;gap:0.4rem;transition:background var(--transition-normal),
    color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);}.btn.svelte-1q2gxgn:hover {background:var(--color-primary-soft);color:oklch(0.99 0 0);border-color:var(--color-primary);box-shadow:var(--shadow-soft);transform:translateY(-1px);}.btn.svelte-1q2gxgn:active {transform:translateY(0);box-shadow:none;}.btn-primary.svelte-1q2gxgn {background:var(--color-primary);border-color:var(--color-primary-dark);color:oklch(0.99 0 0);}.btn-primary.svelte-1q2gxgn:hover {background:var(--color-primary-dark);}.btn-ghost.svelte-1q2gxgn {background:transparent;border-color:transparent;}.btn-ghost.svelte-1q2gxgn:hover {background:oklch(0.9 0.02 250 / 0.12);}.btn-icon.svelte-1q2gxgn {padding:0.35rem;width:2.1rem;height:2.1rem;}
  /* --- Pagination --- */
  /* --- Theme Toggle Button --- */
  /* --- Inputs --- */.field-label.svelte-1q2gxgn {display:block;font-size:0.9rem;color:var(--text-muted);margin-bottom:var(--space-1);}.field-control.svelte-1q2gxgn {width:100%;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);font:inherit;transition:border-color var(--transition-normal),
    box-shadow var(--transition-normal),
    background var(--transition-normal);}.field-control.svelte-1q2gxgn:focus {outline:none;border-color:var(--color-primary);box-shadow:0 0 0 1px
    color-mix(in oklch, var(--color-primary) 60%, transparent);}
  /* Checkbox & Radio */
  /* Toggle Switch */
  /* Select */
  /* --- Cards --- */.card.svelte-1q2gxgn {background:var(--bg-elevated);padding:var(--space-4);border-radius:var(--radius-lg);border:1px solid var(--border);box-shadow:var(--shadow-soft);}
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
   ========================================================= */.error-msg.svelte-1q2gxgn {color:oklch(0.65 0.18 30);background:oklch(0.9 0.05 30 / 0.25);padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:var(--space-3);font-size:0.9rem;border:1px solid oklch(0.65 0.18 30 / 0.4);}
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
  /* Flex */.flex.svelte-1q2gxgn {display:flex;}.justify-end.svelte-1q2gxgn {justify-content:flex-end;}.gap-2.svelte-1q2gxgn {gap:var(--space-2);}
  /* Grid */
  /* Spacing */.mt-3.svelte-1q2gxgn {margin-top:var(--space-3);}.mb-3.svelte-1q2gxgn {margin-bottom:var(--space-3);}
  /* Width & Height */
  /* Display */
  /* Text */.text-muted.svelte-1q2gxgn {color:var(--text-muted);}
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
}:host {display:block;font-family:var(--font-family-sans);color:var(--text);}.rz-weather-wrapper.svelte-1q2gxgn {max-width:100%;}
  /* Header mit Flex für den Button */.widget-header.svelte-1q2gxgn {display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);border-bottom:1px solid var(--border);padding-bottom:var(--space-1);}.widget-header.svelte-1q2gxgn h4:where(.svelte-1q2gxgn) {margin:0;color:var(--color-primary);}
  /* Settings Panel Style (aus Fluid Environment) */.settings-panel.svelte-1q2gxgn {background:var(--bg-elevated);padding:var(--space-4);margin-bottom:var(--space-3);border:1px solid var(--border);border-radius:var(--radius-md);}.small.svelte-1q2gxgn {font-size:0.8rem;}
  /* Form */.search-form.svelte-1q2gxgn {margin-bottom:var(--space-3);}.input-group.svelte-1q2gxgn {display:flex;gap:var(--space-2);}.input-group.svelte-1q2gxgn input:where(.svelte-1q2gxgn) {flex:1;}
  /* Grid Layout for Data */.grid-container.svelte-1q2gxgn {display:grid;grid-template-columns:140px 1fr; /* Label Breite fix, Rest flexibel */gap:0.5rem 1rem;align-items:baseline;font-size:0.9rem;}
  /* Styling der Grid Items */.label.svelte-1q2gxgn {color:var(--text-muted);font-weight:var(--font-weight-medium);text-align:right;}.value.svelte-1q2gxgn {color:var(--text);font-weight:var(--font-weight-normal);}.value.highlight.svelte-1q2gxgn {color:var(--color-primary);font-weight:var(--font-weight-bold);}.full-width.svelte-1q2gxgn {grid-column:1 / -1;}
  /* Divider line within grid */.divider.svelte-1q2gxgn {height:1px;background:var(--border);margin:var(--space-2) 0;}.header.svelte-1q2gxgn {font-weight:var(--font-weight-bold);color:var(--text-header, var(--color-primary));margin-bottom:var(--space-1);font-size:0.95rem;}
  /* Animation */.fade-in.svelte-1q2gxgn {
    animation: svelte-1q2gxgn-fadeIn 0.4s ease-out;}
  @keyframes svelte-1q2gxgn-fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  /* Responsive Anpassung */
  @media (max-width: 400px) {.grid-container.svelte-1q2gxgn {grid-template-columns:1fr;gap:0.2rem;}.label.svelte-1q2gxgn {text-align:left;font-size:0.8rem;margin-top:0.5rem;}.value.svelte-1q2gxgn {padding-left:0.5rem;}
  }`};function lr(re,P){Ue(P,!1),je(re,ar);let M=ee(P,"location",12,""),L=ee(P,"title",12,"WEATHER & ENVIRONMENTAL DATA"),C=ee(P,"with_title",12,"yes"),y=u(""),m=u(""),x=u(!1),H=u(""),q=u(!1),A=u(!1),l=u(null);function te(){g(x,!e(x))}function ve(){e(m)&&localStorage.setItem("rz-weather",e(m)),g(x,!1),g(q,!1),g(H,""),e(y)&&I()}async function I(){if(e(y)){if(!e(m)){g(q,!0),g(H,"Configuration required: Please set API Key."),g(x,!0);return}g(q,!1),g(A,!0);try{const r=`https://api.weatherapi.com/v1/current.json?key=${e(m)}&aqi=yes&q=${e(y)}`,n=await fetch(r);if(!n.ok)throw new Error(`API Error: ${n.statusText}`);const s=await n.json();g(l,{...s.location,...s.current})}catch(r){g(q,!0),g(H,r.message||"Failed to fetch weather data")}finally{g(A,!1)}}}function he(r){r.preventDefault(),I()}Qe(()=>{const r=window.localStorage.getItem("rz-weather");r?g(m,r):g(x,!0),M()&&(g(y,M()),e(m)&&I())}),$e();var G=or(),oe=t(G);{var be=r=>{var n=Xe(),s=t(n),v=t(s,!0);o(s);var h=a(s,2);o(n),S(()=>d(v,L())),D("click",h,te),k(r,n)};p(oe,r=>{C()==="yes"&&r(be)})}var ae=a(oe,2);{var ke=r=>{var n=Je(),s=a(t(n),6);ge(s);var v=a(s,2),h=t(v),b=a(h,2);o(v),o(n),ce(s,()=>e(m),_=>g(m,_)),D("click",h,te),D("click",b,ve),k(r,n)};p(ae,r=>{e(x)&&r(ke)})}var le=a(ae,2);{var me=r=>{var n=Ze(),s=t(n,!0);o(n),S(()=>d(s,e(H))),k(r,n)};p(le,r=>{e(q)&&r(me)})}var ne=a(le,2);{var xe=r=>{var n=er(),s=t(n),v=a(t(s),2),h=t(v);ge(h);var b=a(h,2),_=t(b);{var E=c=>{var T=se("Loading...");k(c,T)},O=c=>{var T=se("Get Weather");k(c,T)};p(_,c=>{e(A)?c(E):c(O,!1)})}o(b),o(v),o(s),o(n),S(()=>b.disabled=e(A)),ce(h,()=>e(y),c=>g(y,c)),D("submit",n,he),k(r,n)};p(ne,r=>{e(x)||r(xe)})}var ue=a(ne,2);{var pe=r=>{var n=tr(),s=t(n),v=a(t(s),2),h=t(v,!0);o(v);var b=a(v,4),_=t(b,!0);o(b);var E=a(b,4),O=t(E,!0);o(E);var c=a(E,4),T=t(c);o(c);var B=a(c,4),fe=t(B,!0);o(B);var N=a(B,4),ye=t(N,!0);o(N);var R=a(N,4),we=t(R,!0);o(R);var F=a(R,6),qe=t(F,!0);o(F);var z=a(F,4),_e=t(z);o(z);var V=a(z,4),Ee=t(V);o(V);var U=a(V,4),Te=t(U);o(U);var W=a(U,4),Se=t(W);o(W);var Y=a(W,4),Pe=t(Y);o(Y);var K=a(Y,4),Me=t(K,!0);o(K);var He=a(K,2);{var Ae=w=>{var de=rr(),j=a(Ye(de),6),De=t(j);o(j);var $=a(j,4),Le=t($);o($);var Q=a($,4),Ce=t(Q);o(Q);var X=a(Q,4),Ie=t(X);o(X);var J=a(X,4),Ge=t(J);o(J);var ie=a(J,4),Oe=t(ie);o(ie),S((i,Be,Ne,Re,Fe,ze)=>{d(De,`${i??""} µg/m³`),d(Le,`${Be??""} µg/m³`),d(Ce,`${Ne??""} µg/m³`),d(Ie,`${Re??""} µg/m³`),d(Ge,`${Fe??""} µg/m³`),d(Oe,`${ze??""} µg/m³`)},[()=>{var i;return(i=e(l).air_quality.o3)==null?void 0:i.toFixed(1)},()=>{var i;return(i=e(l).air_quality.co)==null?void 0:i.toFixed(1)},()=>{var i;return(i=e(l).air_quality.no2)==null?void 0:i.toFixed(1)},()=>{var i;return(i=e(l).air_quality.so2)==null?void 0:i.toFixed(1)},()=>{var i;return(i=e(l).air_quality.pm10)==null?void 0:i.toFixed(1)},()=>{var i;return(i=e(l).air_quality.pm2_5)==null?void 0:i.toFixed(1)}],Ke),k(w,de)};p(He,w=>{e(l).air_quality&&w(Ae)})}o(s),o(n),S(()=>{var w;d(h,e(l).name),d(_,e(l).region),d(O,e(l).country),d(T,`${e(l).lat??""}, ${e(l).lon??""}`),d(fe,e(l).tz_id),d(ye,e(l).localtime),d(we,e(l).last_updated),d(qe,(w=e(l).condition)==null?void 0:w.text),d(_e,`${e(l).temp_c??""}°C`),d(Ee,`${e(l).feelslike_c??""}°C`),d(Te,`${e(l).wind_kph??""} km/h, ${e(l).wind_dir??""}`),d(Se,`${e(l).humidity??""}%`),d(Pe,`${e(l).pressure_mb??""} hPa`),d(Me,e(l).uv)}),k(r,n)};p(ue,r=>{e(l)&&!e(x)&&r(pe)})}return o(G),k(re,G),We({get location(){return M()},set location(r){M(r),Z()},get title(){return L()},set title(r){L(r),Z()},get with_title(){return C()},set with_title(r){C(r),Z()}})}customElements.define("rz-weather",Ve(lr,{location:{},title:{},with_title:{}},[],[],!0));
