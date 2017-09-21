import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-build'
})
export class CustomBuild {
  @Prop() name: string;

  card({ heading, subheading, body }) {
    return (
      <div class="c-card u-highest">
        <header class="c-card__header">
          <h2 class="c-heading">
            {heading}
            <div class="c-heading__sub">{subheading}</div>
          </h2>
        </header>
        <div class="c-card__body">
          {body}
        </div>
      </div>
    );
  }

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
          You may want to theme or override so much of Blaze that you should really build a customised version.
          The best approach is to grab the code from GitHub, change the variables and mixins and build the toolkit
          yourself.
        </p>

        <carbon-ad/>

        <div class="o-grid o-grid--wrap o-grid--top">
          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box--small">
            {
              this.card({
                heading: 'Step 1',
                subheading: 'Get Blaze',
                body: ([<p class="c-paragraph">
                  Clone <a class="c-link" href="https://github.com/BlazeCSS/blaze">the git repo:</a>
                </p>,
                  <p class="c-paragraph">
                    <code class="c-code c-code--multiline">git clone https://github.com/BlazeCSS/blaze.git</code>
                  </p>])
              })
            }
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box--small">
            {
              this.card({
                heading: 'Step 2',
                subheading: 'Install',
                body: ([<p class="c-paragraph">
                  Install node modules:
                </p>,
                  <p class="c-paragraph">
                    <code class="c-code c-code--multiline">{`npm i gulp -g && npm i`}</code>
                  </p>])
              })
            }
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box--small">
            {
              this.card({
                heading: 'Step 3',
                subheading: 'Install',
                body: ([<p class="c-paragraph">
                  To build Blaze run:
                </p>,
                  <p class="c-paragraph">
                    <code class="c-code c-code--multiline">gulp</code>
                  </p>])
              })
            }
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-100@large u-letter-box--small">
            {
              this.card({
                heading: 'Ready to go!',
                subheading: 'Install',
                body: ([<p class="c-paragraph">
                  The output of your changes will be available in <span class="c-text--loud">/dist</span>
                </p>,
                  <p class="c-paragraph">
                    If you want to build the solution every time you make a change <code class="c-code">gulp
                    watch</code> will watch the appropriate files.
                  </p>])
              })
            }
          </div>
        </div>
      </section>
    );
  }
}
