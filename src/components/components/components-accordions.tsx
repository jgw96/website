import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-accordions'
})
export class ComponentsAccordions {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Accordions are achieved by adding a modifier to a <a href="cards" class="c-link">card</a> element.
        </p>

        <demo-markup language="html" code={`<div class="c-text c-card c-card--accordion">
  <div class="c-card__item c-card__item--title c-card__item--active">
    Header
  </div>
  <div class="c-card__item c-card__item--pane">
    This is the body
  </div>
  <div class="c-card__item c-card__item--title">
    Header
  </div>
  <div class="c-card__item c-card__item--pane">
    This is the body
  </div>
</div>`}/>

      </page-template>
    );
  }
}