import { LitElement, html, css } from 'lit';
import './employee-list.js';
import './employee-form.js';
import './nav-bar.js';
import './pagination-control.js';
import { translations } from '../i18n/translations.js';

const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`;
document.head.appendChild(style);

export class AppRoot extends LitElement {
  static properties = {
    route: { type: String },
    employeeId: { type: Number },
    currentPage: { type: Number },
    totalPages: { type: Number },
    viewMode: { type: String },
    language: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;
    }

    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }

    nav-bar {
      display: block;
      background-color: #fff;
      border-radius: 4px;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 16px;
    }

    .list-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ff6600;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
    }

    .view-btn {
      padding: 0.5rem;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .view-btn span {
      color: #666;
    }

    .view-btn.active span {
      color: #ff6600;
    }

    .view-btn:hover {
      background-color: rgba(255, 87, 34, 0.1);
    }

    .content {
      margin-top: 24px;
      background-color: #fff;
      border-radius: 4px;
      padding: 1rem 1rem 0 1rem;
      margin-bottom: 1rem;
    }

    .content.form-page {
      background-color: transparent;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
    }

    @media (max-width: 992px) {
      .container {
        padding: 1rem;
      }

      .view-controls {
        display: none;
      }
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 24px;
    }
  `;

  constructor() {
    super();
    this._updateRoute();
    this.currentPage = 1;
    this.totalPages = 1;
    this.viewMode = window.innerWidth <= 992 ? 'grid' : 'list';
    this.language = 'tr';

    window.addEventListener('resize', () => {
      const newViewMode = window.innerWidth <= 992 ? 'grid' : this.viewMode;
      if (newViewMode !== this.viewMode) {
        this.viewMode = newViewMode;
        const listElement = this.shadowRoot.querySelector('employee-list');
        if (listElement) {
          listElement.viewMode = this.viewMode;
        }
      }
    });

    window.addEventListener('language-change', (e) => {
      this.language = e.detail.language;
      localStorage.setItem('language', this.language);
      this.requestUpdate();
    });

    window.addEventListener('vaadin-router-location-changed', (event) => {
      const path = event.detail.location.pathname;
      if (path.startsWith('/edit-employee/')) {
        this.route = 'edit';
        this.employeeId = parseInt(path.split('/')[2]);
      } else if (path === '/add-employee') {
        this.route = 'add';
        this.employeeId = null;
      } else {
        this.route = 'list';
        this.employeeId = null;
      }
      this.requestUpdate();
    });
  }

  firstUpdated() {
    this.viewMode = window.innerWidth <= 992 ? 'grid' : 'list';
    const listElement = this.shadowRoot.querySelector('employee-list');
    if (listElement) {
      listElement.viewMode = this.viewMode;
    }
  }

  _updateRoute() {
    const path = window.location.pathname;
    if (path.startsWith('/edit/')) {
      this.route = 'edit';
      this.employeeId = parseInt(path.split('/')[2]);
    } else if (path === '/add') {
      this.route = 'add';
      this.employeeId = null;
    } else {
      this.route = 'list';
      this.employeeId = null;
    }
  }

  _handlePageChange(e) {
    this.currentPage = e.detail.page;
    const listElement = this.shadowRoot.querySelector('employee-list');
    if (listElement) {
      listElement.currentPage = this.currentPage;
    }
  }

  _handleViewModeChange(mode) {
    this.viewMode = mode;
    const listElement = this.shadowRoot.querySelector('employee-list');
    if (listElement) {
      listElement.viewMode = mode;
    }
  }

  render() {
    const t = translations[this.language];
    const isFormPage = this.route === 'add' || this.route === 'edit';

    
    return html`
      <div class="container">
        <nav-bar .language=${this.language}></nav-bar>
        ${this.route === 'list' ? html`
          <div class="list-header">
            <div class="list-title">${t.employeeList}</div>
            <div class="header-actions">
              <div class="view-controls">
                <button 
                  class="view-btn ${this.viewMode === 'list' ? 'active' : ''}"
                  data-view="list"
                  @click=${() => this._handleViewModeChange('list')}
                >
                  <span class="material-symbols-outlined">
                    reorder
                  </span>
                </button>
                <button 
                  class="view-btn ${this.viewMode === 'grid' ? 'active' : ''}"
                  data-view="grid"
                  @click=${() => this._handleViewModeChange('grid')}
                >
                  <span class="material-symbols-outlined">
                    grid_on
                  </span>
                </button>
              </div>
            </div>
          </div>
        ` : ''}
        <div class="content ${isFormPage ? 'form-page' : ''}">
          ${this._renderContent()}
        </div>
        ${this.route === 'list' && this.totalPages > 1 ? html`
          <pagination-control
            .currentPage=${this.currentPage}
            .totalPages=${this.totalPages}
            @page-change=${this._handlePageChange}
          ></pagination-control>
        ` : ''}
      </div>
    `;
  }

  _renderContent() {
    switch (this.route) {
      case 'edit':
        return html`<employee-form .employeeId=${this.employeeId} editMode></employee-form>`;
      case 'add':
        return html`<employee-form></employee-form>`;
      default:
        return html`<employee-list 
          .currentPage=${this.currentPage}
          .viewMode=${this.viewMode}
          .language=${this.language}
          @pagination-update=${(e) => {
            this.currentPage = e.detail.currentPage;
            this.totalPages = e.detail.totalPages;
          }}
        ></employee-list>`;
    }
  }
}

customElements.define('app-root', AppRoot); 