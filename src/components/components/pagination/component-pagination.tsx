import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-pagination'
})
export class ComponentsPagination {
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
          Smooth infinite scrolling for the 20th century.
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<div class="c-pagination">
  <div class="c-pagination__controls c-pagination__controls--backward">
    <button class="c-pagination__control">&laquo;</button>
    <button class="c-pagination__control">&lsaquo;</button>
  </div>
  <div class="c-pagination__controls">
    <span class="c-pagination__ellipsis">&hellip;</span>
    <button class="c-pagination__page">4</button>
    <button class="c-pagination__page c-pagination__page--current">5</button>
    <button class="c-pagination__page">6</button>
    <span class="c-pagination__ellipsis">&hellip;</span>
  </div>
  <div class="c-pagination__controls c-pagination__controls--forward">
    <button class="c-pagination__control">&rsaquo;</button>
    <button class="c-pagination__control">&raquo;</button>
  </div>
</div>`}/>

      </section>
    );
  }
}