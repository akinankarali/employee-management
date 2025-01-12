import { LitElement, html, css } from 'lit';

export class PaginationControl extends LitElement {
  static properties = {
    currentPage: { type: Number },
    totalPages: { type: Number }
  };

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }

    button {
      padding: 0.5rem 0.75rem;
      border: none;
      background: none;
      cursor: pointer;
      color: #666;
      border-radius: 4px;
      min-width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      color: #ff6600;
    }

    button.active {
      background: #ff6600;
      color: white;
      border-radius: 50%;
    }

    .arrow {
      color: #ff6600;
      font-size: 1.2rem;
    }

    .arrow:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    .ellipsis {
      color: #666;
      padding: 0.5rem;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `;

  render() {
    return html`
      <button 
        class="arrow" 
        ?disabled=${this.currentPage === 1}
        @click=${() => this._handlePageChange(this.currentPage - 1)}
      >
        <span class="material-symbols-outlined">
          arrow_back_ios
        </span>
      </button>

      ${this._generatePageNumbers()}

      <button 
        class="arrow"
        ?disabled=${this.currentPage === this.totalPages}
        @click=${() => this._handlePageChange(this.currentPage + 1)}
      >
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
    `;
  }

  _generatePageNumbers() {
    const pages = [];
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;

    // İlk sayfayı her zaman göster
    pages.push(this._createPageButton(1));

    // İlk üç sayfada değilsek ve son üç sayfada değilsek, ilk sayfadan sonra üç nokta koy
    if (currentPage > 3) {
      pages.push(html`<span class="ellipsis">...</span>`);
    }

    // Tüm sayfaları göster
    for (let i = 2; i < totalPages; i++) {
      pages.push(this._createPageButton(i));
    }

    // Son üç sayfada değilsek ve ilk üç sayfada değilsek, son sayfadan önce üç nokta koy
    if (currentPage < totalPages - 2) {
      pages.push(html`<span class="ellipsis">...</span>`);
    }

    // Son sayfayı her zaman göster (birden fazla sayfa varsa)
    if (totalPages > 1) {
      pages.push(this._createPageButton(totalPages));
    }

    return pages;
  }

  _createPageButton(pageNum) {
    return html`
      <button
        class=${pageNum === this.currentPage ? 'active' : ''}
        @click=${() => this._handlePageChange(pageNum)}
      >
        ${pageNum}
      </button>
    `;
  }

  _handlePageChange(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.dispatchEvent(new CustomEvent('page-change', {
        detail: { page }
      }));
    }
  }
}

customElements.define('pagination-control', PaginationControl);
