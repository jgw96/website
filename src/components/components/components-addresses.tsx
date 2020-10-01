import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-addresses'
})
export class ComponentsAddresses {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <p class="c-paragraph">
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
</address>`} />

            <h2 id="heading" class="c-heading u-xlarge">
              Heading
            </h2>

            <demo-markup language="html" code={`<address class="c-address">
  <span class="c-address__heading">The Simpsons,</span>
  742 Evergreen Terrace,<br>
  Springfield,<br>
  80085,<br>
  USA
</address>`} />

          </blaze-tab>
          <blaze-tab header="JavaScript">
            <h2 id="address" class="c-heading u-xlarge">
              Address with header
            </h2>
            <demo-markup language="html" code={`<blaze-address>
  <blaze-address-heading>
    The Simpsons,
  </blaze-address-heading>
  742 Evergreen Terrace,<br>
  Springfield,<br>
  80085,<br>
  USA
</blaze-address>`} />
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}