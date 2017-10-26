import { Component, Prop } from '@stencil/core';
import { ActiveRouter, RouterHistory } from "@stencil/router";

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})
export class LandingPage {
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;

  constructor() {
    document.title = 'Blaze CSS - Open Source Modular CSS Toolkit';
  }

  navigate(url) {
    const history: RouterHistory = this.activeRouter.get('history');
    history.push(url, {});
  }

  render() {
    return (
      <div>
        <div class="o-container o-container--small u-centered">
          <h1 class="c-heading c-site-header">
            Blaze <span class="c-site-header__highlight">CSS</span>
          </h1>

          <p class="u-large">
            Blaze is an open source modular toolkit. It provides great structure for building websites quickly
            with a scalable and maintainable foundation.
          </p>

          <div id='buttonsDiv' class="o-grid o-grid--wrap u-letter-box u-letter-box--large">
            <div class="o-grid__cell u-letter-box u-letter-box--small o-grid__cell--width-100 o-grid__cell--width-50@small">
              <button onClick={() => this.navigate('/getting-started/install')}
                class="c-button c-button--brand c-button--block u-large">
                Getting Started
            </button>
            </div>
            <div class="o-grid__cell u-letter-box u-letter-box--small o-grid__cell--width-100 o-grid__cell--width-50@small">
              <button onClick={() => this.navigate('/components/buttons')}
                class="c-button c-button--info c-button--block u-large">
                Components
            </button>
            </div>
          </div>

          <carbon-ad />

          <div class="o-grid o-grid--center u-letter-box u-letter-box--large">
            <div class="o-grid__cell o-grid__cell--width-40">
              <a href="https://www.browserstack.com">
                <st-img class="o-image" src="/assets/img/browserstack.png" alt="browserstack sponser" />
              </a>
            </div>
            <div class="o-grid__cell o-grid__cell--width-20">
              <a href="https://www.jetbrains.com/webstorm">
                <st-img class="o-image" src="/assets/img/webstorm.png" alt="webstorm sponser" />
              </a>
            </div>
            <div class="o-grid__cell o-grid__cell--width-40">
              <a href="https://www.algolia.com">
                <st-img class="o-image" src="/assets/img/algolia.png" alt="algolia sponser" />
              </a>
            </div>
          </div>

          <div class="u-letter-box u-letter-box--large">
            <span>
              <a class="c-link" href="https://github.com/BlazeCSS/blaze">
                <i class="fa fa-github" /> Github
              </a>
            </span>
            <span class="u-pillar-box u-pillar-box--large">
              <a class="c-link" href="https://gitter.im/BlazeCSS/blaze">
                <i class="fa fa-comments" /> Chat
              </a>
            </span>
            <span>
              <a class="c-link" href="https://www.stickermule.com/uk/marketplace/15481-blaze-css">
                <i class="fa fa-heart" /> Stickers
              </a>
            </span>
          </div>

          <div>
            <span class="c-badge c-badge--success">v3.6.0</span>
          </div>
        </div>

        <div class="u-centered u-letter-box u-letter-box--super">
          <div class="c-homepage-section c-homepage-section--secondary">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">What makes Blaze different?</h2>

                  <p class="c-paragraph">
                    Blaze fills the gap between monolithic frameworks like Bootstrap, UIKit and Semantic, and "micro" ones
                    such as Skeleton, Milligram and Min. It all depends on your situation and what problem you're trying to
                    solve but we think Blaze can provide you with the best of both worlds.
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box--super">
                  <i class="fa fa-table fa-5x" style={{ color: '#d3eafd' }}></i>

                  <h3 class="c-heading u-xlarge">More than just a grid</h3>

                  <p class="c-paragraph">
                    Micro-frameworks tend to sacrifice a lot of usefulness for the file size, leaving the developer wanting more
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-window-box--super">
                  <i class="fa fa-hand-paper-o fa-5x" style={{ color: '#8bc8f9' }}></i>

                  <h3 class="c-heading u-xlarge">Opt-in</h3>

                  <p class="c-paragraph">
                    Blaze won't automatically take control of any of your design unless you want it to
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-window-box--super">
                  <i class="fa fa-play fa-5x" style={{ color: '#085796', transform: 'rotate(90deg)' }}></i>

                  <h3 class="c-heading u-xlarge">BEM and ITCSS</h3>

                  <p class="c-paragraph">
                    Blaze follows <span class="c-text--loud">BEM</span> and <span class="c-text--loud">Inverted Triangle</span> naming conventions to give meaning and context to our selectors
				          </p>
                </div>
              </div>
            </div>
          </div>

          <div class="c-homepage-section">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">
                    Components<br />
                    <i class="fa fa-sliders" style={{ color: '#0c80df' }}></i>
                    <i class="u-pillar-box u-pillar-box--medium fa fa-toggle-on pillar-box--small" style={{ color: '#8bc8f9' }}></i>
                    <i class="fa fa-calendar" style={{ color: '#085796' }}></i>
                  </h2>

                  <p class="c-paragraph">
                    Blaze is a comprehensive starting point for any website. Our components provide great
                    structure, designed to help you improve your development speed it has a shallow learning
                    curve and intuitive naming conventions.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-window-box--super">
                  <i class="fa fa-tablet fa-2x" style={{ color: '#d3eafd' }}></i>
                  <i class="u-pillar-box u-pillar-box--xsmall fa fa-laptop fa-3x" style={{ color: '#8bc8f9' }}></i>
                  <i class="fa fa-desktop fa-5x" style={{ color: '#085796' }}></i>

                  <h3 class="c-heading u-xlarge">Responsive</h3>

                  <p class="c-paragraph">
                    Built with a mobile first approach Blaze is fully responsive
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box--super">
                  <i class="fa fa-sitemap fa-5x" style={{ color: '#d3eafd' }}></i>

                  <h3 class="c-heading u-xlarge">Modular</h3>

                  <p class="c-paragraph">
                    You can use any part of Blaze in isolation to make your payload small and focused
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box--super">
                  <i class="fa fa-gears fa-5x" style={{ color: '#0c80df' }}></i>

                  <h3 class="c-heading u-xlarge">Custom builds</h3>

                  <p class="c-paragraph">
                    In 3 easy steps you can have a custom build with easy to use variables and mixins
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box--super">
                  <i class="fa fa-balance-scale fa-5x" style={{ color: '#085796' }}></i>

                  <h3 class="c-heading u-xlarge">Small size</h3>

                  <p class="o-paragraph">
                    It might only be 9Kb but its complete and easy to use
				          </p>
                </div>
              </div>
            </div>
          </div>

          <div class="c-homepage-section c-homepage-section--inverted">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">Open Source</h2>

                  <p class="c-paragraph">
                    Blaze is open source, free and always will be. Pull Requests, suggestions or comments are all welcome and valued.
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box--super">
                  <i class="fa fa-github-alt fa-5x" style={{ color: '#8bc8f9' }}></i>

                  <h3 class="c-heading u-xlarge">Hosted on Github</h3>

                  <p class="c-paragraph">
                    Our project (and this website) is hosted on Github. Blaze <i class="fa fa-heart" style={{ color: '#ef4f52' }}></i> Github!
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box--super">
                  <i class="fa fa-gavel fa-5x" style={{ color: '#d3eafd' }}></i>

                  <h3 class="c-heading u-xlarge">MIT Licence</h3>

                  <p class="c-paragraph">
                    You can benefit from using Blaze in your own way
				          </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box--super">
                  <i class="fa fa-code-fork fa-5x" style={{ color: '#0c80df' }}></i>

                  <h3 class="c-heading u-xlarge">Contributing</h3>

                  <p class="c-paragraph">
                    Blaze will thrive on contributions from the open source community, so get forking!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}