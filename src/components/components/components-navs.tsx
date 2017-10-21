import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-navs'
})
export class ComponentsNavs {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>

        <p slot="intro" class="c-paragraph">
          With a basic nav you will probably want to apply a custom width to the <code class="c-code">.c-nav</code> element, otherwise it will appear with 100% width.
        </p>

        <h2 class="c-heading u-xlarge">
          Basic
        </h2>

        <demo-markup language="html" code={`<ul class="c-nav" style="width: 280px;">
  <li class="c-nav__content u-centered c-text--loud">MY APP</li>
  <li class="c-nav__item c-nav__item--success c-nav__item--active"><i class="fa fa-plus"></i> Create New</li>
  <li class="c-nav__item"><i class="fa fa-home"></i> Home</li>
  <li class="c-nav__item c-nav__item--brand"><i class="fa fa-question-circle"></i> About</li>
  <li class="c-nav__item c-nav__item--info"><i class="fa fa-star"></i> News</li>
  <li class="c-nav__item c-nav__item--error"><i class="fa fa-life-ring"></i> Help</li>
</ul>`}/>

        <h2 id="inline" class="c-heading u-xlarge">
          Inline nav (with right aligned item)
        </h2>

        <demo-markup language="html" code={`<ul class="c-nav c-nav--inline">
  <li class="c-nav__item"><i class="fa fa-home"></i> Home</li>
  <li class="c-nav__item"><i class="fa fa-star"></i> News</li>
  <li class="c-nav__item c-nav__item--right"><i class="fa fa-user"></i> Contact</li>
</ul>`}/>

        <h2 id="absolute-positions" class="c-heading u-xlarge">
          Absolute positions
        </h2>

        <h3 class="c-heading u-large">
          <span class="c-text--mono">.c-nav--top</span> or <span class="c-text--mono">.c-nav--bottom</span>
        </h3>

        <p class="c-paragraph">
          Fix the nav to the top or bottom of the parent element, best used with <code class="c-code">.c-nav--inline</code>.
        </p>

        <h3 class="c-heading u-large">
          <span class="c-text--mono">.c-nav--left</span> or <span class="c-text--mono">.c-nav--right</span>
        </h3>

        <p class="c-paragraph">
          Fix the nav to the left or right of the parent element, you must apply a width otherwise it will consume the entire container!
        </p>

        <h2 id="fixed-position" class="c-heading u-xlarge">
          Fixed position
        </h2>

        <h3 class="c-heading u-large">
          <span class="c-text--mono">.c-nav--fixed</span>
        </h3>

        <p class="c-paragraph">
          Fix the nav in position so that it doesn't move on scroll.
        </p>

        <h2 id="shadows" class="c-heading u-xlarge">
          Shadows
        </h2>

        <p class="c-paragraph">
          Add the standard elevation modifiers to give the nav the appearance that it is hovering above the page.
        </p>

        <demo-markup language="html" code={`<ul class="c-nav c-nav--inline u-highest">
  <span class="c-nav__item"><i class="fa fa-home"></i> Home</span>
  <span class="c-nav__item"><i class="fa fa-star"></i> News</span>
  <span class="c-nav__item c-nav__item--right"><i class="fa fa-user"></i> Contact</span>
</ul>`}/>

        <h2 id="images" class="c-heading u-xlarge">
          Images
        </h2>

        <p class="c-paragraph">
          Navs support images really well too. Just wrap your <code class="c-code">.o-image</code> inside a <code class="c-code">.c-nav__content</code> element.
        </p>

        <demo-markup language="html" code={`<ul class="c-nav c-nav--inline">
  <span class="c-nav__content u-window-box--none">
    <img class="o-image" src="https://unsplash.it/g/200?random">
  </span>
  <span class="c-nav__item"><i class="fa fa-home"></i> Home</span>
  <span class="c-nav__item"><i class="fa fa-star"></i> News</span>
  <span class="c-nav__item c-nav__item--right"><i class="fa fa-user"></i> Contact</span>
</ul>`}/>

        <h2 id="light-variation" class="c-heading u-xlarge">
          Light variation
        </h2>

        <demo-markup language="html" code={`<ul class="c-nav c-nav--light c-nav--inline">
  <li class="c-nav__item"><i class="fa fa-home"></i> Home</li>
  <li class="c-nav__item"><i class="fa fa-star"></i> News</li>
  <li class="c-nav__item c-nav__item--right"><i class="fa fa-user"></i> Contact</li>
</ul>`}/>

      </page-template>
    );
  }
}