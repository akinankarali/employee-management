import { LitElement, html, css } from 'lit';
import { translations } from '../i18n/translations.js';
import { Router } from '@vaadin/router';
import ingLogo from '../assets/logo/ing-logo.png';
import turkeyFlag from '../assets/language/turkey.png';
import englishFlag from '../assets/language/united-kingdom.png';

export class NavBar extends LitElement {
  static properties = {
    language: { type: String },
    isSearching: { type: Boolean },
    searchQuery: { type: String },
    currentPath: { type: String }
  };

  static styles = css`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      color: #333;
      text-decoration: none;
    }

    .logo img {
      height: 32px;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .employees-section {
      position: relative;
      display: flex;
      align-items: center;
    }

    .employees-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      cursor: pointer;
      color: #ff6600;
      font-size: 1rem;
      white-space: nowrap;
      transition: margin 0.3s ease-out;
    }

    .employees-button.searching {
      margin-right: 320px;
    }

    .search-container {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
      animation: slideIn 0.3s ease-out;
      transform-origin: left center;
    }

    @keyframes slideIn {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 300px;
        opacity: 1;
      }
    }

    .search-input {
      width: 100%;
      padding: 0.5rem 1rem;
      padding-left: 2.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      outline: none;
      transition: all 0.2s;
      background: white;
    }

    .search-input:focus {
      border-color: #ff6600;
      box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.1);
    }

    .search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
      pointer-events: none;
    }

    .add-new {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #fff;
      color: #ff6600;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .language-button {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .language-button:hover {
      background: #f5f5f5;
    }

    .flag-icon {
      width: 20px;
      height: 20px;
    }

    .nav-container {
      border-radius: 4px;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.isSearching = false;
    this.searchQuery = '';
    this.language = localStorage.getItem('language') || 'tr';
    this.currentPath = window.location.pathname;

    window.addEventListener('app-navigation', () => {
      this.currentPath = window.location.pathname;
      this.isSearching = false;
      this.searchQuery = '';
    });
    window.addEventListener('vaadin-router-location-changed', (event) => {
      this.currentPath = event.detail.location.pathname;
      this.requestUpdate();
    });
  }

  render() {
    const t = translations[this.language].navbar;
    const isHomePage = this.currentPath === '/' || this.currentPath === '/employee-list';

    return html`
      <div class="nav-container">
      <a @click=${this._handleHomeClick} href="javascript:void(0)" class="logo">
        <img src=${ingLogo} alt="ING Logo">
      </a>

        <div class="nav-right">
          ${isHomePage ? html`
            <div class="employees-section">
              <button 
                class="employees-button ${this.isSearching ? 'searching' : ''}"
                @click=${this._toggleSearch}
              >
                <span class="material-symbols-outlined">
                  group
                </span>
                <span>${t.employees}</span>
              </button>
              ${this.isSearching 
                ? html`
                  <div class="search-container">
                    <span class="material-symbols-outlined search-icon">
                      search
                    </span>
                    <input
                      type="text"
                      class="search-input"
                      .value=${this.searchQuery}
                      @input=${this._handleSearch}
                      @blur=${this._handleBlur}
                      placeholder="${t.searchPlaceholder}"
                      autofocus
                    >
                  </div>
                `
                : ''
              }
            </div>
          ` : ''}

          <a @click=${this._handleAddClick} class="add-new" href="javascript:void(0)">
            <span class="material-symbols-outlined">
              add
            </span>
            ${t.addNew}
          </a>

          <button 
            class="language-button"
            @click=${this._toggleLanguage}
          >
            ${this.language === 'tr' 
              ? html`<img src=${turkeyFlag} class="flag-icon" alt="TR">` 
              : html`<img src=${englishFlag} class="flag-icon" alt="EN">`
            }
          </button>
        </div>
      </div>
    `;
  }

  _handleAddClick() {
    Router.go('/add-employee');
  }

  _toggleSearch() {
    this.isSearching = true;
  }

  _handleSearch(e) {
    this.searchQuery = e.target.value;
    this.dispatchEvent(new CustomEvent('search', {
      detail: { query: this.searchQuery },
      bubbles: true,
      composed: true
    }));
  }

  _handleBlur(e) {
    if (!this.searchQuery) {
      this.isSearching = false;
    }
  }

  _handleHomeClick() {
    if (this.currentPath !== '/') {
      Router.go('/');
    }
  }

  _toggleLanguage() {
    const newLanguage = this.language === 'tr' ? 'en' : 'tr';
    this.language = newLanguage;
    localStorage.setItem('language', newLanguage);
    this.dispatchEvent(new CustomEvent('language-change', {
      detail: { language: newLanguage },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('nav-bar', NavBar);
