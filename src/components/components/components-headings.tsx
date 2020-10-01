import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-headings'
})
export class ComponentsHeadings {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <demo-markup language="html" code={`<h1 class="c-heading u-super">Super</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-xlarge">Extra Large</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-large">Large</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-medium">Medium</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-small">Small</h1>`}/>
        <demo-markup language="html" code={`<h1 class="c-heading u-xsmall">Extra Small</h1>`}/>
      </page-template>
    );
  }
}