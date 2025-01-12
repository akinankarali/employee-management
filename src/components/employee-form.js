import { LitElement, html, css } from 'lit';
import { translations } from '../i18n/translations.js';
import { employeeStore } from '../store/employee-store.js';
import './save-confirmation-modal.js';

export class EmployeeForm extends LitElement {
  static styles = css`
  :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }

    .form-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      display: block;
    }

  .form-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }

  .form-title {
    color: #333;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .form-group {
    margin-bottom: 1.5rem;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #FF6600;
    font-size: 0.875rem;
    font-weight: 500;
  }

  input, select {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #333;
  background: white;
  transition: all 0.2s;
}

  input:focus, select:focus {
    outline: none;
    border-color: #FF6600;
    box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.1);
  }
  input:hover, select:hover {
    border-color: #FF6600;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
    padding-right: 2.5rem;
  }

  input::placeholder {
    color: #999;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .submit-btn {
    background-color: #FF6600;
    color: white;
  }

  .submit-btn:hover {
    background-color: #ff8533;
  }

  .cancel-btn {
    background-color: #f5f5f5;
    color: #666;
  }

  .cancel-btn:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    .form-container {
      margin: 1rem;
      padding: 1rem;
    }
  }
`;

  static properties = {
    language: { type: String, reflect: true },
    editMode: { type: Boolean },
    employee: { type: Object },
    employeeId: { type: Number },
    showSaveModal: { type: Boolean }
  };

  constructor() {
    super();
    this.language = 'tr';
    this.editMode = false;
    this.employee = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      employmentDate: '',
      birthDate: ''
    };
    this.employeeId = null;
    this.showSaveModal = false;
  }

  firstUpdated() {
    super.firstUpdated();
  }

  updated(changedProps) {
    super.updated(changedProps);
  }

  _navigateToList() {
    window.location.href = '/';
  }

  connectedCallback() {
    super.connectedCallback();
    const path = window.location.pathname;
    if (path.startsWith('/edit-employee/')) {
      this.editMode = true;
      this.employeeId = parseInt(path.split('/')[2]);
      this._loadEmployee();
    }
    window.addEventListener('language-change', this._handleLanguageChange.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('language-change', this._handleLanguageChange.bind(this));
  }

  _handleLanguageChange(e) {
    this.language = e.detail.language;
    this.requestUpdate();
  }

  _loadEmployee() {
    if (this.employeeId) {
      const employee = employeeStore.getEmployee(this.employeeId);
      if (employee) {
        this.employee = { ...employee };
      }
    }
  }

  _getMaxBirthDate() {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return eighteenYearsAgo.toISOString().split('T')[0];
  }

  _getMaxEmploymentDate() {
    return new Date().toISOString().split('T')[0];
  }

  _handleInputChange(e) {
    const { name, value } = e.target;
    this.employee = {
      ...this.employee,
      [name]: value
    };
  }

  _handleCancel() {
    window.history.back();
  }

  async _handleSubmit(e) {
    e.preventDefault();
    if (this.editMode) {
      this.showSaveModal = true;
    } else {
      await this._saveEmployee();
    }
  }

  async _saveEmployee() {
    try {
      if (this.editMode) {
        await employeeStore.updateEmployee(this.employeeId, this.employee);
      } else {
        await employeeStore.addEmployee(this.employee);
      }
      this._navigateToList();
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message);
    }
  }

  _handleSaveConfirm() {
    this.showSaveModal = false;
    this._saveEmployee();
  }
  
  _handleSaveCancel() {
    this.showSaveModal = false;
  }
  render() {
    const t = translations[this.language].form;
    const departments = ['Analytics', 'Tech'];
    const positions = ['Junior', 'Medior', 'Senior'];
    
    return html`
      <div class="form-container">
        <div class="form-header">
          <h2 class="form-title">
            ${this.editMode ? t.editTitle : t.addTitle}
          </h2>
        </div>
        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="firstName">${t.firstName}</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              .value=${this.employee.firstName}
              @input=${this._handleInputChange}
              placeholder=${t.placeholders?.firstName || ''}
              required
            >
          </div>

          <div class="form-group">
            <label for="lastName">${t.lastName}</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              .value=${this.employee.lastName}
              @input=${this._handleInputChange}
              placeholder=${t.placeholders.lastName}
              required
            >
          </div>

          <div class="form-group">
            <label for="email">${t.email}</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              .value=${this.employee.email}
              @input=${this._handleInputChange}
              placeholder=${t.placeholders.email}
              required
            >
          </div>

          <div class="form-group">
            <label for="phone">${t.phone}</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              .value=${this.employee.phone}
              @input=${this._handleInputChange}
              placeholder=${t.placeholders.phone}
              required
            >
          </div>

          <div class="form-group">
            <label for="birthDate">${t.birthDate}</label>
            <input 
              type="date" 
              id="birthDate" 
              name="birthDate"
              .value=${this.employee.birthDate}
              @input=${this._handleInputChange}
              max=${this._getMaxBirthDate()}
              required
            >
          </div>

          <div class="form-group">
            <label for="employmentDate">${t.employmentDate}</label>
            <input 
              type="date" 
              id="employmentDate" 
              name="employmentDate"
              .value=${this.employee.employmentDate}
              @input=${this._handleInputChange}
              max=${this._getMaxEmploymentDate()}
              required
            >
          </div>

          <div class="form-group">
            <label for="department">${t.department}</label>
            <select 
              id="department" 
              name="department" 
              .value=${this.employee.department}
              @change=${this._handleInputChange}
              required
            >
              <option value="" disabled selected>${t.selectDepartment}</option>
              ${departments.map(dept => html`
                <option value=${dept} ?selected=${this.employee.department === dept}>
                  ${t.departments[dept]}
                </option>
              `)}
            </select>
          </div>

          <div class="form-group">
            <label for="position">${t.position}</label>
            <select 
              id="position" 
              name="position" 
              .value=${this.employee.position}
              @change=${this._handleInputChange}
              required
            >
              <option value="" disabled selected>${t.selectPosition}</option>
              ${positions.map(pos => html`
                <option value=${pos} ?selected=${this.employee.position === pos}>
                  ${t.positions[pos]}
                </option>
              `)}
            </select>
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-btn" @click=${this._handleCancel}>
              ${t.cancel}
            </button>
            <button type="submit" class="submit-btn">
              ${this.editMode ? t.saveChanges : t.submit}
            </button>
          </div>
        </form>
        ${this.showSaveModal ? html`
        <save-confirmation-modal
          .language=${this.language}
          .show=${this.showSaveModal}
          @confirm=${this._handleSaveConfirm}
          @cancel=${this._handleSaveCancel}
        ></save-confirmation-modal>
      ` : ''}
      </div>
    `;
  }
}

customElements.define('employee-form', EmployeeForm);
