exports.config = {
  bundles: [
    {
      components: [
        'blaze-site',
        'site-header',
        'site-nav',
        'page-template',
        'github-corner',
        'demo-markup',
        'carbon-ad',
        'home-page',
        'install-page',
        'about-page',
        'custom-build',
        'generics-global',
        'objects-containers',
        'objects-grid',
        'objects-panels',
        'objects-images',
        'objects-drawers',
        'objects-medias',
        'objects-modals',
        'components-accordions',
        'components-addresses',
        'components-alerts',
        'components-avatars',
        'components-badges',
        'components-bubbles',
        'components-buttons',
        'components-calendars',
        'components-cards',
        'components-headings',
        'components-inputs',
        'components-lists',
        'components-menus',
        'components-navs',
        'components-overlays',
        'utils-alignment',
        'utils-boxing',
        'utils-colors',
        'utils-elevation',
        'utils-sizes',
        'utils-visibility'
      ]
    }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
