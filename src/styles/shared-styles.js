import { css } from 'lit';

export const sharedStyles = css`
  :host {
    --primary-color: #ff6600;
    --text-color: #333333;
    --background-color: #f5f5f5;
    --border-color: #dddddd;
  }

  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem;
  }

  .btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn:hover {
    opacity: 0.9;
  }
`;
