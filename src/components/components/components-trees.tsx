import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-trees'
})
export class ComponentsTrees {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Expandable tree structure
        </p>

        <h2 class="c-heading u-xlarge">
          Expandable and Expanded
        </h2>

        <demo-markup language="html" code={`<ul class="c-tree">
  <li class="c-tree__item c-tree__item--expandable"><span class="c-link">Directory 1</span></li>
  <li class="c-tree__item c-tree__item--expandable"><span class="c-link">Directory 2</span></li>
  <li class="c-tree__item c-tree__item--expanded"><span class="c-link">Directory 3</span>
    <ul class="c-tree">
      <li class="c-tree__item">File 1</li>
      <li class="c-tree__item">File 2</li>
      <li class="c-tree__item">File 3</li>
      <li class="c-tree__item">File 4</li>
    </ul>
  </li>
  </li>
  <li class="c-tree__item c-tree__item--expandable"><span class="c-link">Directory 4</span></li>
  <li class="c-tree__item c-tree__item--expanded"><span class="c-link">Directory 5</span></li>
    <ul class="c-tree">
      <li class="c-tree__item c-text--quiet">(empty)</li>
    </ul>
  </li>
</ul>`}/>

      </page-template>
    );
  }
}