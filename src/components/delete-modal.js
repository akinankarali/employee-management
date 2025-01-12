import { LitElement, html, css } from 'lit';
import { translations } from '../i18n/translations.js';

export class DeleteModal extends LitElement {
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

    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-title {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .modal-message {
      color: #666;
      margin-bottom: 1.5rem;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .confirm-btn {
      background: #ff3b30;
      color: white;
    }

    .confirm-btn:hover {
      background: #ff2d20;
    }

    .cancel-btn {
      background: #f5f5f5;
      color: #666;
    }

    .cancel-btn:hover {
      background: #eee;
    }
  `;

  static properties = {
    language: { type: String, reflect: true },
    isMultiDelete: { type: Boolean },
    selectedNames: { type: Array }
  };

  constructor() {
    super();
    this.isMultiDelete = false;
    this.selectedNames = [];
  }

  _handleConfirm() {
    this.dispatchEvent(new CustomEvent('confirm'));
  }

  _handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel'));
  }

  _getModalMessage(t) {
    if (!t) return '';
    
    if (this.isMultiDelete) {
      if (this.selectedNames && this.selectedNames.length > 0) {
        return t.deleteSelectedConfirmMessage.replace('{names}', this.selectedNames.join(', '));
      }
      return t.deleteAllConfirmMessage;
    }
    return t.deleteConfirmMessage;
  }

  render() {
    const t = translations[this.language]?.list;
    if (!t) return null;

    const message = this._getModalMessage(t);

    return html`
      <div class="modal-overlay" @click=${this._handleCancel}>
        <div class="modal-content" @click=${e => e.stopPropagation()}>
          <h3 class="modal-title">
            ${this.isMultiDelete ? t.deleteConfirmMultiple : t.deleteConfirmSingle}
          </h3>
          <p class="modal-message">${message}</p>
          <div class="modal-actions">
            <button class="cancel-btn" @click=${this._handleCancel}>
              ${t.cancel}
            </button>
            <button class="confirm-btn" @click=${this._handleConfirm}>
              ${t.delete}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('delete-modal', DeleteModal); 