import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'generics-global'
})
export class GenericsGlobal {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Almost all of Blaze's styles build on top of <span class="c-text--loud">generic.global.css</span>. It's a tiny
          file that handles box-sizing and body margin.
        </p>

        <p class="c-paragraph">
          The rest of Blaze takes cues from <a class="c-link" href="https://necolas.github.io/normalize.css/">Normalize.css</a>
          - A modern, HTML5-ready alternative to CSS resets.
        </p>
        <blockquote class="c-blockquote">
          <div class="c-blockquote__body">
            Normalize.css makes browsers render all elements more consistently and in line with modern standards. It
            precisely targets only the styles that need normalizing.
          </div>
          <div class="c-blockquote__footer">
            <a class="c-link" href="https://necolas.github.io/normalize.css">https://necolas.github.io/normalize.css</a>
          </div>
        </blockquote>
      </page-template>
    );
  }
}
