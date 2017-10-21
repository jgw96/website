import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-toasts'
})
export class ComponentsToasts {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Toasts or growls are covered by special modifiers on <stencil-route-link url="/components/alerts">Alerts</stencil-route-link> and
        usually appear in one of the corners of your page to draw your attention to something that has happened.
        </p>

        <demo-markup classes="fixed-height-demo" language="html" code={`<div class="c-alerts c-alerts--topleft">
  <div class="c-alert">Default</div>
  <div class="c-alert c-alert--brand">Brand</div>
  <div class="c-alert c-alert--info">Info</div>
  <div class="c-alert c-alert--warning">Warning</div>
  <div class="c-alert c-alert--success">Success</div>
  <div class="c-alert c-alert--error">Error</div>
</div>`} />

        <h2 id="positions" class="c-heading u-xlarge">
          Positions
        </h2>

        <p class="c-paragraph">
          Toasts can appear in either of the corners of the page
        </p>

        <h3 class="c-heading u-large c-text--mono">
          .c-alerts--topleft
        </h3>

        <div class="fixed-height-demo">
          <div class="c-alerts c-alerts--topleft">
            <div class="c-alert">Default</div>
          </div>
        </div>

        <h3 class="c-heading u-large c-text--mono">
          .c-alerts--topright
        </h3>

        <div class="fixed-height-demo">
          <div class="c-alerts c-alerts--topright">
            <div class="c-alert">Default</div>
          </div>
        </div>

        <h3 class="c-heading u-large c-text--mono">
          .c-alerts--bottomright
        </h3>

        <div class="fixed-height-demo">
          <div class="c-alerts c-alerts--bottomright">
            <div class="c-alert">Default</div>
          </div>
        </div>

        <h3 class="c-heading u-large c-text--mono">
          .c-alerts--bottomleft
        </h3>

        <div class="fixed-height-demo">
          <div class="c-alerts c-alerts--bottomleft">
            <div class="c-alert">Default</div>
          </div>
        </div>

      </page-template>
    );
  }
}