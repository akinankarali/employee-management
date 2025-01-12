import { LitElement, html, css } from 'lit';
import { translations } from '../i18n/translations.js';
import { employeeStore } from '../store/employee-store.js';
import { Router } from '@vaadin/router';  // Import the Router class
import { router } from '../routes/router.js'; 
import './delete-modal.js';
import './pagination-control.js';

export class EmployeeList extends LitElement {
  static properties = {
    employees: { type: Array },
    selectedEmployees: { type: Array },
    currentPage: { type: Number },
    itemsPerPage: { type: Number },
    viewMode: { type: String, reflect: true },
    language: { type: String, reflect: true },
    showDeleteModal: { type: Boolean },
    employeeToDelete: { type: Number },
    autoSwitchedToGrid: { type: Boolean },
    searchQuery: { type: String },
    totalPages: { type: Number },
    isMultiDelete: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .list-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .table-container {
      width: 100%;
      background: white;
      border-radius: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: white;
    }

    th {
      padding: 1rem;
      text-align: left;
      font-weight: normal;
      color: #FF6600;
      border-bottom: 1px solid #eee;
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid #eee;
      color: #333;
    }

    @media (max-width: 1200px) {
      .table-container {
        overflow: visible;
      }

      th.optional,
      td.optional {
        display: none;
      }

      th.email-col,
      td.email-col {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    @media (max-width: 900px) {
      th.email-col,
      td.email-col {
        max-width: 150px;
      }
    }

    @media (max-width: 768px) {
      th.department-col,
      td.department-col {
        display: none;
      }

      th.email-col,
      td.email-col {
        max-width: 120px;
      }
    }

    .email-col {
      max-width: 150px; 
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
    }

    @media (max-width: 576px) {
      th.position-col,
      td.position-col {
        display: none;
      }
    }

    .grid-container {
      width: 100%;
    }

    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      padding: 0.5rem;
    }

    .employee-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: all 0.2s;
      border: 1px solid #eee;
    }

    .employee-card:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }

