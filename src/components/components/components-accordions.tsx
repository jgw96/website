import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-accordions'
})
export class ComponentsAccordions {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <p class="c-paragraph">
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
</div>`} />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-accordion>
  <blaze-accordion-pane open header="Click me">
    This is an expanded accordion
  </blaze-accordion-pane>
  <blaze-accordion-pane header="Click me also">
    To toggle other panes
  </blaze-accordion-pane>
</blaze-accordion>`} />
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}