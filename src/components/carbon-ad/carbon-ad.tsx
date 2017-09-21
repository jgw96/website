import { Component } from '@stencil/core';

@Component({
  tag: 'carbon-ad',
  styleUrl: 'carbon-ad.scss'
})
export class CarbonAd {
  render() {
    return (
      <div class="u-letter-box u-letter-box--medium">
        {/*<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=blazecsscom" id="_carbonads_js" />*/}
      </div>
    );
  }
}
