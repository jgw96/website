import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-modals'
})
export class ObjectsModals {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <h2 class="c-heading">
              Basic Modal
            </h2>

            <p class="c-paragraph">
              Your basic modal has a variety of elements to it. <code class="c-code">.c-overlay</code> will expand to fill
              the current space, more information on <a class="c-link" href="/components/overlays">overlays</a> is
              available.
            </p>

            <p class="c-paragraph">
              The modal body it self consists of <a class="c-link" href="/components/cards">cards</a>, providing you with a
              consistent way of building structured content. Please familiarise yourself with what is possible with cards to
              make full use of modals.
            </p>

            <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>
<div class="o-modal">
  <div class="c-card">
    <header class="c-card__header">
      <button type="button" class="c-button c-button--close">&times;</button>
      <h2 class="c-heading">Modal heading</h2>
    </header>
    <div class="c-card__body">
      This is the modal body
    </div>
    <footer class="c-card__footer">
      <button type="button" class="c-button c-button--brand">Close</button>
    </footer>
  </div>
</div>`} />

            <h2 id="ghost" class="c-heading">
              Ghost Modal
            </h2>

            <p class="c-paragraph">
              This modal has no body, hence "ghost". Lol.
            </p>

            <p class="c-paragraph">
              To make a ghost modal simply add the <code class="c-code">.o-modal--ghost</code> modifier.
            </p>

            <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>
<div class="o-modal o-modal--ghost">
  <div class="c-card">
    <header class="c-card__header">
      <button type="button" class="c-button c-button--close">&times;</button>
      <h2 class="c-heading">Modal heading</h2>
    </header>
    <div class="c-card__body">
      This is the modal body
    </div>
    <footer class="c-card__footer">
      <button type="button" class="c-button c-button--info">Close</button>
    </footer>
  </div>
</div>`} />

            <h2 id="scrollable" class="c-heading">
              Scrollable content
            </h2>

            <p class="c-paragraph">
              To make a scrollable modal add the <code class="c-code">.o-panel</code> class to the modal body, and apply a
              fixed height so long content starts to scroll.
            </p>

            <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>
<div class="o-modal">
  <div class="c-card">
    <header class="c-card__header">
      <button type="button" class="c-button c-button--close">&times;</button>
      <h2 class="c-heading">Modal heading</h2>
    </header>
    <div class="c-card__body o-panel" style="height:300px">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
    </div>
    <footer class="c-card__footer">
      <button type="button" class="c-button c-button--brand">Close</button>
    </footer>
  </div>
</div>`} />

            <h2 id="full" class="c-heading">
              Full screen modal
            </h2>

            <p class="c-paragraph">
              To make a full screen modal simply add the <code class="c-code">.o-modal--full</code> modifier.
            </p>

            <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>
<div class="o-modal o-modal--full">
  <div class="c-card">
    <header class="c-card__header">
      <button type="button" class="c-button c-button--close">&times;</button>
      <h2 class="c-heading">Modal heading</h2>
    </header>
    <div class="c-card__body">
      This is the modal body
    </div>
    <footer class="c-card__footer">
      <button type="button" class="c-button c-button--brand">Close</button>
    </footer>
  </div>
</div>`} />

            <h2 class="c-heading">
              Variations
            </h2>

            <p class="c-paragraph">
              Since modals simply display <a class="c-link" href="/components/cards">cards</a> differently you can use all
              the variations cards give you as the different content types of modals.
            </p>

            <demo-markup language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>
<div class="o-modal u-highest">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam
        sea et.</p>
    </div>
    <footer class="c-card__footer c-card__footer--block">
      <div class="c-input-group">
        <button class="c-button c-button--block c-button--brand">Button</button>
        <button class="c-button c-button--block c-button--info">Button</button>
      </div>
    </footer>
  </div>
</div>`} />

          </blaze-tab>
          <blaze-tab header="JavaScript">
          <demo-markup language="html" classes="modal-demo" code={`<blaze-modal open>
  <blaze-card>
    <blaze-card-header>
      <h2 class="c-heading u-xlarge">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </blaze-card-header>
    <blaze-card-body>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </p>
    </blaze-card-body>
    <blaze-card-footer>
      <div class="c-input-group">
        <button class="c-button c-button--block c-button--brand">Button</button>
        <button class="c-button c-button--block c-button--info">Button</button>
      </div>
    </blaze-card-footer>
  </blaze-card>
</blaze-modal>`} />
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
                  <td class="c-table__cell">open (boolean)</td>
                  <td class="c-table__cell">Initial open/close state of the modal</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">dismissible (boolean)</td>
                  <td class="c-table__cell">Allow the modal to be closed by clicking on the overlay or close button</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">full (boolean)</td>
                  <td class="c-table__cell">Toggles the fullscreen style</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">ghost (boolean)</td>
                  <td class="c-table__cell">Toggles the ghost modal style</td>
                </tr>
              </tbody>
            </table>


            <h2 class="c-heading">
              Methods
            </h2>

            <p class="c-paragraph">
              To access public methods on the element first select it
              using <code class="c-code">document.querySelector()</code>.
            </p>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">show()</td>
                  <td class="c-table__cell">Opens the modal</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">close()</td>
                  <td class="c-table__cell">Hides the modal</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">isOpen()</td>
                  <td class="c-table__cell">Returns true or false depending whether the modal is open or closed</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}
