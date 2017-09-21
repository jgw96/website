import { Component } from '@stencil/core';
import { allRoutes, genericsRoutes, gettingStartedRoutes, objectsRoutes } from '../routes/routes';
import Route from '../routes/Route';

@Component({
  tag: 'blaze-site',
  styleUrl: 'blaze-site.scss'
})
export class BlazeSite {
  navSection(routes: Array<Route>) {
    return routes.map(route => (
      <li class="c-list__item">
        <stencil-route-link url={route.url}>
          {route.props.name}
        </stencil-route-link>
      </li>
    ))
  }

  render() {
    return (
      <div
        class="c-text o-container o-container--xlarge o-grid o-grid--wrap o-grid--top o-grid--small-full o-grid--medium-full">
        <nav class="o-grid__cell o-grid__cell--width-20">
          <stencil-route-link url="/">
            Intro
          </stencil-route-link>
          <h3 class="c-heading u-medium js-nav-group">Getting Started</h3>
          <ul class="c-list c-list--unstyled">
            {this.navSection(gettingStartedRoutes)}
          </ul>
          <h3 class="c-heading u-medium js-nav-group">Generics</h3>
          <ul class="c-list c-list--unstyled">
            {this.navSection(genericsRoutes)}
          </ul>
          <h3 class="c-heading u-medium js-nav-group">Objects</h3>
          <ul class="c-list c-list--unstyled">
            {this.navSection(objectsRoutes)}
          </ul>
        </nav>
        <main class="o-grid__cell o-grid__cell--width-80">
          <stencil-router id="blaze-content">
            <stencil-route url="/" component="landing-page" exact={true}/>

            {allRoutes.map(route => (
              <stencil-route url={route.url}
                             component={route.component}
                             componentProps={route.props}
              />
            ))}

          </stencil-router>
        </main>
      </div>
    );
  }
}
