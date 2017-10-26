exports.config = {
  bundles: [
    {
      components: [
        'blaze-site',
        'site-header',
        'site-nav',
        'github-corner',
        'carbon-ad',
        'home-page'
      ]
    },
    {
      components: ['page-template', 'demo-markup']
    },
    {
      components: ['install-page']
    },
    {
      components: [
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
        'components-pagination',
        'components-progress',
        'components-ranges',
        'components-tables',
        'components-tabs',
        'components-toggles',
        'components-tooltips',
        'components-trees',
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
    { name: '@stencil/router' },
    { name: 'st-img' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
