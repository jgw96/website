import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-alerts'
})
export class ComponentsAlerts {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <demo-markup language="html" code={`<div class="c-alert">
  <button class="c-button c-button--close">&times;</button>
  Default
</div>
<div class="c-alert c-alert--brand">
  <button class="c-button c-button--close">&times;</button>
  Brand
</div>
<div class="c-alert c-alert--info">
  <button class="c-button c-button--close">&times;</button>
  Info
</div>
<div class="c-alert c-alert--warning">
  <button class="c-button c-button--close">&times;</button>
  Warning
</div>
<div class="c-alert c-alert--success">
  <button class="c-button c-button--close">&times;</button>
  Success
</div>
<div class="c-alert c-alert--error">
  <button class="c-button c-button--close">&times;</button>
  Error
</div>`} />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-alert open dismissible>Default</blaze-alert>
<blaze-alert open dismissible type="brand">Brand</blaze-alert>
<blaze-alert open dismissible type="info">Info</blaze-alert>
<blaze-alert open dismissible type="warning">Warning</blaze-alert>
<blaze-alert open dismissible type="success">Success</blaze-alert>
<blaze-alert open type="error">Error (also not dismissible)</blaze-alert>`} />

            <h2 class="c-heading">
              Attributes
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Attribute</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">open (boolean)</td>
                  <td class="c-table__cell">Initial open/close state of the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">dismissible (boolean)</td>
                  <td class="c-table__cell">Allow the alert to be closed</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Methods
            </h2>

            <p class="c-paragraph">
              To access public methods on the element first select it
              using <code class="c-code">document.querySelector()</code>.
            </p>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">show()</td>
                  <td class="c-table__cell">Opens the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">close()</td>
                  <td class="c-table__cell">Hides the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">isOpen()</td>
                  <td class="c-table__cell">Returns true or false</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}