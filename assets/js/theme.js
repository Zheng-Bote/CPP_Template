const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeSelect = document.getElementById("themeSelect");

// Reihenfolge der Modi
const modes = ["auto", "light", "dark"];

// gespeicherte Werte laden
let currentTheme = localStorage.getItem("theme") || "blue";
let currentMode = localStorage.getItem("mode") || "auto";

// Attribute setzen
root.setAttribute("data-theme", currentTheme);
root.setAttribute("data-mode", currentMode);

// Select initialisieren
if (themeSelect) {
  themeSelect.value = currentTheme;

  themeSelect.addEventListener("change", () => {
    currentTheme = themeSelect.value;
    root.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
}

// Icon initial setzen
updateThemeIcon(currentMode);

// Klick → nächsten Modus aktivieren
themeToggle.addEventListener("click", () => {
  const nextIndex = (modes.indexOf(currentMode) + 1) % modes.length;
  currentMode = modes[nextIndex];

  root.setAttribute("data-mode", currentMode);
  localStorage.setItem("mode", currentMode);

  updateThemeIcon(currentMode);
});

// Icon-Setter
function updateThemeIcon(mode) {
  if (mode === "light") {
    themeIcon.innerHTML = `<img src="assets/icons/sun.svg" width="18" height="18" alt="Light">`;
  } else if (mode === "dark") {
    themeIcon.innerHTML = `<img src="assets/icons/moon.svg" width="18" height="18" alt="Dark">`;
  } else {
    themeIcon.innerHTML = `<img src="assets/icons/sun-moon.svg" width="18" height="18" alt="Auto">`;
  }
}

/* --- Theme Preview Cards → Theme setzen --- */
document.querySelectorAll("[data-theme-preview]").forEach((card) => {
  card.addEventListener("click", () => {
    const theme = card.getAttribute("data-theme-preview");
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
      themeSelect.value = theme;
    }
  });
});
