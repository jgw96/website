import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-pagination'
})
export class ComponentsPagination {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <demo-markup language="html" code={`<div class="c-pagination">
  <div class="c-pagination__controls c-pagination__controls--backward">
    <button class="c-pagination__control">&laquo;</button>
    <button class="c-pagination__control">&lsaquo;</button>
  </div>
  <div class="c-pagination__controls">
    <span class="c-pagination__ellipsis">&hellip;</span>
    <button class="c-pagination__page">4</button>
    <button class="c-pagination__page c-pagination__page--current">5</button>
    <button class="c-pagination__page">6</button>
    <span class="c-pagination__ellipsis">&hellip;</span>
  </div>
  <div class="c-pagination__controls c-pagination__controls--forward">
    <button class="c-pagination__control">&rsaquo;</button>
    <button class="c-pagination__control">&raquo;</button>
  </div>
</div>`} />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-pagination pages="15" page="4"></blaze-pagination>`} />            

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
                  <td class="c-table__cell">pages</td>
                  <td class="c-table__cell">The total number of available pages</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">page</td>
                  <td class="c-table__cell">The current page to initialise at</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Methods
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">currentPage()</td>
                  <td class="c-table__cell">Returns the currently selected page</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Events
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Event</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">onPageChange</td>
                  <td class="c-table__cell">Raised when the pages changes, returns the current page</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}