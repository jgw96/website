import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-overlays'
})
export class ComponentsOverlays {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Overlays are used in a lot of other components to blackout the background context of the page.
        </p>

        <h2 class="c-heading u-xlarge">
          Basic Overlay
        </h2>

        <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>`}/>

        <h2 id="variations" class="c-heading u-xlarge">
          Variations
        </h2>

        <h3 id="dismissable" class="c-heading u-large c-text--mono">
          .c-overlay--visible
        </h3>

        <p class="c-paragraph">
          Overlays are by default hidden. To make the visible use
          the <code class="c-code">.c-overlay--visible</code> modifier.
        </p>

        <h3 id="dismissable" class="c-heading u-large c-text--mono">
          .c-overlay--dismissable
        </h3>

        <p class="c-paragraph">
          To give the sense that you can click on an overlay to make it disappear
          give it the <code class="c-code">.c-overlay--dismissable</code> modifier.
        </p>

        <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible c-overlay--dismissable"></div>`}/>

        <h3 id="transparent" class="c-heading u-large c-text--mono">
          .c-overlay--transparent
        </h3>

        <p class="c-paragraph">
          Overlays don't necessarily need to be visible, they can appear transparent to provide functionality but no visual cues.
          If so use the <code class="c-code">.c-overlay--transparent</code> modifier.
        </p>

        <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible c-overlay--dismissable c-overlay--transparent"></div>`}/>

        <h3 id="fullpage" class="c-heading u-large c-text--mono">
          .c-overlay--fullpage
        </h3>

        <p class="c-paragraph">
          You can make overlays cover the entire page by adding the <code class="c-code">.c-overlay--fullpage</code> modifier. The overlay will
          remain in a fixed position behind the content you want to promote.
        </p>

      </page-template>
    );
  }
}