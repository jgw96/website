import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-colors'
})
export class UtilsColors {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          A set of colors and background colors separate from Blaze core.
        </p>

        <h2 class="c-heading">Install</h2>
        <demo-markup language="html" demo={false} code={`<link rel="stylesheet" href="https://unpkg.com/blaze/dist/blaze.colors.min.css" />`}/>

        <h2 class="c-heading">Available values</h2>
        <p class="c-paragraph">
          Both <code class="c-code">.u-bg-</code> and <code class="c-code">.u-color-</code> work for each color class.
        </p>

        <div class="colors-demo">
          <div>
            <div class="c-badge u-bg-black">.u-bg-black</div>
            <div class="c-badge u-bg-white u-color-brand-dark">.u-bg-white</div>
            <div class="c-badge u-bg-beige u-color-brand-dark">.u-bg-beige</div>
          </div>
          <div>
            <div class="c-badge u-bg-grey-lighter u-color-brand-dark">.u-bg-grey</div>
            <div class="c-badge u-bg-grey-light u-color-brand-dark">.u-bg-grey</div>
            <div class="c-badge u-bg-grey">.u-bg-grey</div>
            <div class="c-badge u-bg-grey-dark">.u-bg-grey</div>
            <div class="c-badge u-bg-grey-darker">.u-bg-grey</div>
          </div>
          <div>
            <div class="c-badge u-bg-red-lighter">.u-bg-red</div>
            <div class="c-badge u-bg-red-light">.u-bg-red</div>
            <div class="c-badge u-bg-red">.u-bg-red</div>
            <div class="c-badge u-bg-red-dark">.u-bg-red</div>
            <div class="c-badge u-bg-red-darker">.u-bg-red</div>
          </div>
          <div>
            <div class="c-badge u-bg-pink-lighter">.u-bg-pink</div>
            <div class="c-badge u-bg-pink-light">.u-bg-pink</div>
            <div class="c-badge u-bg-pink">.u-bg-pink</div>
            <div class="c-badge u-bg-pink-dark">.u-bg-pink</div>
            <div class="c-badge u-bg-pink-darker">.u-bg-pink</div>
          </div>
          <div>
            <div class="c-badge u-bg-purple-lighter">.u-bg-purple</div>
            <div class="c-badge u-bg-purple-light">.u-bg-purple</div>
            <div class="c-badge u-bg-purple">.u-bg-purple</div>
            <div class="c-badge u-bg-purple-dark">.u-bg-purple</div>
            <div class="c-badge u-bg-purple-darker">.u-bg-purple</div>
          </div>
          <div>
            <div class="c-badge u-bg-blue-lighter">.u-bg-blue</div>
            <div class="c-badge u-bg-blue-light">.u-bg-blue</div>
            <div class="c-badge u-bg-blue">.u-bg-blue</div>
            <div class="c-badge u-bg-blue-dark">.u-bg-blue</div>
            <div class="c-badge u-bg-blue-darker">.u-bg-blue</div>
          </div>
          <div>
            <div class="c-badge u-bg-green-lighter">.u-bg-green</div>
            <div class="c-badge u-bg-green-light">.u-bg-green</div>
            <div class="c-badge u-bg-green">.u-bg-green</div>
            <div class="c-badge u-bg-green-dark">.u-bg-green</div>
            <div class="c-badge u-bg-green-darker">.u-bg-green</div>
          </div>
          <div>
            <div class="c-badge u-bg-cyan-lighter">.u-bg-cyan</div>
            <div class="c-badge u-bg-cyan-light">.u-bg-cyan</div>
            <div class="c-badge u-bg-cyan">.u-bg-cyan</div>
            <div class="c-badge u-bg-cyan-dark">.u-bg-cyan</div>
            <div class="c-badge u-bg-cyan-darker">.u-bg-cyan</div>
          </div>
          <div>
            <div class="c-badge u-bg-yellow-lighter u-color-brand-dark">.u-bg-yellow</div>
            <div class="c-badge u-bg-yellow-light u-color-brand-dark">.u-bg-yellow</div>
            <div class="c-badge u-bg-yellow u-color-brand-dark">.u-bg-yellow</div>
            <div class="c-badge u-bg-yellow-dark u-color-brand-dark">.u-bg-yellow</div>
            <div class="c-badge u-bg-yellow-darker u-color-brand-dark">.u-bg-yellow</div>
          </div>
          <div>
            <div class="c-badge u-bg-orange-lighter">.u-bg-orange</div>
            <div class="c-badge u-bg-orange-light">.u-bg-orange</div>
            <div class="c-badge u-bg-orange">.u-bg-orange</div>
            <div class="c-badge u-bg-orange-dark">.u-bg-orange</div>
            <div class="c-badge u-bg-orange-darker">.u-bg-orange</div>
          </div>
          <div>
            <div class="c-badge u-bg-brown-light">.u-bg-brown-lighter</div>
            <div class="c-badge u-bg-brown-lighter">.u-bg-brown-light</div>
            <div class="c-badge u-bg-brown">.u-bg-brown</div>
            <div class="c-badge u-bg-brown-dark">.u-bg-brown-dark</div>
            <div class="c-badge u-bg-brown-darker">.u-bg-brown-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-brand-lighter">.u-bg-brand-lighter</div>
            <div class="c-badge u-bg-brand-light">.u-bg-brand-light</div>
            <div class="c-badge u-bg-brand">.u-bg-brand</div>
            <div class="c-badge u-bg-brand-dark">.u-bg-brand-dark</div>
            <div class="c-badge u-bg-brand-darker">.u-bg-brand-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-info-lighter">.u-bg-info-lighter</div>
            <div class="c-badge u-bg-info-light">.u-bg-info-light</div>
            <div class="c-badge u-bg-info">.u-bg-info</div>
            <div class="c-badge u-bg-info-dark">.u-bg-info-dark</div>
            <div class="c-badge u-bg-info-darker">.u-bg-info-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-warning-lighter">.u-bg-warning-lighter</div>
            <div class="c-badge u-bg-warning-light">.u-bg-warning-light</div>
            <div class="c-badge u-bg-warning">.u-bg-warning</div>
            <div class="c-badge u-bg-warning-dark">.u-bg-warning-dark</div>
            <div class="c-badge u-bg-warning-darker">.u-bg-warning-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-success-lighter">.u-bg-success-lighter</div>
            <div class="c-badge u-bg-success-light">.u-bg-success-light</div>
            <div class="c-badge u-bg-success">.u-bg-success</div>
            <div class="c-badge u-bg-success-dark">.u-bg-success-dark</div>
            <div class="c-badge u-bg-success-darker">.u-bg-success-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-error-lighter">.u-bg-error-lighter</div>
            <div class="c-badge u-bg-error-light">.u-bg-error-light</div>
            <div class="c-badge u-bg-error">.u-bg-error</div>
            <div class="c-badge u-bg-error-dark">.u-bg-error-dark</div>
            <div class="c-badge u-bg-error-darker">.u-bg-error-darker</div>
          </div>
          <div>
            <div class="c-badge u-bg-default">.u-bg-default</div>
            <div class="c-badge u-bg-disabled">.u-bg-disabled</div>
            <div class="c-badge u-bg-quiet">.u-bg-quiet</div>
          </div>
        </div>

      </page-template>
    );
  }
}
