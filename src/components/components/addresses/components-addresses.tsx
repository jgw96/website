import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-addresses'
})
export class ComponentsAddresses {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <section class="button-demo">
        <h1 class="c-heading u-super">
          {this.name}
        </h1>

        <p class="c-paragraph">
          Addresses in Blaze are essentially a reset to a more consistent style.
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<div class="c-card c-card--accordion u-high">
  <input type="checkbox" id="accordion-1">
  <label class="c-card__item" for="accordion-1">Item 1</label>
  <div class="c-card__item">
    Pane 1
    <p class="c-paragraph">
      This is an example paragraph
    </p>
  </div>
  <input type="checkbox" id="accordion-2">
  <label class="c-card__item" for="accordion-2">Item 2</label>
  <div class="c-card__item">
    Pane 2
    <p class="c-paragraph">
      This is another example paragraph
    </p>
  </div>
</div>`}/>

      </section>
    );
  }
}