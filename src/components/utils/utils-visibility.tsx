import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-visibility'
})
export class UtilsVisibility {
  @Prop() name: string;

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
          Blaze comes with a set of visibility utils that should cover all your display and visibility needs.
        </p>

        <carbon-ad/>

        <h2 id="display" class="c-heading u-xlarge">
          Display
        </h2>

        <demo-markup language="css" demo={false} code={`.u-display-none
.u-display-initial
.u-display-inline
.u-display-inline-block
.u-display-block
.u-display-table
.u-display-table-cell
.u-display-flex
.u-display-inline-flex`}/>

        <h2 id="visibility" class="c-heading u-xlarge">
          Visibility
        </h2>

        <p class="c-paragraph">
          The visible utils changes the <code class="c-code">visible: visible|hidden</code> property is CSS.
        </p>

        <demo-markup language="css" demo={false} code={`.u-visible
.u-invisible`}/>

      </section>
    );
  }
}
