import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-medias'
})
export class ObjectsMedias {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Media objects are usually used for comment engines and other image and related text displays.
        </p>

        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item c-card__item--brand o-media">
    <div class="o-media__image">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}/>

        <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item c-card__item--info o-media">
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
    <div class="o-media__image">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
  </div>
</div>`}/>

        <p class="c-paragraph">
          To position the image or content append the <code class="c-code">--top</code>, <code
          class="c-code">--center</code> or <code class="c-code">--bottom</code> modifiers.
        </p>

        <div class="o-grid o-grid--small-full o-grid--medium-full o-grid--large-full">
          <div class="o-grid__cell o-grid__cell--width-33">
            <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--bottom">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}/>
          </div>

          <div class="o-grid__cell o-grid__cell--width-33">
            <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--center">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}/>
          </div>

          <div class="o-grid__cell o-grid__cell--width-33">
            <demo-markup language="html" code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--top">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}/>
          </div>
        </div>
      </page-template>
    );
  }
}
