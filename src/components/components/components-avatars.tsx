import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-avatars'
})
export class ComponentsAvatars {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Avatars are useful for chat UIs, profile pictures and account photos.
        </p>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <demo-markup language="html" code={`<div class="c-avatar u-super">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-xlarge">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-large">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-small">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-xsmall">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>`} />

            <h2 class="c-heading">
              2 Images
            </h2>

            <demo-markup language="html" code={`<div class="c-avatar u-super">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-xlarge">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-large">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-small">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>
<div class="c-avatar u-xsmall">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
  <img class="c-avatar__img" src="https://source.unsplash.com/random/200x200">
</div>`} />

            <h2 class="c-heading">
              Initials
            </h2>

            <demo-markup language="html" code={`<div class="c-avatar u-super" data-text="GP"></div>
<div class="c-avatar u-xlarge" data-text="GP"></div>
<div class="c-avatar u-large" data-text="GP"></div>
<div class="c-avatar u-medium" data-text="GP"></div>
<div class="c-avatar u-small" data-text="GP"></div>
<div class="c-avatar u-xsmall" data-text="GP"></div>`} />

          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-avatar size="super" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="xlarge" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="large" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="small" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="xsmall" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<br>
<blaze-avatar text="GP" size="super"></blaze-avatar>
<blaze-avatar text="GP" size="xlarge"></blaze-avatar>
<blaze-avatar text="GP" size="large"></blaze-avatar>
<blaze-avatar text="GP"></blaze-avatar>
<blaze-avatar text="GP" size="small"></blaze-avatar>
<blaze-avatar text="GP" size="xsmall"></blaze-avatar>
<br>
<blaze-avatar text="GP" size="super" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar text="GP" size="xlarge" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar text="GP" size="large" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar text="GP" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar text="GP" size="small" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar text="GP" size="xsmall" src="https://source.unsplash.com/random/200x200"></blaze-avatar>
<br>
<blaze-avatar size="super" src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="xlarge" src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="large" src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="small" src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>
<blaze-avatar size="xsmall" src="https://source.unsplash.com/random/200x200" src2="https://source.unsplash.com/random/200x200"></blaze-avatar>`} />

            <h2 class="c-heading">
              Attributes
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Attribute</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">src</td>
                  <td class="c-table__cell">URL to the image to display</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">src2</td>
                  <td class="c-table__cell">URL to the smaller secondary image</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">size</td>
                  <td class="c-table__cell">The size of the Avatar</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">text</td>
                  <td class="c-table__cell">Text to display in the middle of the circle</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}