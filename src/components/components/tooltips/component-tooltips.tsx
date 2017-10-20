import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tooltips'
})
export class ComponentsTooltips {
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
        These tooltips are like <stencil-route-link url="/components/bubbles/">bubbles</stencil-route-link> but
        are a pure CSS solution. <strong class="c-text--loud">Hover over the badge below.</strong>
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<span class="c-badge c-badge--brand c-tooltip c-tooltip--right" aria-label="This is a tooltip, hello">Hover over me...</span>`}/>

      </section>
    );
  }
}