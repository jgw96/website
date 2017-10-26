import { Component, Element, State } from '@stencil/core';

@Component({
  tag: 'carbon-ad',
  styleUrl: 'carbon-ad.scss'
})
export class CarbonAd {

  @Element() el: HTMLElement;

  @State() src: string;
  
  io: IntersectionObserver;

  componentDidLoad() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any[]) => {
        if (data[0].isIntersecting) {
          this.loadAd();
          this.cleanup();
        }
      });

      this.io.observe(this.el.querySelector('div'));
    } else {
      this.loadAd();
    }
  }

  componentDidUnload() {
    this.cleanup();
  }

  loadAd() {
    console.log('loading');
    this.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=blazecsscom';
  }

  cleanup() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <div class="u-letter-box u-letter-box--medium">
        <script async defer type="text/javascript" src={this.src} id="_carbonads_js" />
      </div>
    );
  }
}
