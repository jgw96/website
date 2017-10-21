import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-avatars'
})
export class ComponentsAvatars {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Avatars are useful for chat UIs, profile pictures and account photos.
        </p>

        <demo-markup language="html" code={`<div class="c-avatar u-super">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>
<div class="c-avatar u-xlarge">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>
<div class="c-avatar u-large">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>
<div class="c-avatar u-small">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>
<div class="c-avatar u-xsmall">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
</div>`}/>

        <h2 class="c-heading">
          2 Images
        </h2>

        <demo-markup language="html" code={`<div class="c-avatar u-super">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>
<div class="c-avatar u-xlarge">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>
<div class="c-avatar u-large">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>
<div class="c-avatar u-small">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>
<div class="c-avatar u-xsmall">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=823">
  <img class="c-avatar__img" src="https://unsplash.it/200/?image=815">
</div>`}/>

        <h2 class="c-heading">
          Initials
        </h2>

        <demo-markup language="html" code={`<div class="c-avatar u-super" data-text="GP"></div>
<div class="c-avatar u-xlarge" data-text="GP"></div>
<div class="c-avatar u-large" data-text="GP"></div>
<div class="c-avatar u-medium" data-text="GP"></div>
<div class="c-avatar u-small" data-text="GP"></div>
<div class="c-avatar u-xsmall" data-text="GP"></div>`}/>

      </page-template>
    );
  }
}