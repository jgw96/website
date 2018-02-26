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
        <p class="c-paragraph">
          Your basic drawer will appear from the bottom of the container. The container should have
          <code class="c-code">overflow:hidden</code> or you'll see the drawer sliding around.
        </p>
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

      </page-template>
    );
  }
}
