import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'demo-markup'
})
export class DemoMarkup {
  @Prop() classes: string;
  @Prop() code: string;
  @State() markup: string;

  componentDidLoad() {
    this.markup = this.code;
  }

  updateDemo(e) {
    this.markup = e.target.innerText;
  }

  render() {
    return ([
      <div class={`demo-markup-source u-letter-box--small ${this.classes}`} innerHTML={this.markup} />,
      <div class="u-letter-box--small">
        <pre class="c-pre">
          <code class="c-code c-code--multiline" contenteditable onBlur={(e) => this.updateDemo(e)}>
            {this.markup}
          </code>
        </pre>
      </div>
    ]);
  }
}
