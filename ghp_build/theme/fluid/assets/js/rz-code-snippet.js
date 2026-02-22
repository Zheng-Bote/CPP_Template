class RzCodeSnippet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const lang = this.getAttribute("lang") || "";
    // Optional: Zeige Language-Badge nur, wenn ein Attribut gesetzt ist
    const label = lang ? `<span class="lang-label">${lang}</span>` : "";

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="code-wrapper">
        <div class="code-header">
          ${label}
          <button class="copy-btn btn-icon" title="Copy to clipboard">
            <svg class="icon-copy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            
            <svg class="icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
        </div>
        <div class="code-content">
          <pre><code><slot></slot></code></pre>
        </div>
      </div>
    `;

    // Copy Logik
    this.shadowRoot
      .querySelector(".copy-btn")
      .addEventListener("click", () => this.copyText());
  }

  copyText() {
    const text = this.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      const btn = this.shadowRoot.querySelector(".copy-btn");
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 2000);
    });
  }

  getStyles() {
    // Resolve paths relative to the script location
    const cssPath = new URL('../css/', import.meta.url).href;

    return `
      <style>
        /* Importiere deine globalen Tokens */
        @import url("${cssPath}tokens.css");
        @import url("${cssPath}fluid.css");

        :host {
          display: block;
          margin: var(--space-3) 0;
          font-family: var(--font-family-sans);
        }

        .code-wrapper {
          position: relative;
          /* Nutzt Border-Radius und Box-Shadow aus den Code-Tokens */
          border-radius: var(--code-border-radius, 6px);
          box-shadow: var(--code-box-shadow, none);
          /* Fallback-Border, falls --code-border transparent ist, aber Struktur gewünscht ist */
          border: var(--code-border, 1px solid var(--border)); 
          
          background: var(--bg-elevated);
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0.2rem 0.5rem;
          /* Header hebt sich leicht ab */
          background: var(--bg-alt);
          border-bottom: 1px solid var(--border);
          height: 36px;
        }

        .lang-label {
          margin-right: auto;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: var(--font-weight-bold);
          padding-left: 0.5rem;
          letter-spacing: 0.05em;
        }

        .code-content {
          padding: var(--space-3);
          overflow-x: auto;
          font-size: 0.9rem;
          line-height: 1.5;
          
          /* HIER sind die wichtigen Code-Background Tokens */
          background: var(--code-background, var(--bg-alt));
        }

        /* Reset für pre/code damit die Tokens greifen */
        pre {
          margin: 0;
          padding: 0;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        code {
          /* Die spezifischen Font/Color Tokens */
          font-family: var(--code-font-family, monospace);
          color: var(--code-color, var(--text));
          text-shadow: var(--code-text-shadow, none);
        }

        /* Copy Button Styling */
        .copy-btn {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .copy-btn:hover {
          background: var(--bg);
          color: var(--color-primary);
        }

        .copy-btn.copied {
          color: oklch(0.65 0.15 150); /* Success Green */
          border-color: oklch(0.65 0.15 150);
        }
        .copy-btn .icon-check { display: none; }
        .copy-btn.copied .icon-copy { display: none; }
        .copy-btn.copied .icon-check { display: block; }
      </style>
    `;
  }
}

customElements.define("rz-code-snippet", RzCodeSnippet);
