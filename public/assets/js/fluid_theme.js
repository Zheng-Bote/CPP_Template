/**
 * fluid_theme.js
 * Handles theme switching, dark mode logic, and icon rendering.
 */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeSelect = document.getElementById("themeSelect");

  const modes = ["auto", "light", "dark"];

  const icons = {
    light: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    dark: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    auto: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><mask id="mask-half"><rect x="0" y="0" width="12" height="24" fill="white" /></mask><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" mask="url(#mask-half)" /><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" transform="translate(2, -2) scale(0.9)" /></svg>`,
  };

  let currentTheme = localStorage.getItem("theme") || "blue2";
  let currentMode = localStorage.getItem("mode") || "auto";

  // Init
  root.setAttribute("data-theme", currentTheme);

  if (themeSelect) {
    themeSelect.value = currentTheme;
    themeSelect.addEventListener("change", () => {
      currentTheme = themeSelect.value;
      root.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
    });
  }

  function applyMode() {
    let effectiveMode = currentMode;
    if (currentMode === "auto") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      effectiveMode = systemDark ? "dark" : "light";
    }
    root.setAttribute("data-mode", effectiveMode);
    updateThemeIcon(currentMode);
  }

  function updateThemeIcon(mode) {
    if (themeIcon) {
      themeIcon.innerHTML = icons[mode] || icons["auto"];
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextIndex = (modes.indexOf(currentMode) + 1) % modes.length;
      currentMode = modes[nextIndex];
      localStorage.setItem("mode", currentMode);
      applyMode();
    });
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (currentMode === "auto") applyMode();
    });

  applyMode();

  // Theme Preview Cards
  document.querySelectorAll("[data-theme-preview]").forEach((card) => {
    card.addEventListener("click", () => {
      const theme = card.getAttribute("data-theme-preview");
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      if (themeSelect) themeSelect.value = theme;
    });
  });
});
