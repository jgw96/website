import { Component, State } from "@stencil/core"
import { allRoutes } from '../../routes/routes';
import Route from '../../routes/Route';

@Component({
  tag: 'site-nav',
  styleUrl: 'site-nav.scss'
})
export class SiteNav {
  @State() isOpen: boolean;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false
  }

  navSection({ title, routes }: { title: string, routes: Array<Route> }) {
    const navLinks = (routes: Array<Route>) => {
      return routes.map(route => (
        <li class="c-list__item u-letter-box u-letter-box--xsmall">
          <stencil-route-link url={route.url} onClick={() => this.closeMenu()}>
            {route.props.name}
          </stencil-route-link>
        </li>
      ))
    };

    return ([
      <h3 class="c-heading u-large">
        {title}
      </h3>,
      <ul class="c-list c-list--unstyled">
        {navLinks(routes)}
      </ul>
    ]);
  }

  render() {
    const drawerVisibleClass = this.isOpen ? 'o-drawer--visible' : '';
    return (
      <div class="c-text">
        <a class="o-page-header__button o-page-header__button--left c-link c-link--brand" onClick={() => this.openMenu()}>
          <i class="fa fa-bars u-pillar-box--xsmall"/> Menu
        </a>

        {
          this.isOpen &&
          <div class="c-overlay c-overlay--dismissable a-overlay" onClick={() => this.closeMenu()}/>
        }

        <div class={`o-drawer o-drawer--left a-drawer ${drawerVisibleClass}`}>
          <div class="c-card">
            <div class="c-card__body">
              <nav>
                <ul class="c-list c-list--unstyled">
                  <li class="c-list__item u-letter-box u-letter-box--xsmall">
                    <a class="c-link" href="https://raw.githubusercontent.com/BlazeCSS/blaze/master/dist/blaze.min.css"
                       download="">
                      <i class="fa fa-download c-button__icon-left"/>
                      Download
                    </a>
                  </li>
                  <li class="c-list__item u-letter-box u-letter-box--xsmall">
                    <a class="c-link" href="https://github.com/BlazeCSS/blaze">
                      <i class="fa fa-code c-button__icon-left"/>
                      Source
                    </a>
                  </li>
                </ul>
                {allRoutes.map(area => this.navSection(area))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}