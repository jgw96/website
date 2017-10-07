import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-breadcrumbs'
})
export class ComponentsBreadcrumbs {
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
          Breadcrumbs are useful to indicate the navigational route into a website.
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<ol class="c-breadcrumbs">
  <li class="c-breadcrumbs__crumb"><a class="c-link">Home</a></li>
  <li class="c-breadcrumbs__crumb"><a class="c-link">Cars</a></li>
  <li class="c-breadcrumbs__crumb"><a class="c-link">Electric</a></li>
  <li class="c-breadcrumbs__crumb"><a class="c-link">Tesla</a></li>
  <li class="c-breadcrumbs__crumb c-text--loud">P100d</li>
</ol>`}/>
        
      </section>
    );
  }
}