import { Component } from '@stencil/core';

@Component({
  tag: 'landing-page'
})
export class LandingPage {
  constructor() {
    document.title = 'Blaze CSS - Open Source Modular CSS Toolkit';
  }

  render() {
    return (
      <div>
        Landing Page
      </div>
    );
  }
}