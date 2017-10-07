import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-badges'
})
export class ComponentsBadges {
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
          They're useful when you want to add additional info. Like a version number of a project or for status messages for individual items.
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<span class="c-badge">34 unread messages</span>`}/>

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <p class="c-paragraph">
          Badges come as default, brand, info, warning, success and error
        </p>
        <p class="c-paragraph">
          To use, add the color modifier class:
        </p>

        <demo-markup language="html" code={`<span class="c-badge">Default</span>
<span class="c-badge c-badge--brand">Brand</span>
<span class="c-badge c-badge--info">Info</span>
<span class="c-badge c-badge--warning">Warning</span>
<span class="c-badge c-badge--success">Success</span>
<span class="c-badge c-badge--error">Error</span>`}/>

        <h2 id="rounded" class="c-heading u-xlarge">
          Rounded
        </h2>

        <p class="c-paragraph">
          Make your badges rounded with the <code class="c-code">.c-badge--rounded</code> modifier.
        </p>

        <demo-markup language="html" code={`<span class="c-badge c-badge--rounded">Default</span>
<span class="c-badge c-badge--rounded c-badge--brand">Brand</span>
<span class="c-badge c-badge--rounded c-badge--info">Info</span>
<span class="c-badge c-badge--rounded c-badge--warning">Warning</span>
<span class="c-badge c-badge--rounded c-badge--success">Success</span>
<span class="c-badge c-badge--rounded c-badge--error">Error</span>`}/>

        <h2 id="ghost" class="c-heading u-xlarge">
          Ghost
        </h2>

        <p class="c-paragraph">
          Remove your badges bodies with the <code class="c-code">.c-badge--ghost</code> modifier.
        </p>

        <demo-markup language="html" code={`<span class="c-badge c-badge--rounded c-badge--ghost c-badge">Default</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--brand">Brand</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--info">Info</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--warning">Warning</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--success">Success</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--error">Error</span>`}/>

      </section>
    );
  }
}