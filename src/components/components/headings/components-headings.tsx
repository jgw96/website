import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-headings'
})
export class ComponentsHeadings {
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

        <carbon-ad/>

        <demo-markup language="html" code={`<h1 class="c-heading u-super">Super</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-xlarge">Extra Large</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-large">Large</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-medium">Medium</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-small">Small</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-xsmall">Extra Small</h1>`}/>

      </section>
    );
  }
}