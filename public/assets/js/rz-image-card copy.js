/**
 * RzImageCard Web Component
 * * Eine flexible Karte, die ein Bild, einen Titel und eine Beschreibung anzeigt.
 * Sie garantiert einheitliche Bildgrößen durch konfigurierbare Breite, Höhe
 * oder Seitenverhältnisse (Aspect Ratio).
 * * @attr src - URL zum Bild.
 * @attr alt - Alternativtext (fallback auf title wenn leer).
 * @attr title - Kartentitel (optional).
 * @attr desc - Beschreibungstext (optional).
 * @attr width - Breite der Karte (z.B. "300", "300px", "100%"). Default: auto.
 * @attr height - Fixe Höhe des Bildbereichs (z.B. "200", "200px"). Default: auto.
 * @attr ratio - Seitenverhältnis des Bildes (z.B. "16/9", "4/3", "1/1").
 */
class RzImageCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Attribute überwachen, damit sich die Komponente bei Änderungen aktualisiert
  static get observedAttributes() {
    return ["src", "alt", "title", "desc", "width", "height", "ratio"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    // Erstes Rendering, wenn das Element in den DOM eingefügt wird
    this.render();
  }

  /**
   * Hilfsfunktion: Formatiert Größenangaben.
   * Wenn nur eine Zahl übergeben wird (z.B. "300"), wird "px" angehängt.
   * Ansonsten wird der Wert übernommen (z.B. "50%" oder "auto").
   */
  formatSize(val) {
    if (!val) return "auto";
    // Prüft, ob der Wert nur aus Ziffern besteht
    return /^\d+$/.test(val) ? `${val}px` : val;
  }

  getStyles() {
    // Wir nutzen CSS Variablen für die Dimensionen, die wir aus den Attributen speisen.
    // Wir definieren auch einige "Theme-Variablen" (beginnend mit --rz-),
    // die Fallbacks haben, aber von außen überschrieben werden können.
    return `
      <style>
        :host {
          display: block;
          /* Standard-Design Fallbacks, falls keine externen CSS-Vars existieren */
          --rz-card-bg: var(--bg-elevated, #ffffff);
          --rz-card-border: var(--border, 1px solid #e0e0e0);
          --rz-card-radius: var(--radius-md, 12px);
          --rz-text-primary: var(--text, #1a1a1a);
          --rz-text-secondary: var(--text-muted, #666666);
          --rz-shadow: var(--shadow-soft, 0 4px 12px rgba(0,0,0,0.08));

          /* Interne Variablen für Dimensionen (werden durch JS gesetzt) */
          --_card-w: auto;
          --_img-h: auto;
          --_img-ratio: auto;
        }

        .card {
          width: var(--_card-w);
          background: var(--rz-card-bg);
          border: var(--rz-card-border);
          border-radius: var(--rz-card-radius);
          box-shadow: var(--rz-shadow);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* Optionaler Hover-Effekt */
        :host([hoverable]) .card:hover {
           transform: translateY(-3px);
           box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        /* * DER KERN DER LÖSUNG:
         * Der Container bestimmt die Größe, das Bild füllt ihn aus.
         */
        .image-container {
          position: relative;
          width: 100%;
          /* Hier greifen die Attribute 'height' und 'ratio' */
          height: var(--_img-h);
          aspect-ratio: var(--_img-ratio);
          background-color: #f3f4f6; /* Placeholder Farbe beim Laden */
        }

        .image {
          width: 100%;
          height: 100%;
          display: block;
          /* WICHTIG: Sorgt dafür, dass das Bild den Container füllt, 
             ohne verzerrt zu werden (es wird ggf. beschnitten). */
          object-fit: cover;
          /* Verhindert Layout-Shifts, wenn ratio gesetzt ist */
          position: absolute; 
          top:0; left:0;
        }

        .content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1; /* Füllt den Platz, falls die Karte eine fixe Gesamthöhe hätte */
        }

        .title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--rz-text-primary);
          line-height: 1.3;
        }

        .desc {
          margin: 0;
          font-size: 0.95rem;
          color: var(--rz-text-secondary);
          line-height: 1.5;
        }

        /* Verstecke Elemente, wenn keine Daten vorhanden sind */
        .title:empty, .desc:empty {
          display: none;
        }

        /* Wenn weder Titel noch Beschreibung da sind, verstecke den Content-Bereich, 
           um unnötiges Padding zu vermeiden. */
        .content:has(> .title:empty):has(> .desc:empty) {
           display: none;
        }
        /* Fallback für ältere Browser, die :has nicht unterstützen (optional) */
        .content-hidden { display: none; }

      </style>
    `;
  }

  render() {
    // Attribute auslesen
    const src = this.getAttribute("src");
    const title = this.getAttribute("title") || "";
    const desc = this.getAttribute("desc") || "";
    // Alt-Text Fallback auf Titel
    const alt = this.getAttribute("alt") || title || "Image";

    // Größenattribute verarbeiten
    const widthAttr = this.formatSize(this.getAttribute("width"));
    const heightAttr = this.formatSize(this.getAttribute("height"));
    const ratioAttr = this.getAttribute("ratio"); // ratio braucht kein 'px'

    // Wir setzen die CSS-Variablen auf dem Host-Element,
    // damit das interne CSS darauf zugreifen kann.
    this.style.setProperty("--_card-w", widthAttr);
    this.style.setProperty("--_img-h", heightAttr);

    if (ratioAttr) {
      this.style.setProperty("--_img-ratio", ratioAttr);
    } else {
      // Wichtig: Zurücksetzen, falls das Attribut entfernt wurde
      this.style.removeProperty("--_img-ratio");
    }

    // Prüfen, ob Content leer ist für Fallback-Klasse (für Browser ohne :has support)
    const isContentEmpty = !title && !desc;

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card">
        <div class="image-container">
          ${src ? `<img class="image" src="${src}" alt="${alt}" loading="lazy">` : ""}
        </div>
        <div class="content ${isContentEmpty ? "content-hidden" : ""}">
          <h3 class="title">${title}</h3>
          <p class="desc">${desc}</p>
        </div>
      </div>
    `;
  }
}

// Komponente registrieren
customElements.define("rz-image-card", RzImageCard);
