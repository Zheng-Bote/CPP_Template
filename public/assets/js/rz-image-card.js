/**
 * RzImageCard v5 - "Natural Flow" Update
 * - Standard: Bild bestimmt die Höhe (kein Crop), Karte passt sich an (fit-content).
 * - Optional: Fixe Höhen/Ratios erzwingen Crop.
 * - Lightbox: Zoom-Effekt inklusive.
 */
class RzImageCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "src",
      "alt",
      "title",
      "desc",
      "width",
      "height",
      "img-height",
      "ratio",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  formatSize(val) {
    if (!val) return null;
    return /^\d+$/.test(val) ? `${val}px` : val;
  }

  getStyles() {
    return `
      <style>
        :host {
          display: block;
          /* Theme Variablen */
          --rz-bg: var(--bg-elevated, #fff);
          --rz-border: var(--border, 1px solid #ddd);
          --rz-radius: var(--radius-md, 12px);
          --rz-text: var(--text, #333);
          --rz-muted: var(--text-muted, #777);
          --rz-shadow: var(--shadow-soft, 0 4px 6px rgba(0,0,0,0.1));
          
          /* Defaults (werden überschrieben) */
          --card-w: auto;
          --card-h: fit-content; /* Passt sich dem Inhalt an! */
          --img-h: auto;
          --img-ratio: auto;
          --img-fit: cover;
          --img-pos: relative; /* Default: Bild drückt Container auf */
        }

        .card {
          width: var(--card-w);
          height: var(--card-h);
          background: var(--rz-bg);
          border: var(--rz-border);
          border-radius: var(--rz-radius);
          box-shadow: var(--rz-shadow);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.2s;
        }

        :host([hoverable]) .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        }

        /* --- Image Area --- */
        .image-container {
          width: 100%;
          height: var(--img-h); 
          aspect-ratio: var(--img-ratio);
          
          /* Wenn Höhe fixiert ist, darf Container nicht schrumpfen */
          flex-shrink: 0; 
          
          background-color: #f4f4f5;
          position: relative;
          cursor: zoom-in;
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: var(--img-fit);
          display: block;
          
          /* Switch zwischen relative (Natural) und absolute (Crop/Ratio) */
          position: var(--img-pos);
          top: 0; left: 0;
          
          transition: transform 0.5s ease;
        }
        
        :host([hoverable]) .card:hover .image {
          transform: scale(1.05);
        }

        /* --- Content --- */
        .content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          /* Wenn Card fix ist, füllt Text den Rest */
          flex-grow: 1; 
          min-height: 0; 
        }

        .title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--rz-text);
          line-height: 1.3;
          flex-shrink: 0; 
        }

        .desc {
          margin: 0;
          font-size: 0.9rem;
          color: var(--rz-muted);
          line-height: 1.5;
          
          /* Abschneiden, falls Karte fixiert ist */
          display: -webkit-box;
          -webkit-line-clamp: 10; /* Großzügiges Limit */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* --- Lightbox --- */
        .lightbox {
          position: fixed; inset: 0; z-index: 10000;
          display: flex; align-items: center; justify-content: center;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s ease;
          cursor: zoom-out;
        }
        .lightbox.open { opacity: 1; pointer-events: auto; }
        .lightbox-img {
          max-width: 90vw; max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .lightbox.open .lightbox-img { transform: scale(1); }
      </style>
    `;
  }

  render() {
    const src = this.getAttribute("src");
    const title = this.getAttribute("title") || "";
    const desc = this.getAttribute("desc") || "";
    const alt = this.getAttribute("alt") || title;

    const width = this.formatSize(this.getAttribute("width")) || "auto";
    const height = this.formatSize(this.getAttribute("height")); // Kann null sein
    const imgHeight = this.formatSize(this.getAttribute("img-height"));
    const ratio = this.getAttribute("ratio");

    // Grund-Dimensionen
    this.style.setProperty("--card-w", width);

    // Logik für Höhen & Positionierung
    if (height) {
      // 1. Fixe Karten-Höhe (Text wird notfalls gekürzt)
      this.style.setProperty("--card-h", height);
    } else {
      // 2. Auto-Höhe (Karte wächst mit)
      this.style.setProperty("--card-h", "fit-content");
    }

    if (imgHeight) {
      // User erzwingt Bildhöhe -> Crop
      this.style.setProperty("--img-h", imgHeight);
      this.style.setProperty("--img-pos", "absolute"); // Nötig für object-fit in Container
    } else if (ratio) {
      // User erzwingt Ratio -> Crop
      this.style.setProperty("--img-ratio", ratio);
      this.style.setProperty("--img-h", "auto");
      this.style.setProperty("--img-pos", "absolute");
    } else {
      // 3. NATURAL MODE (Hochformat bleibt Hochformat!)
      // Keine Höhe/Ratio gesetzt -> Bild bestimmt die Höhe
      this.style.setProperty("--img-h", "auto");
      this.style.setProperty("--img-ratio", "auto");
      this.style.setProperty("--img-pos", "relative"); // Bild fließt normal
    }

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card">
        <div class="image-container" id="trigger">
          ${src ? `<img class="image" src="${src}" alt="${alt}" loading="lazy">` : ""}
        </div>
        ${
          title || desc
            ? `
          <div class="content">
            ${title ? `<div class="title">${title}</div>` : ""}
            ${desc ? `<div class="desc">${desc}</div>` : ""}
          </div>
        `
            : ""
        }
      </div>

      <div class="lightbox" id="lightbox">
        ${src ? `<img class="lightbox-img" src="${src}" alt="${alt}">` : ""}
      </div>
    `;

    this.addEvents();
  }

  addEvents() {
    const trigger = this.shadowRoot.getElementById("trigger");
    const lightbox = this.shadowRoot.getElementById("lightbox");
    if (trigger && lightbox) {
      trigger.addEventListener("click", () => {
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
      lightbox.addEventListener("click", () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }
}

customElements.define("rz-image-card", RzImageCard);
