import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-cards'
})
export class ComponentsCards {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Cards are a common minimalistic design tool used to segregate sections of your content.
        </p>

        <h2 id="address" class="c-heading u-xlarge">
          Basic Card
        </h2>

        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
</div>`}/>

        <h2 id="dividers" class="c-heading u-xlarge">
          Dividers
        </h2>

        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item c-card__item--divider">Header</div>
  <div class="c-card__item">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <div class="c-card__item c-card__item--divider">Divider</div>
  <div class="c-card__item">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <div class="c-card__item c-card__item--divider">Footer</div>
</div>`}/>

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <p class="c-paragraph">
          Add <code class="c-code">--brand</code>, <code class="c-code">--info</code>, <code
          class="c-code">--warning</code>, <code class="c-code">--successful</code> or <code
          class="c-code">--error</code> modifier to the card items to change their background colors.
        </p>

        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item c-card__item--brand">Header</div>
  <div class="c-card__item c-card__item--info">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <div class="c-card__item c-card__item--warning">Divider</div>
  <div class="c-card__item c-card__item--success">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <div class="c-card__item c-card__item--error">Footer</div>
</div>`}/>

        <h2 id="header-body-footer" class="c-heading u-xlarge">
          Header, Body and Footer
        </h2>

        <p class="c-paragraph">
          Use the header, body and footer element classes to construct some nice cards.
        </p>

        <demo-markup language="html" code={`<div class="c-card">
  <header class="c-card__header">
    <h2 class="c-heading">
      Heading
      <div class="c-heading__sub">Sub-heading</div>
    </h2>
  </header>
  <div class="c-card__body">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <footer class="c-card__footer">
    <div class="c-input-group">
      <button class="c-button c-button--block c-button--brand">Button</button>
      <button class="c-button c-button--block c-button--info">Button</button>
    </div>
  </footer>
</div>`}/>

        <h2 id="block-footer" class="c-heading u-xlarge">
          Block Footer
        </h2>

        <p class="c-paragraph">
          You can push the footer buttons right to the edges of the card using <code class="c-code">.c-card__footer--block</code>.
        </p>

        <demo-markup language="html" code={`<div class="c-card">
  <header class="c-card__header">
    <h2 class="c-heading">
      Heading
      <div class="c-heading__sub">Sub-heading</div>
    </h2>
  </header>
  <div class="c-card__body">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <footer class="c-card__footer c-card__footer--block">
    <div class="c-input-group">
      <button class="c-button c-button--block c-button--brand">Button</button>
      <button class="c-button c-button--block c-button--info">Button</button>
    </div>
  </footer>
</div>`}/>

        <h2 id="images" class="c-heading u-xlarge">
          With Images
        </h2>

        <p class="c-paragraph">
          Images are best placed within the card at the same level as the header, body and footer
        </p>

        <demo-markup language="html" code={`<div class="c-card">
  <img class="o-image" src="https://source.unsplash.com/random/1024x500">
  <header class="c-card__header">
    <h2 class="c-heading">
      Heading
      <div class="c-heading__sub">Sub-heading</div>
    </h2>
  </header>
  <div class="c-card__body">
    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
  </div>
  <footer class="c-card__footer c-card__footer--block">
    <div class="c-input-group">
      <button class="c-button c-button--block c-button--brand">Button</button>
      <button class="c-button c-button--block c-button--info">Button</button>
    </div>
  </footer>
</div>`}/>

        <h2 id="items" class="c-heading u-xlarge">
          Card Items
        </h2>
        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item">Item 1</div>
  <div class="c-card__item">Item 2</div>
  <div class="c-card__item c-card__item--divider">Divider</div>
  <div class="c-card__item">Item 3</div>
  <div class="c-card__item">Item 4</div>
</div>`}/>

        <h2 id="grouped-items" class="c-heading u-xlarge">
          Grouped Items
        </h2>

        <p class="paragraph">
          Grouping card items couldn't be easier. Add the <code class="c-code">.c-card--grouped</code> modifier which
          will remove the item borders. Then insert a <code class="c-code">.c-card__divider</code> element into the
          list, which creates a horizontal line.
        </p>

        <demo-markup language="html" code={`<div class="c-card c-card--grouped">
  <div class="c-card__item">Item 1</div>
  <div class="c-card__item">Item 2</div>
  <div class="c-card__divider"></div>
  <div class="c-card__item">Item 3</div>
  <div class="c-card__item">Item 4</div>
  <div class="c-card__item">Item 5</div>
  <div class="c-card__divider"></div>
  <div class="c-card__item">Item 6</div>
  <div class="c-card__item">Item 7</div>
  <div class="c-card__item">Item 8</div>
</div>`}/>

      </page-template>
    );
  }
}