import { Component, Element, Prop, State } from '@stencil/core';
import { ActiveRouter, RouterHistory } from "@stencil/router";

declare const algoliasearch: any;

@Component({
  tag: 'site-search'
})
export class SiteSearch {
  @Element() el: HTMLElement;
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;
  @State() results: Array<any> = [];
  @State() searchOpen: boolean;
  client: any;
  index: any;

  constructor() {
    if (typeof algoliasearch !== 'undefined') {
      this.client = algoliasearch('OR1F7EOMDJ', '30a5e5272fc8cf7cc47aadeeb6aec522');
      this.index = this.client.initIndex('pages');
    }
  }

  openSearch() {
    this.searchOpen = true;
  }

  closeSearch() {
    this.results = [];
    this.searchOpen = false;
  }

  onSelect(url) {
    const history: RouterHistory = this.activeRouter.get('history');
    history.push(url, {});
    this.closeSearch();
  }

  search(e) {
    const query = e.target.value;
    if (query === '') {
      return this.results = [];
    }

    this.index.search(query, (err, content) => {
      this.results = [];
      if (!err && content.hits) {
        return content.hits.forEach((hit) => {
          this.results.push(
            <stencil-route-link custom={true} class="u-display-block c-card__item" onClick={() => this.onSelect(hit.url)}>
              {hit.title}
            </stencil-route-link>
          );
        });
      }
    });
  };

  render() {
    const classes = this.searchOpen ? 'c-search c-search--open' : 'c-search';

    return (
      <div class={classes}>
        <a class="o-page-header__button o-page-header__button--right c-link c-link--brand"
           onClick={() => this.openSearch()}>
          Search <i class="fa fa-search u-pillar-box--xsmall"/>
        </a>
        <div class="c-search__container o-grid o-grid--center o-grid--no-gutter">
          <div class="o-grid__cell c-search__input">
            <input type="search" class="c-field" placeholder="Search..." autocomplete="off"
                   onInput={(e: UIEvent) => this.search(e)}
                   onFocus={(e: UIEvent) => this.search(e)}/>
            {this.results.length > 0 &&
            <div class="c-search__results">
              <div class="c-card c-card--menu u-high">
                {this.results}
              </div>
            </div>
            }
          </div>
          <div class="c-search__close o-grid__cell--width-fixed u-centered">
            <a class="c-link c-link--brand" onClick={() => this.closeSearch()}>
              <i class="fa fa-close u-pillar-box--xsmall"/> Close
            </a>
          </div>
        </div>
      </div>

    );
  }
}