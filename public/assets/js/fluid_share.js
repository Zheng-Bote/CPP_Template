/**
 * fluid_share.js
 * Handles the share button functionality.
 * Depends on: fluid_core.js (for showToast)
 */

document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-btn");
  if (!shareBtn) return;

  // Make visible
  shareBtn.style.display = "inline-flex";

  shareBtn.addEventListener("click", async () => {
    // 1. Native Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text:
            document.querySelector('meta[name="description"]')?.content || "",
          url: window.location.href,
        });
        return;
      } catch (err) {
        if (err.name !== "AbortError") console.debug("Share failed:", err);
      }
    }

    // 2. Fallback: Clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);

      // showToast ist global definiert in fluid_core.js
      if (typeof window.showToast === "function") {
        window.showToast("URL copied to clipboard", "success");
      } else {
        alert("URL copied to clipboard");
      }

      // Visual feedback
      const originalIcon = shareBtn.innerHTML;
      shareBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary-color);">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      setTimeout(() => {
        shareBtn.innerHTML = originalIcon;
      }, 2000);
    } catch (err) {
      console.error("Clipboard failed:", err);
      alert("Could not copy URL. Please copy it manually.");
    }
  });
});
