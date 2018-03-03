import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-drawers'
})
export class ObjectsDrawers {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Slide in menus. Drawers provide a special layout for cards.
        </p>

        <h2 class="c-heading u-xlarge">Basic Drawer</h2>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <p class="c-paragraph">
              To make the drawer appear and disappear toggle
              the <code class="c-code">.o-drawer--visible</code> modifier.
            </p>

            <demo-markup language="html" classes="modal-demo"
              code={`<div class="c-overlay c-overlay--dismissible"></div>
<div class="o-drawer u-highest o-drawer--top o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</div>`} />

            <h2 id="positions" class="c-heading u-xlarge">Positions</h2>
            <p class="c-paragraph">
              <code class="c-code">.c-drawer--top</code>, <code class="c-code">.c-drawer--right</code>, <code
                class="c-code">.c-drawer--left</code>
              and <code class="c-code">.c-drawer--bottom</code> modifiers are all available.
            </p>
            <h3 id="positions-left" class="c-heading u-large mono">.o-drawer--left</h3>

            <demo-markup language="html" classes="modal-demo"
              code={`<div class="c-overlay c-overlay--dismissible"></div>
<div class="o-drawer u-highest o-drawer--left o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</div>`} />

            <h3 id="positions-bottom" class="c-heading u-large mono">.o-drawer--bottom</h3>
            <demo-markup language="html" classes="modal-demo"
              code={`<div class="c-overlay c-overlay--dismissible"></div>
<div class="o-drawer u-highest o-drawer--bottom o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</div>`} />

            <h3 id="positions-right" class="c-heading u-large mono">.o-drawer--right</h3>
            <demo-markup language="html" classes="modal-demo"
              code={`<div class="c-overlay c-overlay--dismissible"></div>
<div class="o-drawer u-highest o-drawer--right o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</div>`} />
          </blaze-tab>

          <blaze-tab header="JavaScript">
            <demo-markup language="html" classes="modal-demo"
              code={`<blaze-drawer position="right" open>
  <blaze-card>
    <blaze-card-header>
      <h2 class="c-heading u-xlarge">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </blaze-card-header>
    <blaze-card-body>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </p>
    </blaze-card-body>
    <blaze-card-footer>
      <div class="c-input-group">
        <button class="c-button c-button--block c-button--brand">Button</button>
        <button class="c-button c-button--block c-button--info">Button</button>
      </div>
    </blaze-card-footer>
  </blaze-card>
</blaze-drawer>`} />

            <h2 class="c-heading">
              Attributes
            </h2>

            <table class="c-table c-table--striped c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Attribute</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">open (boolean)</td>
                  <td class="c-table__cell">Initial open/close state of the draw</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">dismissible (boolean)</td>
                  <td class="c-table__cell">Allow the drawer to be closed by clicking on the overlay</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">position="top|right|bottom|left"</td>
                  <td class="c-table__cell">Set which border the drawer appears from</td>
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

            <table class="c-table c-table--striped c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">show()</td>
                  <td class="c-table__cell">Opens the drawer</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">close()</td>
                  <td class="c-table__cell">Hides the drawer</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">isOpen()</td>
                  <td class="c-table__cell">Returns true or false depending whether the drawer is open or closed</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}
