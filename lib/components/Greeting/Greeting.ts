import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('swell-greeting')
export class SwellGreeting extends LitElement {

  render() {
    return html`
        <h2>hello there</h2>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'swell-greeting': SwellGreeting
  }
}