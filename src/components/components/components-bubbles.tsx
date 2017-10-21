import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-bubbles'
})
export class ComponentsBubbles {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          For want of a better word bubbles are tooltips. But we think bubbles sound better than tooltips!
        </p>

        <h2 id="address" class="c-heading u-xlarge">
          Basic Bubble
        </h2>

        <demo-markup language="html" code={`<div class="c-bubble c-bubble--top">This bubble is on the top</div>
<p class="c-paragraph">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</p>`}/>

        <h2 id="positions" class="c-heading u-xlarge">
          Positions
        </h2>

        <p class="c-paragraph">
          Bubbles really need to be positioned with JavaScript to make them most useful.
          Blaze could have overridden all <code class="c-code">title</code> attributes but
          that seemed too opinionated.
        </p>

        <demo-markup language="html" code={`<span class="c-bubble c-bubble--right">.c-bubble--right</span>
<span class="c-bubble c-bubble--top">.c-bubble--top</span>
<span class="c-bubble c-bubble--bottom">.c-bubble--bottom</span>
<span class="c-bubble c-bubble--left">.c-bubble--left</span>`}/>

      </page-template>
    );
  }
}