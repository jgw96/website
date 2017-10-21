import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-addresses'
})
export class ComponentsAddresses {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Addresses in Blaze are essentially a reset to a more consistent style.
        </p>

        <h2 id="address" class="c-heading u-xlarge">
          Basic Address
        </h2>

        <demo-markup language="html" code={`<address class="c-address">
  742 Evergreen Terrace,<br>
  Springfield,<br>
  80085,<br>
  USA
</address>`}/>

        <h2 id="heading" class="c-heading u-xlarge">
          Heading
        </h2>

        <demo-markup language="html" code={`<address class="c-address">
  <span class="c-address__heading">The Simpsons,</span>
  742 Evergreen Terrace,<br>
  Springfield,<br>
  80085,<br>
  USA
</address>`}/>

      </page-template>
    );
  }
}