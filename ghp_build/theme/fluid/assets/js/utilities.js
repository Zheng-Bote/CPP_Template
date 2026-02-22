/* -- Scroll to Top Button -- */
const scrollBtn = document.getElementById("scrollTopBtn");
const header = document.querySelector(".site-header");

// Sichtbarkeit steuern
window.addEventListener("scroll", () => {
  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom < -20) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

// Smooth Scroll nach oben
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* -- Ende Scroll to Top Button -- */

// Accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".accordion-item");
    item.classList.toggle("is-open");
  });
});

// Toast helper
function showToast(message, type = "info") {
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
}

// Modal helper (generic)
function openModal(id) {
  const backdrop = document.getElementById(id);
  if (backdrop) backdrop.classList.add("is-open");
}

function closeModal(id) {
  const backdrop = document.getElementById(id);
  if (backdrop) backdrop.classList.remove("is-open");
}

// Gallery Modal
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

document.querySelectorAll(".gallery figure").forEach((fig) => {
  fig.addEventListener("click", () => {
    const src = fig.getAttribute("data-modal-image");
    const caption = fig.querySelector("figcaption")?.textContent || "";
    modalImage.src = src;
    modalCaption.textContent = caption;
    openModal("imageModal");
  });
});

// Close modal on backdrop click
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    closeModal("imageModal");
  }
});

// =========================================================
// Lazy Loading for Gallery Images
// =========================================================

const lazyImages = document.querySelectorAll(".lazy-img");

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
  {
    rootMargin: "200px 0px", // lädt frühzeitig
    threshold: 0.01,
  },
);

lazyImages.forEach((img) => lazyObserver.observe(img));
// =========================================================
