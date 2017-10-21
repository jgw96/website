import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-progress'
})
export class ComponentsProgress {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <page-template name={this.name}>

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

      </page-template>
    );
  }
}