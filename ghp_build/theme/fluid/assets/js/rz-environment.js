import{k as Yr,c as Kr,p as Ur,L as z,g as r,m as I,i as v,t as p,s as a,a as t,e as c,f as qr,h as Xr,r as e,b as P,j as d,n as kr,d as ir,u as Jr,K as wr}from"./custom-element.js";import{a as Qr}from"./css.js";import{i as k}from"./if.js";import{e as yr,i as _r}from"./each.js";import{r as cr,s as Tr}from"./attributes2.js";import{s as Sr}from"./class.js";import{s as Er}from"./style.js";import{b as vr}from"./input.js";import{i as Zr}from"./lifecycle.js";import{p as re}from"./props.js";import{o as ee}from"./index-client.js";import"./attributes.js";function Pr(sr,W){v(W,!r(W))}function te(sr,W,R,X,rr){localStorage.setItem("rz-env-owm",r(W).owm),localStorage.setItem("rz-env-rapid",r(W).rapid),localStorage.setItem("rz-env-storm",r(W).stormglass),localStorage.setItem("rz-env-location",R()),v(X,!1),rr()}var ae=p('<span class="location-badge svelte-zi9jhr"> </span>'),oe=p('<div class="settings-panel card svelte-zi9jhr"><h5 class="svelte-zi9jhr">Configuration</h5> <label class="field-label svelte-zi9jhr">Location (City Name or "Lat,Lon")</label> <input type="text" class="field-control mb-3 svelte-zi9jhr" placeholder="e.g. Hamburg or 53.55,9.99"> <hr class="divider svelte-zi9jhr"> <label class="field-label svelte-zi9jhr">OpenWeatherMap Key (Required)</label> <input type="password" class="field-control mb-2 svelte-zi9jhr" placeholder="OWM Key"> <label class="field-label svelte-zi9jhr">RapidAPI Key (Optional)</label> <input type="password" class="field-control mb-2 svelte-zi9jhr" placeholder="RapidAPI Key"> <label class="field-label svelte-zi9jhr">Stormglass Key (Optional)</label> <input type="password" class="field-control mb-3 svelte-zi9jhr" placeholder="Stormglass Key"> <div class="flex justify-end gap-2 svelte-zi9jhr"><button class="btn btn-ghost svelte-zi9jhr">Cancel</button> <button class="btn btn-primary svelte-zi9jhr">Save & Load</button></div></div>'),le=p('<div class="error-msg svelte-zi9jhr"> </div>'),ie=p('<div class="loading-state svelte-zi9jhr"><span class="loader svelte-zi9jhr"></span> Loading data...</div>'),se=p('<div class="card env-card svelte-zi9jhr"><div class="card-header svelte-zi9jhr"><div class="card-title svelte-zi9jhr">Weather</div> <img alt="Icon" class="weather-icon svelte-zi9jhr"></div> <div class="main-metric svelte-zi9jhr"> <span class="unit svelte-zi9jhr">°C</span></div> <div class="sub-metric svelte-zi9jhr"> </div> <div class="grid-details mt-3 svelte-zi9jhr"><div class="detail-item svelte-zi9jhr"><span class="label svelte-zi9jhr">Feels</span> <span class="val svelte-zi9jhr"> </span></div> <div class="detail-item svelte-zi9jhr"><span class="label svelte-zi9jhr">Humid</span> <span class="val svelte-zi9jhr"> </span></div> <div class="detail-item svelte-zi9jhr"><span class="label svelte-zi9jhr">Wind</span> <span class="val svelte-zi9jhr"> <small class="svelte-zi9jhr">m/s</small></span></div> <div class="detail-item svelte-zi9jhr"><span class="label svelte-zi9jhr">Press</span> <span class="val svelte-zi9jhr"> <small class="svelte-zi9jhr">hPa</small></span></div></div></div>'),ne=p('<div class="card env-card error-border svelte-zi9jhr"><div class="p-3 text-muted svelte-zi9jhr"> </div></div>'),de=p("<span> </span>"),ce=p('<div class="card env-card svelte-zi9jhr"><div class="card-header svelte-zi9jhr"><div class="card-title svelte-zi9jhr">Air Quality</div> <!></div> <div class="grid-details mt-2 svelte-zi9jhr"><div class="detail-row svelte-zi9jhr"><span class="label svelte-zi9jhr">PM<sub class="svelte-zi9jhr">2.5</sub></span> <div class="bar-container svelte-zi9jhr"><div class="bar-fill svelte-zi9jhr"></div></div> <span class="val svelte-zi9jhr"> </span></div> <div class="detail-row svelte-zi9jhr"><span class="label svelte-zi9jhr">PM<sub class="svelte-zi9jhr">10</sub></span> <div class="bar-container svelte-zi9jhr"><div class="bar-fill svelte-zi9jhr"></div></div> <span class="val svelte-zi9jhr"> </span></div> <div class="micro-grid mt-2 svelte-zi9jhr"><div class="micro-item svelte-zi9jhr"><span class="svelte-zi9jhr">NO₂</span> </div> <div class="micro-item svelte-zi9jhr"><span class="svelte-zi9jhr">O₃</span> </div> <div class="micro-item svelte-zi9jhr"><span class="svelte-zi9jhr">SO₂</span> </div> <div class="micro-item svelte-zi9jhr"><span class="svelte-zi9jhr">CO</span> </div></div></div></div>'),ve=p('<div class="api-error-msg svelte-zi9jhr"> </div>'),he=p('<div class="station-block svelte-zi9jhr"><div class="station-name svelte-zi9jhr"> </div> <div class="station-meta svelte-zi9jhr"><!> <!></div></div>'),ge=p('<li class="svelte-zi9jhr"><span class="tide-time svelte-zi9jhr"> </span> <span> </span> <span class="tide-height svelte-zi9jhr"> </span></li>'),me=p('<!> <ul class="tide-list svelte-zi9jhr"></ul>',1),pe=p('<div class="text-muted small p-2 svelte-zi9jhr">No Stormglass data or key missing.</div>'),be=p('<div class="api-error-msg svelte-zi9jhr"> </div>'),ue=p('<div class="rapid-item svelte-zi9jhr"><span class="r-time svelte-zi9jhr"> </span> <span class="r-val svelte-zi9jhr"> </span></div>'),ke=p('<div class="rapid-scroll svelte-zi9jhr"></div>'),xe=p('<div class="text-muted small p-2 svelte-zi9jhr">No RapidAPI data or key missing.</div>'),fe=p('<div class="card env-card svelte-zi9jhr"><div class="card-header svelte-zi9jhr"><div class="card-title svelte-zi9jhr">Tides</div> <span class="badge soft svelte-zi9jhr">Today</span></div> <div class="tides-content svelte-zi9jhr"><div class="source-label svelte-zi9jhr">Extremes (Stormglass)</div> <!> <hr class="divider svelte-zi9jhr"> <div class="source-label svelte-zi9jhr">Timeline (RapidAPI)</div> <!></div></div>'),ze=p('<div class="dashboard-grid svelte-zi9jhr"><!> <!> <!></div>'),je=p('<div class="env-wrapper svelte-zi9jhr"><header class="env-header svelte-zi9jhr"><div class="title-group svelte-zi9jhr"><h4 class="svelte-zi9jhr">Environment Data</h4> <!></div> <button class="btn btn-icon btn-ghost svelte-zi9jhr" title="Configuration"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-zi9jhr"><circle cx="12" cy="12" r="3" class="svelte-zi9jhr"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" class="svelte-zi9jhr"></path></svg></button></header> <!> <!> <!> <!></div>');const we={hash:"svelte-zi9jhr",code:`/* =========================================================
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
   --------------------------------------------------------- */.svelte-zi9jhr,
.svelte-zi9jhr::before,
.svelte-zi9jhr::after {box-sizing:border-box;}
@starting-style {
}
/* --- Breadcrumbs --- */.breadcrumb.svelte-zi9jhr {display:flex;flex-wrap:wrap;gap:0.35rem;font-size:0.9rem;color:var(--text-muted);}.breadcrumb-separator.svelte-zi9jhr {color:var(--text-muted);}
/* =========================================================
   Fluid Responsive Headings (H1–H6)
   ========================================================= */
h4.svelte-zi9jhr,
h5.svelte-zi9jhr {font-weight:var(--font-weight-bold);line-height:1.2;text-wrap:pretty;margin-top:0;margin-bottom:var(--space-3);color:var(--text-header);}
/* H1 – Größtes Heading */
/* H2 */
/* H3 */
/* H4 */h4.svelte-zi9jhr {font-size:clamp(1.25rem, 1.2vw + 0.7rem, 1.7rem);}
/* H5 */h5.svelte-zi9jhr {font-size:clamp(1.1rem, 1vw + 0.6rem, 1.5rem);}
/* H6 – kleinste Überschrift */.brief.svelte-zi9jhr {font-size:var(--font-size-small);color:var(--text-muted);margin-bottom:var(--space-4);}.brief.svelte-zi9jhr::before {opacity:0.5;content:"» ";}.text.svelte-zi9jhr {max-width:70ch;padding:3em 1em;margin:auto;line-height:1.75;text-wrap:pretty;}
/* ---------------------------------------------------------
   3) COMPONENTS
   --------------------------------------------------------- */
/* --- Buttons --- */.btn.svelte-zi9jhr {padding:0.55rem 1.1rem;border-radius:var(--radius-md);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);cursor:pointer;font:inherit;display:inline-flex;align-items:center;justify-content:center;gap:0.4rem;transition:background var(--transition-normal),
    color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);}.btn.svelte-zi9jhr:hover {background:var(--color-primary-soft);color:oklch(0.99 0 0);border-color:var(--color-primary);box-shadow:var(--shadow-soft);transform:translateY(-1px);}.btn.svelte-zi9jhr:active {transform:translateY(0);box-shadow:none;}.btn-primary.svelte-zi9jhr {background:var(--color-primary);border-color:var(--color-primary-dark);color:oklch(0.99 0 0);}.btn-primary.svelte-zi9jhr:hover {background:var(--color-primary-dark);}.btn-outline.svelte-zi9jhr {background:transparent;border-color:var(--color-primary);color:var(--color-primary);}.btn-ghost.svelte-zi9jhr {background:transparent;border-color:transparent;}.btn-ghost.svelte-zi9jhr:hover {background:oklch(0.9 0.02 250 / 0.12);}.btn-sm.svelte-zi9jhr {padding:0.3rem 0.7rem;font-size:0.85rem;border-radius:var(--radius-sm);}.btn-icon.svelte-zi9jhr {padding:0.35rem;width:2.1rem;height:2.1rem;}
/* --- Pagination --- */.pagination.svelte-zi9jhr {display:inline-flex;gap:0.25rem;align-items:center;}.page-btn.svelte-zi9jhr {min-width:2rem;height:2rem;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);font-size:0.85rem;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background var(--transition-normal),
    border-color var(--transition-normal),
    color var(--transition-normal);}.page-btn.svelte-zi9jhr:hover {background:var(--color-primary-soft);border-color:var(--color-primary);color:oklch(0.99 0 0);}.page-btn.is-active.svelte-zi9jhr {background:var(--color-primary);border-color:var(--color-primary-dark);color:oklch(0.99 0 0);}
/* --- Theme Toggle Button --- */
/* --- Inputs --- */.field-label.svelte-zi9jhr {display:block;font-size:0.9rem;color:var(--text-muted);margin-bottom:var(--space-1);}.field-control.svelte-zi9jhr {width:100%;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);font:inherit;transition:border-color var(--transition-normal),
    box-shadow var(--transition-normal),
    background var(--transition-normal);}.field-control.svelte-zi9jhr:focus {outline:none;border-color:var(--color-primary);box-shadow:0 0 0 1px
    color-mix(in oklch, var(--color-primary) 60%, transparent);}
/* Checkbox & Radio */.form-row.svelte-zi9jhr {display:flex;align-items:center;gap:0.5rem;margin-bottom:var(--space-2);font-size:0.9rem;}.input-checkbox.svelte-zi9jhr,
.input-radio.svelte-zi9jhr {width:1rem;height:1rem;border-radius:4px;border:1px solid var(--border);appearance:none;background:var(--bg-alt);cursor:pointer;display:inline-block;position:relative;}.input-radio.svelte-zi9jhr {border-radius:999px;}.input-checkbox.svelte-zi9jhr:checked,
.input-radio.svelte-zi9jhr:checked {border-color:var(--color-primary);background:var(--color-primary);}.input-checkbox.svelte-zi9jhr:checked::after {content:"";position:absolute;inset:2px;border-radius:2px;background:oklch(0.99 0 0);}.input-radio.svelte-zi9jhr:checked::after {content:"";position:absolute;inset:3px;border-radius:999px;background:oklch(0.99 0 0);}
/* Toggle Switch */.toggle.svelte-zi9jhr {position:relative;width:2.4rem;height:1.3rem;border-radius:999px;background:var(--bg-alt);border:1px solid var(--border);cursor:pointer;transition:background var(--transition-normal),
    border-color var(--transition-normal);}.toggle-knob.svelte-zi9jhr {position:absolute;top:1px;left:1px;width:1rem;height:1rem;border-radius:999px;background:var(--bg);box-shadow:var(--shadow-soft);transition:transform var(--transition-normal);}.toggle-input.svelte-zi9jhr {display:none;}
/* Select */.select-control.svelte-zi9jhr {width:100%;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg-alt);color:var(--text);font:inherit;transition:border-color var(--transition-normal),
    box-shadow var(--transition-normal),
    background var(--transition-normal);}.select-control.svelte-zi9jhr:focus {outline:none;border-color:var(--color-primary);box-shadow:0 0 0 1px
    color-mix(in oklch, var(--color-primary) 60%, transparent);}
/* --- Cards --- */.card.svelte-zi9jhr {background:var(--bg-elevated);padding:var(--space-4);border-radius:var(--radius-lg);border:1px solid var(--border);box-shadow:var(--shadow-soft);}.card-header.svelte-zi9jhr {display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);}.card-title.svelte-zi9jhr {font-size:1.1rem;font-weight:var(--font-weight-bold);color:var(--color-primary);}.card-subtitle.svelte-zi9jhr {font-size:0.9rem;color:var(--text-muted);}
/* =========================================================
   Card Status Variants
   ========================================================= */.card-ok.svelte-zi9jhr {border-color:oklch(0.75 0.12 150);box-shadow:0 0 12px oklch(0.75 0.12 150 / 0.35);}.card-warning.svelte-zi9jhr {border-color:oklch(0.85 0.15 90);box-shadow:0 0 12px oklch(0.85 0.15 90 / 0.35);}.card-critical.svelte-zi9jhr {border-color:oklch(0.65 0.18 30);box-shadow:0 0 12px oklch(0.65 0.18 30 / 0.35);}
/* --- Theme Preview Cards – feste Farben je Theme --- */.theme-preview-card.svelte-zi9jhr {cursor:pointer;transition:transform var(--transition-normal),
    box-shadow var(--transition-normal);}.theme-preview-card.svelte-zi9jhr:hover {transform:translateY(-2px);box-shadow:var(--shadow-soft);}
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
/* Anwendung der Preview-Variablen */.theme-preview-card.svelte-zi9jhr {background:var(--preview-bg);border-color:var(--preview-border);color:var(--preview-text);}
/* =========================================================
   Message Boxes
   ========================================================= */.success-msg.svelte-zi9jhr {color:oklch(0.65 0.15 150);background:oklch(0.9 0.05 150 / 0.25);padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:var(--space-3);font-size:0.9rem;border:1px solid oklch(0.65 0.15 150 / 0.4);}.error-msg.svelte-zi9jhr {color:oklch(0.65 0.18 30);background:oklch(0.9 0.05 30 / 0.25);padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:var(--space-3);font-size:0.9rem;border:1px solid oklch(0.65 0.18 30 / 0.4);}.info-msg.svelte-zi9jhr {color:var(--color-primary-dark);background:color-mix(in oklch, var(--color-primary) 12%, var(--bg));padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:var(--space-3);font-size:0.9rem;border:1px solid var(--color-primary);}.warning-msg.svelte-zi9jhr {color:oklch(0.75 0.15 90);background:oklch(0.95 0.05 90 / 0.25);padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:var(--space-3);font-size:0.9rem;border:1px solid oklch(0.75 0.15 90 / 0.4);}
/* --- Badges & Chips --- */.badge.svelte-zi9jhr {display:inline-flex;align-items:center;padding:0.15rem 0.55rem;border-radius:var(--radius-pill);font-size:0.8rem;background:color-mix(in oklch, var(--color-primary) 12%, var(--bg));color:var(--color-primary-dark);}.badge.soft.svelte-zi9jhr {background:color-mix(in oklch, var(--color-primary) 8%, var(--bg));}.chip.svelte-zi9jhr {display:inline-flex;align-items:center;gap:0.35rem;padding:0.25rem 0.7rem;border-radius:var(--radius-pill);border:1px solid var(--border);background:var(--bg-alt);font-size:0.85rem;cursor:pointer;transition:var(--transition-normal);}.chip.active.svelte-zi9jhr {border-color:var(--color-primary);background:color-mix(in oklch, var(--color-primary) 14%, var(--bg-alt));color:var(--color-primary-dark);}
/* --- Tabs --- */.tabs.svelte-zi9jhr {display:inline-flex;gap:0.25rem;padding:0.2rem;border-radius:var(--radius-pill);background:var(--bg-alt);border:1px solid var(--border);}.tab.svelte-zi9jhr {padding:0.35rem 0.9rem;border-radius:var(--radius-pill);font-size:0.85rem;cursor:pointer;border:none;background:transparent;color:var(--text-muted);transition:var(--transition-normal);}.tab.active.svelte-zi9jhr {background:var(--color-primary);color:oklch(0.99 0 0);}
/* Modal */.modal-backdrop.svelte-zi9jhr {position:fixed;inset:0;background:oklch(0 0 0 / 0.4);display:none;align-items:center;justify-content:center;z-index:50;}.modal-backdrop.is-open.svelte-zi9jhr {display:flex;}.modal.svelte-zi9jhr {background:var(--bg-elevated);border-radius:var(--radius-lg);border:1px solid var(--border);box-shadow:var(--shadow-soft);max-width:640px;width:90%;padding:var(--space-4);position:relative;}.modal-close.svelte-zi9jhr {position:absolute;top:0.75rem;right:0.75rem;border:none;background:transparent;cursor:pointer;color:var(--text-muted);}
/* --- Images --- */img.svelte-zi9jhr:empty::before {content:"Image not available";color:red;}
/* =========================================================
   Lazy Loading Images
   ========================================================= */.lazy-img.svelte-zi9jhr {opacity:0;filter:blur(4px);transition:opacity 0.4s ease,
    filter 0.4s ease;}.lazy-img.loaded.svelte-zi9jhr {opacity:1;filter:blur(0);}
/* --- Figures --- */
/* Gallery */.gallery.svelte-zi9jhr {display:grid;gap:var(--space-3);grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));}.gallery-2.svelte-zi9jhr {display:grid;gap:var(--space-3);grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));}.gallery.svelte-zi9jhr {cursor:pointer;transition:transform var(--transition-normal),
    box-shadow var(--transition-normal);}.gallery.svelte-zi9jhr {transform:translateY(-2px);box-shadow:var(--shadow-soft);}
/* Modal Image */.modal-image.svelte-zi9jhr {max-width:100%;max-height:80vh; /* Platz für Caption lassen */object-fit:contain; /* verhindert Verzerrung */border-radius:var(--radius-md);border:1px solid var(--border);}
/* Accordion */.accordion.svelte-zi9jhr {border-radius:var(--radius-md);border:1px solid var(--border);background:var(--bg-elevated);}.accordion-header.svelte-zi9jhr {padding:0.75rem 1rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;}.accordion-body.svelte-zi9jhr {padding:0.75rem 1rem;display:none;}
/* Toasts */.toast-container.svelte-zi9jhr {position:fixed;right:1.5rem;top:1.5rem;display:flex;flex-direction:column;gap:0.5rem;z-index:60;}.toast.svelte-zi9jhr {padding:0.6rem 0.9rem;border-radius:var(--radius-md);background:var(--bg-elevated);border:1px solid var(--border);box-shadow:var(--shadow-soft);font-size:0.9rem;}
/* Tooltip */.tooltip.svelte-zi9jhr {position:relative;}.tooltip-content.svelte-zi9jhr {position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:var(--bg-elevated);color:var(--text);padding:0.35rem 0.6rem;border-radius:var(--radius-sm);font-size:0.8rem;border:1px solid var(--border);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 0.18s ease-out;}
/* =========================================================
   TABLE OF CONTENTS (TOC)
   Generated automatically by SSG
   Adapted for Fluid Tokens & Themes
   ========================================================= */
/* 1. Container-Look für die Hauptliste */
/* 2. Reset für alle Listen-Ebenen */
/* 3. Abstände der Listeneinträge */
/* 4. Einrückung und Guides für Unterebenen (h3, h4) */.toc-level-3.svelte-zi9jhr,
.toc-level-4.svelte-zi9jhr {margin-top:0.4rem;margin-left:1.2rem;padding-left:0.8rem;
  /* Dünne Linie in Theme-Border-Farbe */border-left:1px solid var(--border);}.toc-level-4.svelte-zi9jhr {font-size:0.9em;}
/* 5. Link-Styling */
/* 6. Anpassung des Pfeils (Breadcrumb-Style Arrow) */
/* --- THEME SPECIFIC OVERRIDES (Optional tweaks) --- */
/* Tron: Stärkerer Glow für das TOC */
/* Matrix: Terminal Look */
/* ---------------------------------------------------------
   4) UTILITIES
   --------------------------------------------------------- */
/* Flex */.flex.svelte-zi9jhr {display:flex;}.inline-flex.svelte-zi9jhr {display:inline-flex;}.flex-row.svelte-zi9jhr {flex-direction:row;}.flex-col.svelte-zi9jhr {flex-direction:column;}.flex-wrap.svelte-zi9jhr {flex-wrap:wrap;}.flex-nowrap.svelte-zi9jhr {flex-wrap:nowrap;}.items-start.svelte-zi9jhr {align-items:flex-start;}.items-center.svelte-zi9jhr {align-items:center;}.items-end.svelte-zi9jhr {align-items:flex-end;}.justify-start.svelte-zi9jhr {justify-content:flex-start;}.justify-center.svelte-zi9jhr {justify-content:center;}.justify-end.svelte-zi9jhr {justify-content:flex-end;}.justify-between.svelte-zi9jhr {justify-content:space-between;}.justify-around.svelte-zi9jhr {justify-content:space-around;}.justify-evenly.svelte-zi9jhr {justify-content:space-evenly;}.gap-1.svelte-zi9jhr {gap:var(--space-1);}.gap-2.svelte-zi9jhr {gap:var(--space-2);}.gap-3.svelte-zi9jhr {gap:var(--space-3);}.gap-4.svelte-zi9jhr {gap:var(--space-4);}.gap-5.svelte-zi9jhr {gap:var(--space-5);}
/* Grid */.grid.svelte-zi9jhr {display:grid;}.grid-gap-1.svelte-zi9jhr {gap:var(--space-1);}.grid-gap-2.svelte-zi9jhr {gap:var(--space-2);}.grid-gap-3.svelte-zi9jhr {gap:var(--space-3);}.grid-gap-4.svelte-zi9jhr {gap:var(--space-4);}.grid-cols-1.svelte-zi9jhr {grid-template-columns:repeat(1, 1fr);}.grid-cols-2.svelte-zi9jhr {grid-template-columns:repeat(2, 1fr);}.grid-cols-3.svelte-zi9jhr {grid-template-columns:repeat(3, 1fr);}.grid-cols-4.svelte-zi9jhr {grid-template-columns:repeat(4, 1fr);}.grid-auto-sm.svelte-zi9jhr {grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));}.grid-auto-md.svelte-zi9jhr {grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));}.grid-auto-lg.svelte-zi9jhr {grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));}
/* Spacing */.m-0.svelte-zi9jhr {margin:0;}.m-1.svelte-zi9jhr {margin:var(--space-1);}.m-2.svelte-zi9jhr {margin:var(--space-2);}.m-3.svelte-zi9jhr {margin:var(--space-3);}.m-4.svelte-zi9jhr {margin:var(--space-4);}.m-5.svelte-zi9jhr {margin:var(--space-5);}.m-6.svelte-zi9jhr {margin:var(--space-6);}.mt-1.svelte-zi9jhr {margin-top:var(--space-1);}.mt-2.svelte-zi9jhr {margin-top:var(--space-2);}.mt-3.svelte-zi9jhr {margin-top:var(--space-3);}.mt-4.svelte-zi9jhr {margin-top:var(--space-4);}.mb-1.svelte-zi9jhr {margin-bottom:var(--space-1);}.mb-2.svelte-zi9jhr {margin-bottom:var(--space-2);}.mb-3.svelte-zi9jhr {margin-bottom:var(--space-3);}.mb-4.svelte-zi9jhr {margin-bottom:var(--space-4);}.ml-1.svelte-zi9jhr {margin-left:var(--space-1);}.mr-1.svelte-zi9jhr {margin-right:var(--space-1);}.p-0.svelte-zi9jhr {padding:0;}.p-1.svelte-zi9jhr {padding:var(--space-1);}.p-2.svelte-zi9jhr {padding:var(--space-2);}.p-3.svelte-zi9jhr {padding:var(--space-3);}.p-4.svelte-zi9jhr {padding:var(--space-4);}.p-5.svelte-zi9jhr {padding:var(--space-5);}.p-6.svelte-zi9jhr {padding:var(--space-6);}.px-2.svelte-zi9jhr {padding-left:var(--space-2);padding-right:var(--space-2);}.py-2.svelte-zi9jhr {padding-top:var(--space-2);padding-bottom:var(--space-2);}
/* Width & Height */.w-full.svelte-zi9jhr {width:100%;}.w-auto.svelte-zi9jhr {width:auto;}.max-w-sm.svelte-zi9jhr {max-width:420px;}.max-w-md.svelte-zi9jhr {max-width:640px;}.max-w-lg.svelte-zi9jhr {max-width:960px;}.h-full.svelte-zi9jhr {height:100%;}.h-auto.svelte-zi9jhr {height:auto;}
/* Display */.block.svelte-zi9jhr {display:block;}.inline-block.svelte-zi9jhr {display:inline-block;}.hidden.svelte-zi9jhr {display:none;}
/* Text */.text-left.svelte-zi9jhr {text-align:left;}.text-center.svelte-zi9jhr {text-align:center;}.text-right.svelte-zi9jhr {text-align:right;}.text-muted.svelte-zi9jhr {color:var(--text-muted);}.text-bold.svelte-zi9jhr {font-weight:var(--font-weight-bold);}.text-medium.svelte-zi9jhr {font-weight:var(--font-weight-medium);}
/* Containers */.container.svelte-zi9jhr {width:100%;margin:0 auto;padding-left:var(--space-4);padding-right:var(--space-4);max-width:1200px;}.container-sm.svelte-zi9jhr {max-width:640px;}.container-md.svelte-zi9jhr {max-width:960px;}.container-lg.svelte-zi9jhr {max-width:1400px;}
/* Sections */.section.svelte-zi9jhr {padding-top:var(--space-6);padding-bottom:var(--space-6);}.section-sm.svelte-zi9jhr {padding-top:var(--space-4);padding-bottom:var(--space-4);}.section-lg.svelte-zi9jhr {padding-top:calc(var(--space-6) * 1.5);padding-bottom:calc(var(--space-6) * 1.5);}
/* =========================================================
   Docs-Navigation (Sidebar)
   ========================================================= */
/* =========================================================
   Tables
   ========================================================= */.table.svelte-zi9jhr {width:100%;border-collapse:collapse;background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;font-size:0.95rem;}
/* =========================================================
   Scroll-To-Top Button
   ========================================================= */.scroll-top-btn.svelte-zi9jhr {position:fixed;right:1rem;bottom:calc(var(--space-6) + 1rem); /* Abstand über Footer */width:2.6rem;height:2.6rem;border-radius:var(--radius-md);background:var(--bg-alt);border:1px solid var(--border);color:var(--text-muted);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--shadow-soft);opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity 0.3s ease,
    transform 0.3s ease,
    background var(--transition-normal),
    border-color var(--transition-normal),
    color var(--transition-normal);}.scroll-top-btn.svelte-zi9jhr:hover {background:var(--color-primary-soft);border-color:var(--color-primary);color:oklch(0.99 0 0);}.scroll-top-btn.visible.svelte-zi9jhr {opacity:1;pointer-events:auto;transform:translateY(0);}
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
@media (max-width: 899px) {.sidebar.svelte-zi9jhr {display:flex;flex-direction:column;align-items:center;gap:var(--space-2);}
}
@media (min-width: 1024px) {
}:host {display:block;font-family:var(--font-family-sans);color:var(--text);}.env-wrapper.svelte-zi9jhr {width:100%;}
/* Header */.env-header.svelte-zi9jhr {display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-3);border-bottom:1px solid var(--border);padding-bottom:var(--space-2);}.title-group.svelte-zi9jhr {display:flex;align-items:center;gap:var(--space-2);}.env-header.svelte-zi9jhr h4:where(.svelte-zi9jhr) {margin:0;color:var(--color-primary);}.location-badge.svelte-zi9jhr {font-size:0.8rem;background:var(--bg-alt);padding:0.2rem 0.5rem;border-radius:var(--radius-sm);color:var(--text-muted);border:1px solid var(--border);max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
/* Grid */.dashboard-grid.svelte-zi9jhr {display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:var(--space-3);}.env-card.svelte-zi9jhr {min-height:220px;display:flex;flex-direction:column;}.error-border.svelte-zi9jhr {border-color:var(--color-primary-dark);border-style:dashed;}
/* Metrics */.main-metric.svelte-zi9jhr {font-size:2.5rem;font-weight:var(--font-weight-bold);line-height:1;}.main-metric.svelte-zi9jhr .unit:where(.svelte-zi9jhr) {font-size:1.2rem;color:var(--text-muted);vertical-align:top;}.sub-metric.svelte-zi9jhr {text-transform:capitalize;color:var(--text-muted);margin-bottom:var(--space-3);}.weather-icon.svelte-zi9jhr {width:40px;height:40px;margin-top:-10px;}.grid-details.svelte-zi9jhr {display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;background:var(--bg-alt);padding:var(--space-2);border-radius:var(--radius-sm);}.detail-item.svelte-zi9jhr {display:flex;justify-content:space-between;font-size:0.85rem;}.detail-item.svelte-zi9jhr .label:where(.svelte-zi9jhr) {color:var(--text-muted);}.detail-item.svelte-zi9jhr .val:where(.svelte-zi9jhr) {font-weight:var(--font-weight-medium);}
/* Pollution */.badge-success.svelte-zi9jhr {background:oklch(0.9 0.1 140);color:oklch(0.3 0.1 140);}.badge-info.svelte-zi9jhr {background:oklch(0.9 0.1 240);color:oklch(0.3 0.1 240);}.badge-warning.svelte-zi9jhr {background:oklch(0.95 0.15 80);color:oklch(0.4 0.15 80);}.badge-critical.svelte-zi9jhr {background:oklch(0.9 0.15 30);color:oklch(0.4 0.15 30);}.detail-row.svelte-zi9jhr {display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;margin-bottom:0.5rem;}.detail-row.svelte-zi9jhr .label:where(.svelte-zi9jhr) {width:40px;color:var(--text-muted);}.bar-container.svelte-zi9jhr {flex:1;height:6px;background:var(--bg-alt);border-radius:99px;overflow:hidden;}.bar-fill.svelte-zi9jhr {height:100%;background:var(--color-primary);}.micro-grid.svelte-zi9jhr {display:grid;grid-template-columns:1fr 1fr;gap:5px;}.micro-item.svelte-zi9jhr {background:var(--bg-alt);padding:4px 8px;border-radius:4px;font-size:0.75rem;display:flex;justify-content:space-between;}.micro-item.svelte-zi9jhr span:where(.svelte-zi9jhr) {color:var(--text-muted);}
/* Tides */.source-label.svelte-zi9jhr {font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin:0.5rem 0;opacity:0.8;}
/* STATION INFO */.station-block.svelte-zi9jhr {background:var(--bg-alt);padding:6px 10px;border-radius:var(--radius-sm);margin-bottom:0.5rem;border-left:3px solid var(--color-primary);}.station-name.svelte-zi9jhr {font-weight:var(--font-weight-bold);font-size:0.9rem;text-transform:capitalize;color:var(--text);}.station-meta.svelte-zi9jhr {font-size:0.75rem;color:var(--text-muted);margin-top:2px;}.tide-list.svelte-zi9jhr {list-style:none;padding:0;margin:0;}.tide-list.svelte-zi9jhr li:where(.svelte-zi9jhr) {display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border);font-size:0.9rem;}.tide-list.svelte-zi9jhr li:where(.svelte-zi9jhr):last-child {border:none;}.tide-type.high.svelte-zi9jhr {color:var(--color-primary);font-weight:500;}.tide-type.low.svelte-zi9jhr {color:var(--text-muted);}.rapid-scroll.svelte-zi9jhr {display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.5rem;}.rapid-item.svelte-zi9jhr {background:var(--bg-alt);padding:5px 10px;border-radius:var(--radius-sm);text-align:center;min-width:70px;}.r-time.svelte-zi9jhr {display:block;font-size:0.75rem;color:var(--text-muted);}.r-val.svelte-zi9jhr {display:block;font-weight:bold;font-size:0.9rem;}.divider.svelte-zi9jhr {border:0;border-top:1px solid var(--border);margin:1rem 0;}.api-error-msg.svelte-zi9jhr {font-size:0.8rem;color:oklch(0.6 0.15 30);background:oklch(0.95 0.05 30 / 0.2);padding:4px 8px;border-radius:4px;margin-bottom:8px;}
/* Settings & UI */.settings-panel.svelte-zi9jhr {background:var(--bg-elevated);padding:var(--space-4);margin-bottom:var(--space-3);border:1px solid var(--border);border-radius:var(--radius-md);}.loader.svelte-zi9jhr {width:16px;height:16px;border:2px solid var(--text-muted);border-bottom-color:transparent;border-radius:50%;display:inline-block; animation: svelte-zi9jhr-rot 1s linear infinite;vertical-align:middle;margin-right:8px;}
@keyframes svelte-zi9jhr-rot { 100% { transform: rotate(360deg); } }.error-msg.svelte-zi9jhr {margin-bottom:var(--space-3);color:oklch(0.6 0.15 30);}`};function ye(sr,W){Ur(W,!1),Qr(sr,we);let R=re(W,"location",12,"Hamburg"),X=I(!1),rr=I(!1),i=I({global:"",weather:"",pollution:"",rapid:"",storm:""}),Y=I(""),K=I(""),hr=I(""),n=I({owm:"",rapid:"",stormglass:""}),A=I(null),j=I(null),ar=I(null),or=I(null),J=I(null);const gr={1:{label:"Good",class:"badge-success"},2:{label:"Fair",class:"badge-info"},3:{label:"Moderate",class:"badge-warning"},4:{label:"Poor",class:"badge-critical"},5:{label:"Very Poor",class:"badge-critical"}};function Mr(o){const l=/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/,s=o.trim().match(l);return s?{type:"coord",lat:s[1],lon:s[3]}:{type:"city",q:o.trim()}}async function Lr(o){if(!r(n).owm)return null;z(i,r(i).weather="");let l="";o.type==="coord"?(l=`https://api.openweathermap.org/data/2.5/weather?lat=${o.lat}&lon=${o.lon}&appid=${r(n).owm}&units=metric&lang=en`,v(Y,o.lat),v(K,o.lon)):l=`https://api.openweathermap.org/data/2.5/weather?q=${o.q}&appid=${r(n).owm}&units=metric&lang=en`;try{const s=await fetch(l),b=await s.json();if(!s.ok)throw new Error(b.message||s.statusText);return b.coord&&(v(Y,b.coord.lat),v(K,b.coord.lon)),v(hr,b.name||R()),b}catch(s){return z(i,r(i).weather=s.message),null}}async function Hr(){var o;if(!(!r(n).owm||!r(Y)||!r(K))){z(i,r(i).pollution="");try{const l=await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${r(Y)}&lon=${r(K)}&appid=${r(n).owm}`),s=await l.json();if(!l.ok)throw new Error(s.message);v(j,((o=s.list)==null?void 0:o[0])||null)}catch(l){z(i,r(i).pollution=l.message)}}}async function Dr(){if(!r(n).rapid||!r(Y)||!r(K))return;z(i,r(i).rapid="");const o=`https://tides.p.rapidapi.com/tides?interval=60&longitude=${r(K)}&latitude=${r(Y)}&duration=1440`;try{const l=await fetch(o,{method:"GET",headers:{"x-rapidapi-host":"tides.p.rapidapi.com","x-rapidapi-key":r(n).rapid}}),s=await l.json();if(!l.ok)throw new Error(s.message||"API Error");v(ar,s.extremes||s.heights||null)}catch(l){z(i,r(i).rapid=l.message)}}async function Ir(){if(!r(n).stormglass||!r(Y)||!r(K))return;z(i,r(i).storm="");const l=new Date().toISOString().split("T")[0],s=`https://api.stormglass.io/v2/tide/extremes/point?lat=${r(Y)}&lng=${r(K)}&start=${l}&end=${l}`;try{const b=await fetch(s,{headers:{Authorization:r(n).stormglass}}),U=await b.json();if(!b.ok)throw new Error(JSON.stringify(U.errors)||b.statusText);v(or,U.data||null),v(J,U.meta||null)}catch(b){console.error("Stormglass Error",b),z(i,r(i).storm=b.message)}}async function xr(){if(R()){v(rr,!0),v(i,{global:"",weather:"",pollution:"",rapid:"",storm:""}),v(A,null),v(j,null),v(ar,null),v(or,null),v(J,null);try{const o=Mr(R());v(A,await Lr(o)),r(A)&&await Promise.all([Hr(),Dr(),Ir()])}catch(o){z(i,r(i).global=o.message)}finally{v(rr,!1)}}}ee(()=>{z(n,r(n).owm=localStorage.getItem("rz-env-owm")||""),z(n,r(n).rapid=localStorage.getItem("rz-env-rapid")||""),z(n,r(n).stormglass=localStorage.getItem("rz-env-storm")||"");const o=localStorage.getItem("rz-env-location");o&&R(o),!r(n).owm&&!r(n).rapid&&!r(n).stormglass?v(X,!0):xr()});function Ar(o){return new Date(o*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function Or(o){return new Date(o).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}Zr();var mr=je(),pr=t(mr),br=t(pr),Cr=a(t(br),2);{var Gr=o=>{var l=ae(),s=t(l,!0);e(l),P(()=>{Tr(l,"title",`Lat: ${r(Y)??""}, Lon: ${r(K)??""}`),d(s,r(hr))}),c(o,l)};k(Cr,o=>{r(hr)&&o(Gr)})}e(br);var Nr=a(br,2);Nr.__click=[Pr,X],e(pr);var fr=a(pr,2);{var Rr=o=>{var l=oe(),s=a(t(l),4);cr(s);var b=a(s,6);cr(b);var U=a(b,4);cr(U);var er=a(U,4);cr(er);var nr=a(er,2),dr=t(nr);dr.__click=[Pr,X];var ur=a(dr,2);ur.__click=[te,n,R,X,xr],e(nr),e(l),vr(s,R),vr(b,()=>r(n).owm,h=>z(n,r(n).owm=h)),vr(U,()=>r(n).rapid,h=>z(n,r(n).rapid=h)),vr(er,()=>r(n).stormglass,h=>z(n,r(n).stormglass=h)),c(o,l)};k(fr,o=>{r(X)&&o(Rr)})}var zr=a(fr,2);{var Br=o=>{var l=le(),s=t(l,!0);e(l),P(()=>d(s,r(i).global)),c(o,l)};k(zr,o=>{r(i).global&&o(Br)})}var jr=a(zr,2);{var Fr=o=>{var l=ie();c(o,l)};k(jr,o=>{r(rr)&&o(Fr)})}var $r=a(jr,2);{var Vr=o=>{var l=ze(),s=t(l);{var b=h=>{var _=se(),M=t(_),B=a(t(M),2);e(M);var O=a(M,2),q=t(O,!0);kr(),e(O);var C=a(O,2),Q=t(C,!0);e(C);var tr=a(C,2),g=t(tr),x=a(t(g),2),T=t(x);e(x),e(g);var G=a(g,2),u=a(t(G),2),f=t(u);e(u),e(G);var F=a(G,2),L=a(t(F),2),H=t(L);kr(),e(L),e(F);var w=a(F,2),m=a(t(w),2),y=t(m);kr(),e(m),e(w),e(tr),e(_),P((S,E)=>{Tr(B,"src",`https://openweathermap.org/img/wn/${r(A).weather[0].icon}.png`),d(q,S),d(Q,r(A).weather[0].description),d(T,`${E??""}°`),d(f,`${r(A).main.humidity??""}%`),d(H,`${r(A).wind.speed??""} `),d(y,`${r(A).main.pressure??""} `)},[()=>Math.round(r(A).main.temp),()=>Math.round(r(A).main.feels_like)],ir),c(h,_)},U=(h,_)=>{{var M=B=>{var O=ne(),q=t(O),C=t(q);e(q),e(O),P(()=>d(C,`Weather Error: ${r(i).weather??""}`)),c(B,O)};k(h,B=>{r(i).weather&&B(M)},_)}};k(s,h=>{r(A)?h(b):h(U,!1)})}var er=a(s,2);{var nr=h=>{var _=ce(),M=t(_),B=a(t(M),2);{var O=$=>{var V=de(),N=t(V,!0);e(V),P(()=>{Sr(V,1,`badge ${gr[r(j).main.aqi].class??""}`,"svelte-zi9jhr"),d(N,gr[r(j).main.aqi].label)}),c($,V)};k(B,$=>{gr[r(j).main.aqi]&&$(O)})}e(M);var q=a(M,2),C=t(q),Q=a(t(C),2),tr=t(Q);e(Q);var g=a(Q,2),x=t(g,!0);e(g),e(C);var T=a(C,2),G=a(t(T),2),u=t(G);e(G);var f=a(G,2),F=t(f,!0);e(f),e(T);var L=a(T,2),H=t(L),w=a(t(H));e(H);var m=a(H,2),y=a(t(m));e(m);var S=a(m,2),E=a(t(S));e(S);var D=a(S,2),lr=a(t(D));e(D),e(L),e(q),e(_),P(($,V)=>{Er(tr,`width: ${$??""}%`),d(x,r(j).components.pm2_5),Er(u,`width: ${V??""}%`),d(F,r(j).components.pm10),d(w,` ${r(j).components.no2??""}`),d(y,` ${r(j).components.o3??""}`),d(E,` ${r(j).components.so2??""}`),d(lr,` ${r(j).components.co??""}`)},[()=>Math.min(r(j).components.pm2_5*2,100),()=>Math.min(r(j).components.pm10,100)],ir),c(h,_)};k(er,h=>{r(j)&&h(nr)})}var dr=a(er,2);{var ur=h=>{var _=fe(),M=a(t(_),2),B=a(t(M),2);{var O=g=>{var x=ve(),T=t(x);e(x),P(()=>d(T,`⚠️ ${r(i).storm??""}`)),c(g,x)},q=(g,x)=>{{var T=u=>{var f=me(),F=Jr(f);{var L=w=>{var m=he(),y=t(m),S=t(y,!0);e(y);var E=a(y,2),D=t(E);{var lr=N=>{var Z=wr();P(Wr=>d(Z,`Dist: ${Wr??""} km`),[()=>Math.round(r(J).station.distance*10)/10],ir),c(N,Z)};k(D,N=>{typeof r(J).station.distance=="number"&&N(lr)})}var $=a(D,2);{var V=N=>{var Z=wr();P(()=>d(Z,`• ${r(J).station.source??""}`)),c(N,Z)};k($,N=>{r(J).station.source&&N(V)})}e(E),e(m),P(()=>d(S,r(J).station.name)),c(w,m)};k(F,w=>{var m;(m=r(J))!=null&&m.station&&w(L)})}var H=a(F,2);yr(H,5,()=>r(or),_r,(w,m)=>{var y=ge(),S=t(y),E=t(S,!0);e(S);var D=a(S,2),lr=t(D,!0);e(D);var $=a(D,2),V=t($);e($),e(y),P((N,Z)=>{d(E,N),Sr(D,1,`tide-type ${r(m).type??""}`,"svelte-zi9jhr"),d(lr,r(m).type),d(V,`${Z??""}m`)},[()=>Or(r(m).time),()=>r(m).height.toFixed(2)],ir),c(w,y)}),e(H),c(u,f)},G=u=>{var f=pe();c(u,f)};k(g,u=>{r(or)?u(T):u(G,!1)},x)}};k(B,g=>{r(i).storm?g(O):g(q,!1)})}var C=a(B,6);{var Q=g=>{var x=be(),T=t(x);e(x),P(()=>d(T,`⚠️ ${r(i).rapid??""}`)),c(g,x)},tr=(g,x)=>{{var T=u=>{var f=ke();yr(f,5,()=>r(ar).slice(0,8),_r,(F,L)=>{var H=ue(),w=t(H),m=t(w,!0);e(w);var y=a(w,2),S=t(y);e(y),e(H),P((E,D)=>{d(m,E),d(S,`${D??""} m`)},[()=>r(L).timestamp?Ar(r(L).timestamp):"N/A",()=>{var E;return((E=r(L).height)==null?void 0:E.toFixed(2))||r(L).state}],ir),c(F,H)}),e(f),c(u,f)},G=u=>{var f=xe();c(u,f)};k(g,u=>{r(ar)?u(T):u(G,!1)},x)}};k(C,g=>{r(i).rapid?g(Q):g(tr,!1)})}e(M),e(_),c(h,_)};k(dr,h=>{(r(or)||r(ar)||r(i).storm||r(i).rapid)&&h(ur)})}e(l),c(o,l)};k($r,o=>{!r(rr)&&!r(X)&&o(Vr)})}return e(mr),c(sr,mr),qr({get location(){return R()},set location(o){R(o),Xr()}})}Yr(["click"]);customElements.define("rz-environment",Kr(ye,{location:{}},[],[],!0));
