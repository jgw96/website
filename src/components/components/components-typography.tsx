import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-typography'
})
export class ComponentsTypography {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Blaze comes bundled with a nice typography module that covers different text visualisations.
        </p>

        <p class="c-paragraph">
          The base font-family is:
        </p>

        <p class="c-paragraph">
          <pre class="c-pre css"><code class="c-code c-code--multiline">{`.c-text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; }`}</code></pre>
        </p>

        <p class="c-paragraph">
          This attempts to give your text the same font family output as the device's system font.
        </p>

        <p class="c-paragraph">
          It of course can be overridden via CSS or the custom build approach.
        </p>

        <h3 id="paragraphs" class="c-heading u-xlarge">
          Paragraphs
        </h3>

        <p class="c-paragraph">
          <demo-markup language="html" code={`<p class="c-paragraph">Use the paragraph class to style your....paragraphs!</p>`} />
        </p>

        <h3 id="links" class="c-heading u-xlarge">
          Hyper-links
        </h3>

        <p class="c-paragraph">
          To utilise Blaze's consistent styles for hyper-links or to make text look like a hyper-link add
          the <code class="c-code">.c-link</code> class.
        </p>

        <demo-markup language="html" code={`<a href="#" class="c-link">.c-link</a><br />
<a href="#" class="c-link c-link--brand">brand</a><br />
<a href="#" class="c-link c-link--info">info</a><br />
<a href="#" class="c-link c-link--warning">warning</a><br />
<a href="#" class="c-link c-link--success">success</a><br />
<a href="#" class="c-link c-link--error">error</a>`} />

        <h3 id="highlighting" class="c-heading u-xlarge">
          Highlighting text
        </h3>

        <demo-markup language="html" code={`<span class="c-text--highlight">To highlight text simply wrap the words with the highlight class</span>`} />

        <h3 id="emphasising" class="c-heading u-large">
          Emphasising
        </h3>

        <demo-markup language="html" code={`<div class="c-text--loud">Sometimes you want to shout</div>
<div class="c-text--quiet">other times you want to whisper</div>`} />

      <h3 id="abbr" class="c-heading u-xlarge">
        Abbreviations
      </h3>

      <p class="c-paragraph">
        To enable greater accessibility you can enable abbreviations on elements.<br />
        <em>The tag must have a title attribute</em>:
      </p>

      <demo-markup language="html" code={`<abbr class="c-text--help" title="Help text">.c-text--help</abbr>`} />

      <h3 id="monospaced" class="c-heading u-xlarge">
        Monospaced
      </h3>

      <demo-markup language="html" code={`<span class="c-text--mono">This class uses our mono font-family.</span>`} />

      <h3 id="kbd" class="c-heading u-xlarge">
        Keys on a keyboard
      </h3>

      <p class="c-paragraph">
        When you want to describe what keys to press usually as part of support documentation it's handy to use the
        keyboard class:
      </p>

      <demo-markup language="html" code={`<kbd class="c-kbd">.c-kbd</kbd>`} />

      <h3 id="code" class="c-heading u-xlarge">
        Inline and Multiline code
      </h3>

      <p class="c-paragraph">
        You can highlight <code class="c-code">code</code> within a page by using
        the <code class="c-code">.c-code</code> class.
      </p>

      <p class="c-paragraph">
        Default is inline, to display multi-line snippets add
        the <code class="c-code">.c-code--multiline</code> modifier.
      </p>

      <demo-markup language="html" demo={false} code={`<code class="c-code c-code--multiline">
  hello
  world
</code>`} />

      <h3 id="quote" class="c-heading u-xlarge">
        Blockquote
      </h3>

      <demo-markup language="html" code={`<blockquote class="c-blockquote">
  <div class="c-blockquote__body">
    To quote use the following code to make it stand out from the rest of the page
  </div>
  <footer class="c-blockquote__footer">- Greg</footer>
</blockquote>`} />

      </page-template>
    );
  }
}