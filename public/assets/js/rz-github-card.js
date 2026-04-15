class RzGithubCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["repo"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "repo" && oldValue !== newValue) {
      this.fetchData(newValue);
    }
  }

  connectedCallback() {
    // Initial render layout
    this.renderSkeleton();

    const repo = this.getAttribute("repo");
    if (repo) {
      this.fetchData(repo);
    }
  }

  async fetchData(repo) {
    const CACHE_KEY = `gh-card-${repo}`;
    const CACHE_TIME = 1000 * 60 * 60; // 1 Stunde Cache

    // 1. Prüfen ob Daten im Cache sind
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TIME) {
        this.render(data);
        return;
      }
    }

    // 2. Fetch von GitHub
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`);
      if (!response.ok) throw new Error("Repo not found");

      const data = await response.json();

      // Speichern
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: data,
        }),
      );

      this.render(data);
    } catch (error) {
      this.renderError(error.message);
    }
  }

  renderSkeleton() {
    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card skeleton">
        <div class="header">Loading...</div>
      </div>
    `;
  }

  renderError(msg) {
    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card card-critical">
        <div class="card-header">
          <span class="card-title">GitHub Error</span>
        </div>
        <div class="text-muted">${msg}</div>
      </div>
    `;
  }

  render(data) {
    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="card">
        <div class="card-header">
          <div class="flex items-center gap-2">
            <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <a href="${data.html_url}" target="_blank" class="card-title repo-link">${data.full_name}</a>
          </div>
        </div>

        <p class="desc">${data.description || "No description provided."}</p>

        <div class="meta-row">
          <div class="badge-group" title="Stars">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${this.formatNumber(data.stargazers_count)}</span>
          </div>

          <div class="badge-group" title="Forks">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
            <span>${this.formatNumber(data.forks_count)}</span>
          </div>

          <div class="badge-group" title="Open Issues">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span>${this.formatNumber(data.open_issues_count)}</span>
          </div>
          
          <span class="lang-badge">${data.language || "Code"}</span>
        </div>
      </div>
    `;
  }

  getStyles() {
    // Resolve paths relative to the script location
    const cssPath = new URL('../css/', import.meta.url).href;
    
    return `
      <style>
        /* Import Fluid System */
        @import url("${cssPath}tokens.css");
        @import url("${cssPath}fluid.css");

        :host {
          display: block;
          font-family: var(--font-family-sans);
          max-width: 400px;
        }
        .card {
          padding: var(--space-3);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          transition: transform 0.2s;
        }
        .card:hover {
          border-color: var(--color-primary);
        }
        .header {
          font-weight: bold;
          color: var(--text-muted);
        }
        .repo-link {
          text-decoration: none;
          color: var(--color-primary);
          font-weight: var(--font-weight-bold);
          font-size: 1rem;
        }
        .repo-link:hover {
          text-decoration: underline;
        }
        .desc {
          font-size: 0.9rem;
          color: var(--text);
          margin: var(--space-3) 0;
          line-height: 1.5;
          /* Clamp text to 2 lines */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .meta-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-wrap: wrap;
          font-size: 0.85rem;
        }
        .badge-group {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
        }
        .lang-badge {
          margin-left: auto;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          background: var(--bg-alt);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }
        svg {
          color: var(--text-muted);
        }
      </style>
    `;
  }

  formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
  }
}

customElements.define("rz-github-card", RzGithubCard);
