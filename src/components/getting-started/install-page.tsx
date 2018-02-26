import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'install-page'
})
export class InstallPage {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>

        <h2 id="cdn" class="c-heading u-xlarge">Link via CDN</h2>

        <p class="c-paragraph">
          The easiest way to use the toolkit is via CDN.
        </p>

        <p class="c-paragraph">
          <a class="c-link" href="https://unpkg.com/blaze/scss/dist/blaze.min.css">blaze.min.css</a> <span class="c-text--loud">contains everything you need</span>.
          Link to it by adding the following to your <code class="c-code">{`<head></head>`}</code>.
        </p>

        <demo-markup demo={false} language="html" code={`<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/blaze.min.css">`} />

        <h2 id="modules" class="c-heading u-xlarge">Modules</h2>

        <p class="c-paragraph">
          <a class="c-link" href="https://unpkg.com/blaze/scss/dist/">Each module is also available via CDN</a> in-case you
          only want bits and pieces of Blaze and not the whole toolkit.
        </p>

        <demo-markup demo={false} language="html" code={`<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/generics.global.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/objects.grid.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/components.typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/components.buttons.min.css">
...etc...`} />

        <p class="c-paragraph">
          <a href="https://unpkg.com/blaze/scss/dist/" class="c-link">See all modules available on the CDN</a>
        </p>

        <h2 id="applying-styles" class="c-heading u-xlarge">Applying Styles</h2>

        <p class="c-paragraph">
          We've designed the toolkit not to interfere with others
          or your own styles, hence Blaze won't automatically do anything to your site.
        </p>

        <p class="c-paragraph">
          The following won't change by simply linking to blaze.min.css like it would with others such as
          Bootstrap or Foundation:
        </p>

        <demo-markup demo={false} language="html" code={`<button type="button">Button</button>`} />

        <p class="c-paragraph">
          <button type="button">Button</button>
        </p>

        <p class="c-paragraph">
          You need to apply our button classes:
        </p>

        <demo-markup demo={false} language="html" code={`<button class="c-button" type="button">Button</button>`} />

        <p class="c-paragraph">
          <button class="c-button" type="button">Button</button>
        </p>

        <p class="c-paragraph">
          This means you have to add classes to each part of your site where you want Blaze to apply. Take a
          look at the documentation for our objects, components, typography etc. and you'll see how intuitive it is
          to use.
        </p>
      </page-template>
    );
  }
}
