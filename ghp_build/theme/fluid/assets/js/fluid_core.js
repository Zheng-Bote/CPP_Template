/**
 * fluid_core.js
 * Core utilities, helpers, and basic UI interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Brand Navigation (Home Link) ---
  const brand = document.querySelector(".header-left");
  if (brand) {
    brand.addEventListener("click", () => {
      // Liest den Base-Path aus dem HTML-Tag aus (ersetzt {{ base_path }})
      const basePath =
        document.documentElement.getAttribute("data-base-path") || "./";
      window.location.href = basePath;
    });
  }

  // --- Scroll to Top Button ---
  const scrollBtn = document.getElementById("scrollTopBtn");
  const header = document.querySelector(".site-header");

  if (scrollBtn && header) {
    window.addEventListener("scroll", () => {
      const headerBottom = header.getBoundingClientRect().bottom;
      if (headerBottom < -20) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Accordion ---
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      if (item) item.classList.toggle("is-open");
    });
  });
});

// --- Global Helpers (Attached to window for accessibility) ---

// Toast Helper
window.showToast = function (message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  if (type === "success") toast.classList.add("success-msg");
  if (type === "error") toast.classList.add("error-msg");
  if (type === "warning") toast.classList.add("warning-msg");
  if (type === "info") toast.classList.add("info-msg");

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// Modal Helpers
window.openModal = function (id) {
  const backdrop = document.getElementById(id);
  if (backdrop) backdrop.classList.add("is-open");
};

window.closeModal = function (id) {
  const backdrop = document.getElementById(id);
  if (backdrop) backdrop.classList.remove("is-open");
};
