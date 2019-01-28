import { LitElement, html } from 'lit-element';
import { style } from './radio-btn-group.wc-styles';

class WebComponentsRadioBtnGroup extends LitElement {

  static get properties() {
    return {
      name: String,
      values: Array,
      selectedValue: String,
      valueLength: Number = 0
    };
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div class="wrapper">
      ${this.values.map(value => html`
        <div class="radio-box">
          <label class="radio-button">
            ${value}
            <input type="radio" name="${this.name}" @click="${() => this.clicked(value)}">
            <span class="checkmark"></span>
          </label>
        </div>`
      )}
      <slot></slot>
      </div>
      ${this.selectedValue}
    `;
  }

  clicked(value) {
    // this.selectedValue = value;
    this.requestUpdate();
    this.dispatchEvent(new CustomEvent('clicked', {
      detail: {
        selectedValue: this.selectedValue
      }
    }));
    console.log(this.values);
    // this.requestRender();
  }


}

customElements.define('wc-radio-btn-grp', WebComponentsRadioBtnGroup);
