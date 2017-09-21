exports.config = {
  bundles: [
    {
      components: [
        'blaze-site',
        'demo-markup',
        'carbon-ad',
        'landing-page',
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
        'objects-modals'
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
