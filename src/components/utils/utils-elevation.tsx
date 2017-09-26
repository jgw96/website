import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-elevation'
})
export class UtilsElevation {
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
          Consistent box-shadows for any element.
        </p>

        <carbon-ad/>

        <h2 id="letter-boxes" class="c-heading u-xlarge">Levels</h2>
        <p class="c-paragraph">
          Available levels:
        </p>
        <pre class="c-pre css"><code class="c-code c-code--multiline">{`.u-high
.u-higher
.u-highest`}</code></pre>

        <div class="o-grid o-grid--wrap u-centered">
          <div class="o-grid__cell u-letter-box--large">
            <div class="c-avatar u-super"></div>
          </div>
          <div class="o-grid__cell u-letter-box--large">
            <div class="c-avatar u-super u-high"></div>
          </div>
          <div class="o-grid__cell u-letter-box--large">
            <div class="c-avatar u-super u-higher"></div>
          </div>
          <div class="o-grid__cell u-letter-box--large">
            <div class="c-avatar u-super u-highest"></div>
          </div>
        </div>

      </section>
    );
  }
}
