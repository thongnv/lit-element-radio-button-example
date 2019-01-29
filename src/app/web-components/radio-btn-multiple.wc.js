import { LitElement, html } from "lit-element";

import { style } from "./radio-btn-group.wc-styles";

class WebComponentsRadioBtnMultiple extends LitElement {
  static get properties() {
    return {
      radios: Array,
    };
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div class="wrapper">
        ${
          this.radios.map(
            radio => html`
              <div class="radio-box">
                <label class="radio-button">
                  ${radio.value}
                  <input type="radio" name="${radio.name}" .checked="${radio.selected}" @click="${() => this.select(radio)}"/>
                  <span class="checkmark"></span>
                </label>
                <div class="radio-group" .hidden=${!radio.selected}>
                  ${radio.children.map(
                    (child, index) => html`
                      <div class="radio-box-child">
                        <div class="radio-box">
                          <label class="radio-button">
                            ${child.value} 
                            <input type="radio" name="${child.name}" .checked="${child.selected}" @click="${() => this.selectChild(radio, child)}"/>
                            <span class="checkmark"></span>
                            ${!index ? html`<div class="addition">- et -</div>` : ''}
                          </label>
                        </div>
                      </div>`
                    )
                  }
                </div>
              </div>
            `
          )
        }
      </div>
    `;
  }

  select(radio) {
    this.radios = this.radios.map(r => {
      r.selected = r.value === radio.value;
      r.children.map(child => {
        child.selected = false;
        return child;
      });
      return r;
    });
    this._emitSelectedRadio(radio);
  }

  selectChild(radio, child) {
    this.radios = this.radios.map(r => {
      r.children.map(c => {
        c.selected = r.value === radio.value && c.value === child.value;
        return c;
      });
      return r;
    });
    this._emitSelectedRadio(radio);
  }

  _emitSelectedRadio(radio) {
    this.dispatchEvent(
      new CustomEvent("clicked", {
        detail: {
          selectedRadio: radio
        }
      })
    );
  }

}

customElements.define("wc-radio-btn-multiple", WebComponentsRadioBtnMultiple);
