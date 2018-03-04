import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-progress'
})
export class ComponentsProgress {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <demo-markup language="html" code={`<div class="c-progress">
  <div class="c-progress__bar" style="width:15%;"></div>
</div>`} />

            <h2 class="c-heading u-xlarge">
              Rounded
            </h2>

            <demo-markup language="html" code={`<div class="c-progress c-progress--rounded">
  <div class="c-progress__bar" style="width:15%;"></div>
</div>`} />

            <h2 class="c-heading u-xlarge">
              Colors
            </h2>

            <demo-markup language="html" code={`<div class="c-progress">
  <div class="c-progress__bar" style="width:5%;"></div>
</div><br>
<div class="c-progress">
  <div class="c-progress__bar c-progress__bar--brand" style="width:15%;"></div>
</div><br>
<div class="c-progress">
  <div class="c-progress__bar c-progress__bar--info" style="width:20%;"></div>
</div><br>
<div class="c-progress">
  <div class="c-progress__bar c-progress__bar--warning" style="width:25%;"></div>
</div><br>
<div class="c-progress">
  <div class="c-progress__bar c-progress__bar--success" style="width:45%;"></div>
</div><br>
<div class="c-progress">
  <div class="c-progress__bar c-progress__bar--error" style="width:65%;"></div>
</div>`} />

            <h2 class="c-heading u-xlarge">
              Sizes
            </h2>

            <demo-markup language="html" code={`<div class="c-progress u-xsmall">
  <div class="c-progress__bar" style="width:5%;"></div>
</div><br>
<div class="c-progress u-small">
  <div class="c-progress__bar c-progress__bar--brand" style="width:15%;"></div>
</div><br>
<div class="c-progress u-medium">
  <div class="c-progress__bar c-progress__bar--info" style="width:20%;"></div>
</div><br>
<div class="c-progress u-large">
  <div class="c-progress__bar c-progress__bar--warning" style="width:25%;"></div>
</div><br>
<div class="c-progress u-xlarge">
  <div class="c-progress__bar c-progress__bar--success" style="width:45%;"></div>
</div><br>
<div class="c-progress u-super">
  <div class="c-progress__bar c-progress__bar--error" style="width:65%;"></div>
</div>`} />

            <h2 class="c-heading u-xlarge">
              Text
            </h2>

            <demo-markup language="html" code={`<div class="c-progress u-xsmall">
  <div class="c-progress__bar" style="width:5%;">5%</div>
</div><br>
<div class="c-progress u-small">
  <div class="c-progress__bar c-progress__bar--brand" style="width:15%;">15%</div>
</div><br>
<div class="c-progress u-medium">
  <div class="c-progress__bar c-progress__bar--info" style="width:20%;">20%</div>
</div><br>
<div class="c-progress u-large">
  <div class="c-progress__bar c-progress__bar--warning" style="width:25%;">25%</div>
</div><br>
<div class="c-progress u-xlarge">
  <div class="c-progress__bar c-progress__bar--success" style="width:45%;">45%</div>
</div><br>
<div class="c-progress u-super">
  <div class="c-progress__bar c-progress__bar--error" style="width:65%;">65%</div>
</div>`} />

            <h2 class="c-heading">
              Stacked
            </h2>

            <demo-markup language="html" code={`<div class="c-progress">
  <div class="c-progress__bar" style="width: 15%;">15%</div>
  <div class="c-progress__bar c-progress__bar--brand" style="width: 25%;">25%</div>
  <div class="c-progress__bar c-progress__bar--info" style="width: 10%;">10%</div>
  <div class="c-progress__bar c-progress__bar--warning" style="width: 12%;">12%</div>
  <div class="c-progress__bar c-progress__bar--success" style="width: 18%;">18%</div>
  <div class="c-progress__bar c-progress__bar--error" style="width: 6%;">6%</div>
</div>`} />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <demo-markup language="html" code={`<blaze-progress size="xsmall" percentage="10" rounded>10%</blaze-progress><br />
<blaze-progress size="small" type="brand" percentage="15">15%</blaze-progress><br />
<blaze-progress size="medium" type="info" percentage="20" rounded>20%</blaze-progress><br />
<blaze-progress size="large" type="success" percentage="25">25%</blaze-progress><br />
<blaze-progress size="xlarge" type="warning" percentage="30" rounded>30%</blaze-progress><br />
<blaze-progress size="super" type="error" percentage="35">35%</blaze-progress>`} />

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
                  <td class="c-table__cell">type</td>
                  <td class="c-table__cell">The color of the bar</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">rounded (boolean)</td>
                  <td class="c-table__cell">Toggle the rounded borders</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">percentage</td>
                  <td class="c-table__cell">The amount of "progress"</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">size</td>
                  <td class="c-table__cell">The size of the bar</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}