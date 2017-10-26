import { Component } from "@stencil/core"

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return ([
      <div class="o-page-header o-container o-container--large">
        <site-nav/>
        <div class="u-centered u-letter-box--small">
          <stencil-route-link url="/">
            <img class="o-page-logo" src="/assets/img/blaze.png" alt="blazecss logo"/>
          </stencil-route-link>
        </div>
        <site-search/>
      </div>
    ]);
  }
}
