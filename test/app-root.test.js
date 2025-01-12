import { html, fixture, expect } from '@open-wc/testing';
import { AppRoot } from '../src/components/app-root.js';

describe( AppRoot, () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<app-root></app-root>`);
    expect(el).to.exist;
  });
});