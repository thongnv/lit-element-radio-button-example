import { LitElement, html } from "lit-element";

import { style } from "./radio-btn-group.wc-styles";

class WebComponentsRadioBtnMultiple extends LitElement {
  static get properties() {
    return {
      radios: Array,
    };
  }

  /**
   * 
   * Life cycle hooks description:
   * 
   **/ 

  /**
   * 0. get styles
   * 
   * Array of styles to apply to the element. The styles should be defined
   * using the `css` tag function.
   */
  static get styles() {
    return [style];
  }
  
  /**
   * 1. connectedCallback
   * 
   * Called once after component is created
   * 
   */
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * 2. requestUpdate
   * 
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(name, oldValue) {
    super.requestUpdate();
  }

  /**
   * 3. performUpdate
   * 
   * Performs an element update.
   *
   * You can override this method to change the timing of updates. For instance,
   * to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
    super.performUpdate();
  }

  /**
   * 4. shouldUpdate
   * 
   * Controls whether or not `update` should be called when the element requests
   * an update.
   * By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(_changedProperties) {
    return super.shouldUpdate();
  }

  /**
   * 5. update
   * 
   * Updates the element. 
   * This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * * @param _changedProperties Map of changed properties with old values
   */
  update(_changedProperties) {
    super.update();
  }

  /**
   * 6. render
   * 
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   */
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

  /**
   * 7. firstUpdated
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated() {
    const selectedRadio = this.radios.filter(r => r.selected)[0];
    this._emitSelectedRadio(selectedRadio);
  }

  /**
   * 8.updated
   * 
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * * @param _changedProperties Map of changed properties with old values
   */
  updated(changedProperties) {
  }

  /**
   * 9. updateComplete
   * 
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. This getter can be implemented to
   * await additional state. For example, it is sometimes useful to await a
   * rendered element before fulfilling this Promise. To do this, first await
   * `super.updateComplete` then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  updateComplete() {
  }

  // End of life cycle hook

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