    .employee-name-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .name-field {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .name-label {
      color: #FF6600;
      font-size: 0.875rem;
      min-width: 100px;
      flex-shrink: 0;
    }

    .name-value {
      color: #333;
      font-weight: 500;
      flex: 1;
    }

    .field {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .field-label {
      color: #FF6600;
      font-size: 0.875rem;
      min-width: 100px;
      flex-shrink: 0;
    }

    .field-value {
      color: #333;
      flex: 1;
    }

    .department-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #fff5eb;
      color: #FF6600;
      border-radius: 4px;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    .action-btn {
      padding: 0.5rem;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .edit-btn {
      color: #ff6600;
    }

    .edit-btn:hover {
      background: #fff5eb;
    }

    .delete-btn {
      color: #ff3b30;
    }

    .delete-btn:hover {
      background: #ffebeb;
    }

    /* Empty State */
    .empty-state {
      padding: 3rem;
      text-align: center;
      background: white;
      border-radius: 8px;
      color: #666;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
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

    .view-btn svg {
      width: 20px;
      height: 20px;
      stroke: #666;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .view-btn.active svg {
      stroke: #FF5722;
    }

    .view-btn:hover {
      background-color: rgba(255, 87, 34, 0.1);
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .list-title {
      font-size: 1.25rem;
      font-weight: 500;
      color: #333;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
    }

    .select-all-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      background: white;
      border-radius: 4px;
      border: 1px solid #eee;
    }

    .select-all-label {
      color: #666;
      font-size: 0.875rem;
    }

    .search-container {
      margin-bottom: 1rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .search-input {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .search-input:focus {
      outline: none;
      border-color: #FF6600;
      box-shadow: 0 0 0 2px rgba(255,102,0,0.1);
    }

    .search-input::placeholder {
      color: #999;
    }

    .table-container {
      display: block;
    }

    .grid-container {
      display: none;
    }

    .view-grid .table-container {
      display: none;
    }

    .view-grid .grid-container {
      display: block;
    }

    .multi-delete-container {
      display: none;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: 4px;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #eee;
    }

    .multi-delete-container.show {
      display: flex;
    }

    .multi-delete-info {
      color: #666;
      font-size: 0.875rem;
    }

    .multi-delete-btn {
      padding: 0.5rem 1rem;
      background: #ff3b30;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .multi-delete-btn:hover {
      background: #ff2d20;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.employees = [];
    this.selectedEmployees = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.viewMode = 'list';
    this.language = localStorage.getItem('language') || 'tr';
    this.showDeleteModal = false;
    this.isMultiDelete = false;
    this.searchQuery = '';
    this.totalPages = 0;
    this.autoSwitchedToGrid = false;

    this._handleStoreChange = this._handleStoreChange.bind(this);
    this._handleResize = this._handleResize.bind(this);

    employeeStore.subscribe(() => {
      this.requestUpdate();
    });

    window.addEventListener('search', this._handleSearchEvent.bind(this));
  }

  _handleStoreChange(event) {
    this.employees = event.detail.employees || [];
    this.requestUpdate();
  }

  firstUpdated() {
    super.firstUpdated();
    this._calculateTotalPages();
  }

  updated(changedProperties) {
    if (changedProperties.has('language')) {
      localStorage.setItem('language', this.language);
    }
    super.updated(changedProperties);
  }

  get filteredEmployees() {
    if (!this.searchQuery.trim()) {
      return this.employees;
    }
    return employeeStore.getFilteredEmployees(this.searchQuery);
  }

  get paginatedEmployees() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEmployees.slice(startIndex, endIndex);
  }

  _calculateTotalPages() {
    const totalEmployees = this.filteredEmployees.length;
    this.totalPages = Math.ceil(totalEmployees / this.itemsPerPage);
    this._dispatchPaginationUpdate();
  }

  _dispatchPaginationUpdate() {
    this.dispatchEvent(new CustomEvent('pagination-update', {
      detail: {
        currentPage: this.currentPage,
        totalPages: this.totalPages
      },
      bubbles: true,
      composed: true
    }));
  }

  _handlePageChange(e) {
    this.currentPage = e.detail.page;
    this._dispatchPaginationUpdate();
    this.requestUpdate();
  }

  _handleSelectAll(e) {
    if (e.target.checked) {
      this.selectedEmployees = this.paginatedEmployees.map(emp => emp.id);
    } else {
      this.selectedEmployees = [];
    }
    this.requestUpdate();
  }

  _handleSelectOne(id) {
    if (this.selectedEmployees.includes(id)) {
      this.selectedEmployees = this.selectedEmployees.filter(empId => empId !== id);
    } else {
      this.selectedEmployees = [...this.selectedEmployees, id];
    }
    this.requestUpdate();
  }

  _isSelected(id) {
    return this.selectedEmployees.includes(id);
  }

  _handleSearchEvent(event) {
    this.searchQuery = event.detail.query;
    this.currentPage = 1;
    this._calculateTotalPages();
    this.requestUpdate();
  }

  _handleDeleteSelected() {
    this.isMultiDelete = true;
    this.showDeleteModal = true;
    this.requestUpdate();
  }

  _handleDeleteClick(id) {
    if (this.selectedEmployees.length === 0) {
      this.selectedEmployees = [id];
    }
    this.isMultiDelete = this.selectedEmployees.length > 1;
    this.showDeleteModal = true;
    this.requestUpdate();
  }

  _handleMultiDeleteClick() {
    this.isMultiDelete = true;
    this.showDeleteModal = true;
    this.requestUpdate();
  }

  async _handleDeleteConfirm() {
    try {
      if (this.selectedEmployees.length > 0) {
        this.showDeleteModal = false;
        const employeesToDelete = [...this.selectedEmployees];
        this.selectedEmployees = [];
        
        await employeeStore.deleteEmployees(employeesToDelete);
        
        this.employees = [...employeeStore.employees];
  
        const selectAllCheckbox = this.shadowRoot.querySelector('thead input[type="checkbox"]');
        if (selectAllCheckbox) {
          selectAllCheckbox.checked = false;
        }
  
        this.requestUpdate();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  }

  _handleDeleteCancel() {
    this.showDeleteModal = false;
    this.isMultiDelete = false;
    
    this.selectedEmployees = [];
    
    const listSelectAll = this.shadowRoot.querySelector('thead input[type="checkbox"]');
    const gridSelectAll = this.shadowRoot.querySelector('#grid-select-all');
    
    if (listSelectAll) {
      listSelectAll.checked = false;
    }
    if (gridSelectAll) {
      gridSelectAll.checked = false;
    }

    this.requestUpdate();
  }

  _getSelectedEmployeeNames() {
    try {
      if (!Array.isArray(this.selectedEmployees) || !Array.isArray(employeeStore.employees)) {
        return [];
      }
      
      return this.selectedEmployees
        .map(id => {
          try {
            const employee = employeeStore.employees.find(emp => emp?.id === id);
            return employee ? `${employee.firstName || ''} ${employee.lastName || ''}`.trim() : '';
          } catch (error) {
            console.error('Error in employee mapping:', error);
            return '';
          }
        })
        .filter(name => name !== '');
    } catch (error) {
      console.error('Error in _getSelectedEmployeeNames:', error);
      return [];
    }
  }

  _handleEdit(id) {
    Router.go(`/edit-employee/${id}`);
  }

  _handleDelete(id) {
    if (this.selectedEmployees.length > 1) {
      this.isMultiDelete = true;
    } else if (this.selectedEmployees.length === 1 && this.selectedEmployees[0] !== id) {
      this.selectedEmployees = [...this.selectedEmployees, id];
      this.isMultiDelete = true;
    } else {
      this.selectedEmployees = [id];
      this.isMultiDelete = false;
    }
    this.showDeleteModal = true;
    this.requestUpdate();
  }

  _handleResize() {
    const width = window.innerWidth;
    if (width < 992 && this.viewMode === 'list' && !this.autoSwitchedToGrid) {
      this.viewMode = 'grid';
      this.autoSwitchedToGrid = true;
    } else if (width >= 992 && this.autoSwitchedToGrid) {
      this.viewMode = 'list';
      this.autoSwitchedToGrid = false;
    }
  }

  _handleViewChange(mode) {
    this.viewMode = mode;
    this.autoSwitchedToGrid = false;
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.employees = employeeStore.getAllEmployees() || [];
    window.addEventListener('employees-changed', this._handleStoreChange);

    window.addEventListener('resize', this._handleResize);
    window.addEventListener('language-change', this._handleLanguageChange.bind(this));
    window.addEventListener('search', this._handleSearchEvent.bind(this));
    
    this.language = localStorage.getItem('language') || 'tr';
    this._handleResize();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('employees-changed', this._handleStoreChange);

    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('language-change', this._handleLanguageChange.bind(this));
    window.removeEventListener('search', this._handleSearchEvent.bind(this));
  }

  _handleLanguageChange(event) {
    this.language = event.detail.language;
    this.requestUpdate();
  }

  render() {
    const t = translations[this.language].list;
    const containerClass = this.viewMode === 'grid' ? 'view-grid' : '';
    
    return html`
      <div class="list-container ${containerClass}">

        <div class="table-container">
          ${this._renderListView(t)}
        </div>

        <div class="grid-container">
          ${this._renderGridView(t)}
        </div>

        ${this.showDeleteModal ? html`
          <delete-modal
            .language=${this.language}
            .isMultiDelete=${this.isMultiDelete}
            .selectedNames=${this._getSelectedEmployeeNames()}
            @confirm=${this._handleDeleteConfirm}
            @cancel=${this._handleDeleteCancel}
          ></delete-modal>
        ` : ''}
      </div>
    `;
  }

  _renderListView(t) {
    const employees = this.paginatedEmployees;
    
    if (!employees) {
      return html`<div>${t.loading}</div>`;
    }

    if (this.searchQuery && employees.length === 0) {
      return html`
        <div class="empty-state">
          ${t.noResults}
        </div>
      `;
    }

    if (employees.length === 0) {
      return html`
        <div class="empty-state">
          ${t.emptyList}
        </div>
      `;
    }

    return html`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 40px">
                <input type="checkbox" @change=${this._handleSelectAll}>
              </th>
              <th style="width: 120px">${t.firstName}</th>
              <th style="width: 120px">${t.lastName}</th>
              <th class="optional" style="width: 120px">${t.employmentDate}</th>
              <th class="optional" style="width: 120px">${t.birthDate}</th>
              <th style="width: 140px">${t.phone}</th>
              <th class="email-col">${t.email}</th>
              <th class="department-col">${t.department}</th>
              <th class="position-col">${t.position}</th>
              <th style="width: 100px">${t.actions}</th>
            </tr>
          </thead>
          <tbody>
            ${this.paginatedEmployees.map(employee => html`
              <tr>
                <td>
                  <input 
                    type="checkbox"
                    .checked=${this._isSelected(employee.id)}
                    @change=${() => this._handleSelectOne(employee.id)}
                  >
                </td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class="optional">${employee.employmentDate}</td>
                <td class="optional">${employee.birthDate}</td>
                <td>${employee.phone}</td>
                <td class="email-col">${employee.email}</td>
                <td class="department-col">${employee.department}</td>
                <td class="position-col">${employee.position}</td>
                <td>
                  <div class="actions">
                    <button class="action-btn edit-btn" @click=${() => this._handleEdit(employee.id)}>
                      <span class="material-symbols-outlined">edit_square</span>
                    </button>
                    <button class="action-btn delete-btn" @click=${() => this._handleDelete(employee.id)}>
                     <span class="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }

  _renderGridView(t) {
    const employees = this.paginatedEmployees;
    
    if (!employees) {
      return html`<div>${t.loading}</div>`;
    }

    if (this.searchQuery && employees.length === 0) {
      return html`
        <div class="empty-state">
          ${t.noResults}
        </div>
      `;
    }

    if (employees.length === 0) {
      return html`
        <div class="empty-state">
          ${t.emptyList}
        </div>
      `;
    }


    return html`
      <div class="grid-container">
        <div class="grid-select-all">
          <input 
            type="checkbox" 
            id="grid-select-all"
            @change=${this._handleSelectAll}
            .checked=${this.selectedEmployees.length === this.paginatedEmployees.length && this.paginatedEmployees.length > 0}
          >
          <label for="grid-select-all">${t.selectAll}</label>
        </div>
        <div class="grid-view">
          ${this.paginatedEmployees.map(employee => html`
            <div class="employee-card">
              <div class="card-header">
                <div class="checkbox-wrapper">
                  <input 
                    type="checkbox"
                    .checked=${this._isSelected(employee.id)}
                    @change=${() => this._handleSelectOne(employee.id)}
                  >
                </div>
                <div class="actions">
                  <button class="action-btn edit-btn" @click=${() => this._handleEdit(employee.id)}>
                    <span class="material-symbols-outlined">edit_square</span>
                  </button>
                  <button class="action-btn delete-btn" @click=${() => this._handleDelete(employee.id)}>
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
              <div class="employee-name-section">
                <div class="name-field">
                  <span class="name-label">${t.firstName}:</span>
                  <span class="name-value">${employee.firstName}</span>
                </div>
                <div class="name-field">
                  <span class="name-label">${t.lastName}:</span>
                  <span class="name-value">${employee.lastName}</span>
                </div>
              </div>
              <div class="card-content">
                <div class="field">
                  <span class="field-label">${t.email}:</span>
                  <span class="field-value email-col">${employee.email}</span>
                </div>
                <div class="field">
                  <span class="field-label">${t.phone}:</span>
                  <span class="field-value">${employee.phone}</span>
                </div>
                <div class="field">
                  <span class="field-label">${t.position}:</span>
                  <span class="field-value">${employee.position}</span>
                </div>
                <div class="field">
                  <span class="field-label">${t.employmentDate}:</span>
                  <span class="field-value">${employee.employmentDate}</span>
                </div>
                <div class="field">
                  <span class="field-label">${t.birthDate}:</span>
                  <span class="field-value">${employee.birthDate}</span>
                </div>
              </div>
              <div class="department-tag">${employee.department}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _handleCheckboxChange(e, employeeId) {
    if (e.target.checked) {
      this.selectedEmployees = [...this.selectedEmployees, employeeId];
    } else {
      this.selectedEmployees = this.selectedEmployees.filter(id => id !== employeeId);
    }
    this.requestUpdate();
  }

  _handleSelectAll(e) {
    if (e.target.checked) {
      const currentPageEmployees = this._getCurrentPageEmployees();
      this.selectedEmployees = currentPageEmployees.map(emp => emp.id);
    } else {
      this.selectedEmployees = [];
    }
    this.requestUpdate();
  }

  _getCurrentPageEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return employeeStore.employees.slice(start, end);
  }

  _handleSingleDelete(employeeId) {
    this.selectedEmployees = [employeeId];
    this.isMultiDelete = false;
    this.showDeleteModal = true;
  }
}

customElements.define('employee-list', EmployeeList);
