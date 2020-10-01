import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tabs'
})
export class ComponentsTabs {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Tabbed content, useful to toggle between content without jumping around the page or across pages.
        </p>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
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

          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-tabs type="success">
  <blaze-tab header="One" open>This is tab one</blaze-tab>
  <blaze-tab disabled header="Two (disabled)">This is tab two</blaze-tab>
  <blaze-tab header="Three">This is tab three</blaze-tab>
  <blaze-tab header="Four">This is tab four</blaze-tab>
  <blaze-tab header="Five">This is tab five</blaze-tab>
  <blaze-tab header="Six">This is tab six</blaze-tab>
  <blaze-tab header="Seven">This is tab seven</blaze-tab>
  <blaze-tab header="Eight">This is tab eight</blaze-tab>
  <blaze-tab header="Nine">This is tab nine</blaze-tab>
  <blaze-tab header="Ten">This is tab ten</blaze-tab>
</blaze-tabs>`} />

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
                  <td class="c-table__cell">type</td>
                  <td class="c-table__cell">The color of the tabs</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">open (boolean)</td>
                  <td class="c-table__cell">Specify which tab should be selected on load</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">disabled (boolean)</td>
                  <td class="c-table__cell">Disable specific tabs to prevent them from opening</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">header</td>
                  <td class="c-table__cell">The text that should appear in each tab</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Methods
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
                  <td class="c-table__cell">currentTab()</td>
                  <td class="c-table__cell">Returns the index of the current tab</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">openTab(tabIndex: number)</td>
                  <td class="c-table__cell">Programmatically select a tab to open</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}