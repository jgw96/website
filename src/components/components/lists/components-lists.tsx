import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-lists'
})
export class ComponentsLists {
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
          Ordered, un-ordered, indented, Blaze has you covered when it comes to making lists.
        </p>

        <carbon-ad/>

        <demo-markup language="html" code={`<ul class="c-list">
  <li class="c-list__item">Lorem ipsum dolor sit amet</li>
  <li class="c-list__item">Consectetur adipiscing elit</li>
  <li class="c-list__item">Nulla volutpat aliquam velit
    <ul class="c-list">
      <li class="c-list__item">Phasellus iaculis neque</li>
      <li class="c-list__item">Purus sodales ultricies</li>
      <li class="c-list__item">Vestibulum laoreet porttitor sem</li>
      <li class="c-list__item">Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
</ul>`}/>

        <h2 id="ordered" class="c-heading u-xlarge">
          Ordered
        </h2>

        <p class="c-paragraph">
          The <code class="c-code">.list--ordered</code> modifier will apply correct numbering to ordered lists and
          nested lists.
        </p>

        <demo-markup language="html" code={`<ol class="c-list c-list--ordered">
  <li class="c-list__item">Lorem ipsum dolor sit amet</li>
  <li class="c-list__item">Consectetur adipiscing elit</li>
  <li class="c-list__item">Nulla volutpat aliquam velit
    <ol class="c-list c-list--ordered">
      <li class="c-list__item">Phasellus iaculis neque</li>
      <li class="c-list__item">Purus sodales ultricies
        <ol class="c-list c-list--ordered">
        <li class="c-list__item">Lorem ipsum dolor sit amet</li>
        <li class="c-list__item">Consectetur adipiscing elit</li>
        </ol>
      </li>
      <li class="c-list__item">Vestibulum laoreet porttitor sem</li>
      <li class="c-list__item">Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
</ol>`}/>

        <h2 id="un-styled" class="c-heading u-xlarge">
          Un-styled
        </h2>

        <p class="c-paragraph">
          Applying <code class="c-code">.list--unstyled</code> to a list will remove the bullet points.
        </p>

        <p class="c-paragraph">
          You can remove bullet points on individual items by adding
          the <code class="c-code">.list__item--unstyled</code> modifier.
        </p>

        <demo-markup language="html" code={`<ul class="c-list c-list--unstyled">
  <li class="c-list__item">This list is unstyled</li>
  <li class="c-list__item">Consectetur adipiscing elit</li>
  <li class="c-list__item">Nulla volutpat aliquam velit
    <ul class="c-list">
      <li class="c-list__item">Phasellus iaculis neque</li>
      <li class="c-list__item">Purus sodales ultricies</li>
      <li class="c-list__item c-list__item--unstyled">This is an unstyled item</strong></li>
      <li class="c-list__item">Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
</ul>`}/>

        <h2 id="inline" class="c-heading u-xlarge">
          Inline
        </h2>

        <p class="c-paragraph">
          To make your list items flow left to right apply
          the <code class="c-code">.list--inline</code> modifier.
        </p>

        <demo-markup language="html" code={`<ul class="c-list c-list--inline">
  <li class="c-list__item">Lorem</li>
  <li class="c-list__item">ipsum</li>
  <li class="c-list__item">dolor</li>
</ul>`}/>

      </section>
    );
  }
}