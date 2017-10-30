import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-images'
})
export class ObjectsImages {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Images are simply display block, 100% wide with height of auto.
        </p>

        <demo-markup language="html" code={`<img class="o-image" src="https://unsplash.it/1024/963?random" />`}/>

      </page-template>
    );
  }
}
