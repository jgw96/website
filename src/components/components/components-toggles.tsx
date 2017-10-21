import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-toggles'
})
export class ComponentsToggles {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Checkboxes are pretty ugly. So let's make them pretty.
        </p>

        <demo-markup language="html" code={`<label class="c-toggle">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle
</label>
<label class="c-toggle c-toggle--brand">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle .c-toggle--brand
</label>
<label class="c-toggle c-toggle--info">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle .c-toggle--info
</label>
<label class="c-toggle c-toggle--warning">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle .c-toggle--warning
</label>
<label class="c-toggle c-toggle--success">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle .c-toggle--success
</label>
<label class="c-toggle c-toggle--error">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle .c-toggle--error
</label>
<label class="c-toggle c-toggle--brand">
  <input type="checkbox" disabled>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  .c-toggle[disabled]
</label>`}/>

      </page-template>
    );
  }
}