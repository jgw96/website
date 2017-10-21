import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-alerts'
})
export class ComponentsAlerts {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Messages that usually appear at the top of the page or container. Blaze alerts
          are grouped together in an <code class="c-code">.c-alerts</code> block.
        </p>

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
</div>`}/>

      </page-template>
    );
  }
}