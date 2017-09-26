import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-sizes'
})
export class UtilsSizes {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <section>
        <h1 class="c-heading u-super">
          {this.name}
        </h1>

        <p class="c-paragraph">
          A set of sizes to make things bigger or smaller. Add one of these utility classes to a component and it will
          grow in size.
        </p>

        <carbon-ad/>

        <pre class="c-pre css"><code class="c-code c-code--multiline">{`.u-xsmall
.u-small
.u-medium
.u-large
.u-xlarge
.u-super`}</code></pre>

        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-xsmall">.u-xsmall</div>
        </div>
        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-small">.u-small</div>
        </div>
        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-medium">.u-medium</div>
        </div>
        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-large">.u-large</div>
        </div>
        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-xlarge">.u-xlarge</div>
        </div>
        <div class="u-letter-box u-letter-box--small">
          <div class="c-badge c-badge--brand u-super">.u-super</div>
        </div>

      </section>
    );
  }
}
