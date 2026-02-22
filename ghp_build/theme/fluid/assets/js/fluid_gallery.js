/**
 * fluid_gallery.js
 * Handles Image Gallery Modals and Lazy Loading.
 * Depends on: fluid_core.js (for openModal)
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Gallery Modal ---
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  // Guard clause if modal HTML is missing
  if (imageModal && modalImage) {
    const openGalleryModal = (src, caption) => {
      modalImage.src = src;
      if (modalCaption) modalCaption.textContent = caption;
      // openModal ist global definiert in fluid_core.js
      if (typeof window.openModal === "function") {
        window.openModal("imageModal");
      }
    };

    const attachClickEvents = (selector) => {
      document.querySelectorAll(selector).forEach((fig) => {
        fig.addEventListener("click", () => {
          const src = fig.getAttribute("data-modal-image");
          const caption = fig.querySelector("figcaption")?.textContent || "";
          if (src) openGalleryModal(src, caption);
        });
      });
    };

    attachClickEvents(".gallery figure");
    attachClickEvents(".gallery-2 figure");

    // Close on backdrop click
    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) {
        // closeModal ist global definiert in fluid_core.js
        if (typeof window.closeModal === "function") {
          window.closeModal("imageModal");
        }
      }
    });
  }

  // --- Lazy Loading ---
  const lazyImages = document.querySelectorAll(".lazy-img");
  if (lazyImages.length > 0) {
    const lazyObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          const realSrc = img.getAttribute("data-src");
          if (realSrc) {
            img.src = realSrc;
            img.onload = () => img.classList.add("loaded");
          }
          observer.unobserve(img);
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    lazyImages.forEach((img) => lazyObserver.observe(img));
  }
});
