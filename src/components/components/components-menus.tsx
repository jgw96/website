import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-menus'
})
export class ComponentsMenus {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Menus inherit a lot of styles from <stencil-route-link url="/components/cards">Cards</stencil-route-link> but are primarily designed as dropdown replacements rather than page segments.
        </p>

        <h2 id="single-selection" class="c-heading u-xlarge">
          Single Selection
        </h2>

        <demo-markup language="html" code={`<ul class="c-card c-card--menu u-high">
  <li class="c-card__item">Menu 1</li>
  <li class="c-card__item">Menu 2</li>
  <li class="c-card__item c-card__item--divider">Divider</li>
  <li class="c-card__item">Menu 3</li>
  <li class="c-card__item">Menu 4</li>
  <li class="c-card__item c-card__item--disabled">Menu item disabled</li>
  <li class="c-card__item c-card__item--active">Menu item active</li>
  <li class="c-card__item">Menu 5</li>
  <li class="c-card__item">Menu 6</li>
  <li class="c-card__item">Menu 7</li>
  <li class="c-card__item">Menu 8</li>
  <li class="c-card__item">Menu 9</li>
  <li class="c-card__item">Menu 10</li>
</ul>`}/>

        <h2 id="grouped" class="c-heading u-xlarge">
          Grouped Items
        </h2>

        <demo-markup language="html" code={`<ul class="c-card c-card--menu u-high c-card--grouped">
  <li class="c-card__item">Menu 1</li>
  <li class="c-card__item">Menu 2</li>
  <li class="c-card__item">Menu 3</li>
  <li class="c-card__item">Menu 4</li>
  <li class="c-card__divider"></li>
  <li class="c-card__item c-card__item--disabled">Menu item disabled</li>
  <li class="c-card__item c-card__item--active">Menu item active</li>
  <li class="c-card__divider"></li>
  <li class="c-card__item">Menu 5</li>
  <li class="c-card__item">Menu 6</li>
  <li class="c-card__item">Menu 7</li>
  <li class="c-card__divider"></li>
  <li class="c-card__item">Menu 8</li>
  <li class="c-card__divider"></li>
  <li class="c-card__item">Menu 9</li>
  <li class="c-card__item">Menu 10</li>
</ul>`}/>

        <h2 id="colors" class="c-heading u-xlarge">
          Colored Items
        </h2>

        <demo-markup language="html" code={`<ul class="c-card c-card--menu">
  <li class="c-card__item c-card__item--brand">Menu 1</li>
  <li class="c-card__item c-card__item--brand">Menu 2</li>
  <li class="c-card__item c-card__item--divider">Divider</li>
  <li class="c-card__item c-card__item--brand">Menu 3</li>
  <li class="c-card__item c-card__item--brand">Menu 4</li>
  <li class="c-card__item c-card__item--brand c-card__item--disabled">Menu item disabled</li>
  <li class="c-card__item c-card__item--brand c-card__item--active">Menu item active</li>
  <li class="c-card__item c-card__item--brand">Menu 5</li>
  <li class="c-card__item c-card__item--brand">Menu 6</li>
  <li class="c-card__item c-card__item--brand">Menu 7</li>
  <li class="c-card__item c-card__item--brand">Menu 8</li>
  <li class="c-card__item c-card__item--brand">Menu 9</li>
  <li class="c-card__item c-card__item--brand">Menu 10</li>
</ul>`}/>

        <h2 id="combo" class="c-heading u-xlarge">
          Combo
        </h2>

        <demo-markup language="html" code={`<div class="c-card c-card--menu u-high">
  <label class="c-card__item c-field c-field--choice">
    <input type="checkbox"> Item 1
  </label>
  <label class="c-card__item c-field c-field--choice">
    <input type="checkbox"> Item 2
  </label>
  <div class="c-card__item c-card__item--divider">Divider</div>
  <label class="c-card__item c-field c-field--choice">
    <input type="checkbox"> Item 3
  </label>
  <label class="c-card__item c-field c-field--choice">
    <input type="checkbox"> Item 4
  </label>
</div>`}/>

      </page-template>
    );
  }
}