import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tabs'
})
export class ComponentsTabs {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Tabbed content, useful to toggle between content without jumping around the page or across pages.
        </p>

        <h2 class="c-heading u-xlarge">
          Basic Tabs
        </h2>

        <demo-markup language="html" code={`<div class="c-tabs">
  <div class="c-tabs__nav">
    <div class="c-tabs__headings">
      <div class="c-tab-heading c-tab-heading--active">One</div>
      <div class="c-tab-heading c-tab-heading--disabled">Two (disabled)</div>
      <div class="c-tab-heading">Three</div>
      <div class="c-tab-heading">Four</div>
      <div class="c-tab-heading">Five</div>
      <div class="c-tab-heading">Six</div>
      <div class="c-tab-heading">Seven</div>
      <div class="c-tab-heading">Eight</div>
      <div class="c-tab-heading">Nine</div>
      <div class="c-tab-heading">Ten</div>
    </div>
  </div>
  <div class="c-tabs__tab c-tabs__tab--active">This is tab one</div>
  <div class="c-tabs__tab">This is tab two</div>
</div>`} />

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <demo-markup language="html" code={`<div class="c-tabs c-tabs">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>
<div class="c-tabs c-tabs--brand">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs--brand</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>
<div class="c-tabs c-tabs--info">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs--info</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>
<div class="c-tabs c-tabs--warning">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs--warning</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>
<div class="c-tabs c-tabs--success">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs--success</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>
<div class="c-tabs c-tabs--error">
  <div class="c-tabs__headings">
    <div class="c-tab-heading c-tab-heading--active">.c-tabs--error</div>
    <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
    <div class="c-tab-heading">Default</div>
  </div>
</div>`} />

      </page-template>
    );
  }
}