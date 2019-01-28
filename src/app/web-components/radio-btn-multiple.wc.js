import { LitElement, html } from "lit-element";
import { style } from "./radio-btn-group.wc-styles";

class WebComponentsRadioBtnMultiple extends LitElement {
  static get properties() {
    return {
      name: String,
      values: Array,
      radios: Array,
      selectedRadio: Object,
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
        ${
          this.radios.map(
            radio => html`
              <div class="radio-box">
                <label class="radio-button">
                  ${radio.value}
                  <input type="radio" name="${radio.name}" checked="${radio.selected}" @click="${() => this.select(radio)}"/>
                  <span class="checkmark"></span>
                </label>
                <div class="radio-group" .hidden=${!radio.selected}>
                ${radio.children.map(
                  (child, index) => html`
                    <div class="radio-box-child">
                      <div class="radio-box">
                        <label class="radio-button">
                          ${child.value}
                          <input type="radio" name="${child.name}" .checked=${child.selected} />
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
      ${this.selectedValue}
    `;
  }

  select(radio) {
    // this.selectedRadio = radio;
    // radio.selected = false;
    // radio.children.map(child => child.selected = false);
    this.radios = this.radios.map(r => {
      r.selected = r.value === radio.value;
      r.children.map(child => {
        child.selected = false;
        return child;
      });
      return r;
    })
    // this.requestUpdate();
    this.dispatchEvent(
      new CustomEvent("clicked", {
        detail: {
          selectedRadio: this.selectedRadio
        }
      })
    );
    // console.log(radio.value);
  }

  // clicked(value) {
  //   // this.selectedValue = value;
  //   this.requestUpdate();
  //   this.dispatchEvent(
  //     new CustomEvent("clicked", {
  //       detail: {
  //         selectedValue: this.selectedValue
  //       }
  //     })
  //   );
  //   console.log(this.values);
  // }
}

customElements.define("wc-radio-btn-multiple", WebComponentsRadioBtnMultiple);
