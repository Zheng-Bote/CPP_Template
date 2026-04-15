/**
 * Simple Client-Side Search for Fluid UI
 * Fetches search.json and filters results.
 */

class SiteSearch {
    constructor() {
        this.data = [];
        this.modal = document.getElementById('searchModal');
        this.input = document.getElementById('searchInput');
        this.resultsContainer = document.getElementById('searchResults');
        this.trigger = document.getElementById('searchTrigger');
        this.closeBtn = document.getElementById('searchClose');
        
        this.isLoading = false;
        this.hasLoaded = false;

        this.init();
    }

    init() {
        if (!this.trigger || !this.modal) return;

        // Open Modal
        this.trigger.addEventListener('click', () => {
            this.open();
        });

        // Close Modal
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        // Search Input
        this.input.addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });

        // Keyboard Shortcut (/)
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !this.modal.classList.contains('is-open')) {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
                this.close();
            }
        });
    }

    async loadData() {
        if (this.hasLoaded || this.isLoading) return;
        this.isLoading = true;
        this.resultsContainer.innerHTML = '<div class="p-4 text-muted text-center">Loading index...</div>';

        try {
            // Find path to search.json. We assume it's at the site root.
            // We can use the base_path from a global variable if available, or try relative.
            // For simplicity, let's try strict root relative or derive from script location?
            // Actually, we can assume "search.json" is in the same dir as index.html relative to base.
            // Let's rely on a global config if possible, or try explicit path.
            // Since we are in assets/js, we might need to go up. 
            // Better: use the base_path injected in HTML.
            
            const basePath = document.documentElement.getAttribute('data-base-path') || '';
            const response = await fetch(basePath + 'search.json');
            
            if (!response.ok) throw new Error('Failed to load search index');
            
            this.data = await response.json();
            this.hasLoaded = true;
            this.resultsContainer.innerHTML = '';
            
            // Re-run search if user already typed
            if (this.input.value.trim()) {
                this.performSearch(this.input.value);
            }

        } catch (e) {
            console.error(e);
            this.resultsContainer.innerHTML = '<div class="p-4 error-msg">Search unavailable</div>';
        } finally {
            this.isLoading = false;
        }
    }

    open() {
        this.modal.classList.add('is-open');
        this.loadData();
        setTimeout(() => this.input.focus(), 100);
    }

    close() {
        this.modal.classList.remove('is-open');
    }

    performSearch(query) {
        const q = query.toLowerCase().trim();
        this.resultsContainer.innerHTML = '';

        if (q.length < 2) {
            return;
        }

        if (!this.hasLoaded) return;

        // Simple scoring: Title match > Content match
        const hits = this.data.filter(item => {
            const inTitle = item.title.toLowerCase().includes(q);
            const inContent = item.content.toLowerCase().includes(q);
            return inTitle || inContent;
        }).map(item => {
            return {
                ...item,
                score: item.title.toLowerCase().includes(q) ? 10 : 1
            };
        }).sort((a, b) => b.score - a.score);

        // Render top 20
        const topHits = hits.slice(0, 20);

        if (topHits.length === 0) {
            this.resultsContainer.innerHTML = '<div class="p-4 text-center text-muted">No results found</div>';
            return;
        }

        const ul = document.createElement('ul');
        ul.className = 'search-list'; // We'll add some CSS for this

        topHits.forEach(hit => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            // Fix URL: ensure base path if item.url is relative
            // item.url usually comes from SSG as "docs/file.html"
            const basePath = document.documentElement.getAttribute('data-base-path') || '';
            a.href = basePath + hit.url;
            
            // Snippet generation
            const snippet = this.getSnippet(hit.content, q);

            a.innerHTML = `
                <div class="search-title">${hit.title}</div>
                <div class="search-snippet">${snippet}</div>
            `;
            li.appendChild(a);
            ul.appendChild(li);
        });

        this.resultsContainer.appendChild(ul);
    }

    getSnippet(content, query) {
        const lower = content.toLowerCase();
        const idx = lower.indexOf(query);
        if (idx === -1) return content.substring(0, 80) + '...';

        const start = Math.max(0, idx - 40);
        const end = Math.min(content.length, idx + query.length + 40);
        
        let text = content.substring(start, end);
        if (start > 0) text = '...' + text;
        if (end < content.length) text = text + '...';
        
        // Highlight (naive replace, careful with regex in HTML context, but plain text is safeish)
        // Note: content is plain text from JSON, so HTML injection is minimal risk if we escape output?
        // Actually we set innerHTML, so we should escape 'text' first!
        
        const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        // Re-highlight match
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]/g, '\\$&')})`, 'gi');
        return escaped.replace(regex, '<mark>$1</mark>');
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    new SiteSearch();
});