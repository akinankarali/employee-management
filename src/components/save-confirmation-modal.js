import { LitElement, html, css } from 'lit';
import { translations } from '../i18n/translations.js';

export class SaveConfirmationModal extends LitElement {
  static properties = {
    language: { type: String },
    show: { type: Boolean }
  };

  static styles = css`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-container {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-title {
      color: #333;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .modal-content {
      color: #666;
      margin-bottom: 1.5rem;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .confirm-btn {
      background-color: #FF6600;
      color: white;
    }

    .confirm-btn:hover {
      background-color: #ff8533;
    }

    .cancel-btn {
      background-color: #f5f5f5;
      color: #666;
    }

    .cancel-btn:hover {
      background-color: #e0e0e0;
    }
  `;

  constructor() {
    super();
    this.language = 'tr';
    this.show = false;
  }

  _handleConfirm() {
    this.dispatchEvent(new CustomEvent('confirm', {
      bubbles: true,
      composed: true
    }));
  }

  _handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const t = translations[this.language]?.modals?.save || {
      title: 'Save Changes',
      message: 'Are you sure you want to save these changes?',
      confirm: 'Save',
      cancel: 'Cancel'
    };

    if (!this.show) return null;

    return html`
      <div class="modal-overlay">
        <div class="modal-container">
          <h3 class="modal-title">${t.title}</h3>
          <div class="modal-content">
            ${t.message}
          </div>
          <div class="modal-actions">
            <button class="cancel-btn" @click=${this._handleCancel}>
              ${t.cancel}
            </button>
            <button class="confirm-btn" @click=${this._handleConfirm}>
              ${t.confirm}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('save-confirmation-modal', SaveConfirmationModal);