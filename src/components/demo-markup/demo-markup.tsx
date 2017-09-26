import { Component, Element, Prop, State } from '@stencil/core';

declare const hljs: any;

@Component({
  tag: 'demo-markup'
})
export class DemoMarkup {
  @Element() el: HTMLElement;
  @Prop() classes: string;
  @Prop() code: string;
  @Prop() language: string = '';
  @State() markup: string;

  componentDidLoad() {
    this.markup = this.code;
  }

  updateDemo(e) {
    this.markup = e.target.innerText;
  }

  componentDidUpdate() {
    const codeEl = this.el.querySelector('code');
    hljs.highlightBlock(codeEl);
  }

  render() {
    return ([
      <div class={`demo-markup-source u-letter-box--small ${this.classes}`} innerHTML={this.markup}/>,
      <div class="u-letter-box--small">
        <pre class="c-pre">
          <code class={`c-code c-code--multiline ${this.language}`} contenteditable onBlur={(e) => this.updateDemo(e)}>
            {this.markup}
          </code>
        </pre>
      </div>
    ]);
  }
}
