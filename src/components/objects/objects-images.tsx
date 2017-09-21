import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-images'
})
export class ObjectsImages {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <section>
        <h1 class="c-heading u-super">
          {this.name}
        </h1>

        <p class="c-paragraph">
          Images are simply display block, 100% wide with height of auto.
        </p>

        <carbon-ad/>

        <demo-markup code={`<img class="o-image" src="https://unsplash.it/1024/963?random" />`}/>

      </section>
    );
  }
}
