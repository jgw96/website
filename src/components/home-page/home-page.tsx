import { Component } from '@stencil/core';

@Component({
  tag: 'home-page'
})
export class LandingPage {
  constructor() {
    document.title = 'Blaze CSS - Open Source Modular CSS Toolkit';
  }

  render() {
    return (
      <h1 class="c-heading u-super">
        Hello world
      </h1>
    );
  }
}