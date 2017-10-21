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
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
        These tooltips are like <stencil-route-link url="/components/bubbles/">bubbles</stencil-route-link> but
        are a pure CSS solution. <strong class="c-text--loud">Hover over the badge below.</strong>
        </p>

        <demo-markup language="html" code={`<span class="c-badge c-badge--brand c-tooltip c-tooltip--right" aria-label="This is a tooltip, hello">Hover over me...</span>`}/>

      </page-template>
    );
  }
}