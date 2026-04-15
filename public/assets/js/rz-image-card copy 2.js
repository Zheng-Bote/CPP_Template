/**
 * RzImageCard v3
 * Fixes: img-height Priority & Title Truncation
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
    if (!val) return null; // Return null if empty to allow checks
    return /^\d+$/.test(val) ? `${val}px` : val;
  }

  getStyles() {
    return `
      <style>
        :host {
          display: block;
          /* Defaults */
          --rz-bg: var(--bg-elevated, #fff);
          --rz-border: var(--border, 1px solid #ddd);
          --rz-radius: var(--radius-md, 12px);
          --rz-text: var(--text, #333);
          --rz-muted: var(--text-muted, #777);
          --rz-shadow: var(--shadow-soft, 0 4px 6px rgba(0,0,0,0.1));
          
          /* Internal Dimensions */
          --card-w: auto;
          --card-h: auto;
          --img-h: 200px;
          --img-ratio: auto;
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
          flex-shrink: 0; /* Bild darf nicht zusammengedrückt werden */
          background-color: #eee;
          position: relative;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* --- Content Area --- */
        .content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1; /* Füllt den Rest der Karte aus */
          min-height: 0; /* Wichtig für Flex-Scrolling/Overflow */
        }

        .title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--rz-text);
          line-height: 1.3;
          flex-shrink: 0; /* Titel darf NICHT schrumpfen/abgeschnitten werden */
        }

        .desc {
          margin: 0;
          font-size: 0.9rem;
          color: var(--rz-muted);
          line-height: 1.5;
          
          /* Beschreibung füllt den Rest und wird gekürzt wenn nötig */
          flex-grow: 1; 
          overflow: hidden;
          
          /* Modernes "Line Clamp" für Textkürzung mit ... */
          display: -webkit-box;
          -webkit-line-clamp: 6; /* Zeigt max 6 Zeilen, dann ... */
          -webkit-box-orient: vertical;
        }
      </style>
    `;
  }

  render() {
    const src = this.getAttribute("src");
    const title = this.getAttribute("title") || "";
    const desc = this.getAttribute("desc") || "";
    const alt = this.getAttribute("alt") || title;

    // Attribute parsen
    const width = this.formatSize(this.getAttribute("width")) || "auto";
    const height = this.formatSize(this.getAttribute("height")) || "auto";

    // Raw Values prüfen für Prioritäten-Logik
    const rawImgHeight = this.getAttribute("img-height");
    const rawRatio = this.getAttribute("ratio");

    // Dimensionen setzen
    this.style.setProperty("--card-w", width);
    this.style.setProperty("--card-h", height);

    // LOGIK-UPDATE: img-height gewinnt IMMER, wenn gesetzt
    if (rawImgHeight) {
      this.style.setProperty("--img-h", this.formatSize(rawImgHeight));
      this.style.setProperty("--img-ratio", "auto");
    } else if (rawRatio) {
      this.style.setProperty("--img-ratio", rawRatio);
      this.style.setProperty("--img-h", "auto");
    } else {
      // Default Fallback
      this.style.setProperty("--img-h", "200px");
      this.style.setProperty("--img-ratio", "auto");
    }

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card">
        <div class="image-container">
          ${src ? `<img class="image" src="${src}" alt="${alt}" loading="lazy">` : ""}
        </div>
        <div class="content">
          ${title ? `<div class="title">${title}</div>` : ""}
          ${desc ? `<div class="desc">${desc}</div>` : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("rz-image-card", RzImageCard);
