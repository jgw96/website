importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "618c38bd831060dea292b3b96df6c2a3"
  },
  {
    "url": "assets/icon/favicon.png",
    "revision": "618c38bd831060dea292b3b96df6c2a3"
  },
  {
    "url": "assets/img/blaze.png",
    "revision": "ccd4a558d99579a1627a7aca005bc7ea"
  },
  {
    "url": "build/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app.js",
    "revision": "848265db6b5ba53b92d60d19d221925b"
  },
  {
    "url": "build/app.registry.json",
    "revision": "20b27ae409e3de2e472c5886d8bd04cc"
  },
  {
    "url": "build/app/5dzeojyf.css",
    "revision": "3802816c0a4415d3636235f4804ee43a"
  },
  {
    "url": "build/app/6tyoiqua.js",
    "revision": "0084e2ee720e0554f61e069b70db8b6d"
  },
  {
    "url": "build/app/app.bgcivcw4.pf.js",
    "revision": "fec8c12f55504dd7007647ce794dac24"
  },
  {
    "url": "build/app/app.kjwrxkl0.js",
    "revision": "e9e750434ec382bb778011d62380953f"
  },
  {
    "url": "build/app/au64xn52.js",
    "revision": "3de81a3f5d8fbfcc3f8afa7c736d1f0e"
  },
  {
    "url": "build/app/gruw0dim.js",
    "revision": "ef671870ce35c1fad76b5fd407ea1dab"
  },
  {
    "url": "build/app/kzngcu9x.js",
    "revision": "b461f64a72b4975ddd7147349abd4534"
  },
  {
    "url": "build/app/r7fefcg2.css",
    "revision": "e6f1b0ff0a741c52c174695d8488192b"
  },
  {
    "url": "components/buttons/index.html",
    "revision": "e10e959a605269d3ca24b292270dfc0f"
  },
  {
    "url": "components/cards/index.html",
    "revision": "5db8f56c98a01f2f596fd86e8bd8a700"
  },
  {
    "url": "components/overlays/index.html",
    "revision": "42f956941312a542539205baa983664e"
  },
  {
    "url": "generics/global/index.html",
    "revision": "a039aefc2778e61d6ffee85f0c046d38"
  },
  {
    "url": "getting-started/about/index.html",
    "revision": "88103abbc390b77a19eba14ef0e1dbb6"
  },
  {
    "url": "getting-started/custombuild/index.html",
    "revision": "c25597dfbf093590013604760f47bd84"
  },
  {
    "url": "getting-started/install/index.html",
    "revision": "724b233b55d53dcc1c08fe6fea1b41e6"
  },
  {
    "url": "index.html",
    "revision": "e519d783b03775fe67a41c089b2be7ee"
  },
  {
    "url": "manifest.json",
    "revision": "9c6408d38d4c719e4ad2bff3241d4b89"
  },
  {
    "url": "objects/containers/index.html",
    "revision": "2e642028fe08ae574d7f10851ba7fe0f"
  },
  {
    "url": "objects/drawers/index.html",
    "revision": "59c5b45ff24cc3c4dde4bc02a36a4bed"
  },
  {
    "url": "objects/grid/index.html",
    "revision": "1b08cdca1937bb075eb600790505fbd8"
  },
  {
    "url": "objects/images/index.html",
    "revision": "3f546d469e8b061872fc1adbac346a62"
  },
  {
    "url": "objects/medias/index.html",
    "revision": "45813e367cfdf4514cddba857a2c73be"
  },
  {
    "url": "objects/modals/index.html",
    "revision": "c835c60ddc931323a2e596833552681e"
  },
  {
    "url": "objects/panels/index.html",
    "revision": "c80d23f7f7b88dfa534d0c239dcf655e"
  },
  {
    "url": "utils/alignment/index.html",
    "revision": "c932a1bb4f69dccbbeee9ec5f3d95ec7"
  },
  {
    "url": "utils/boxing/index.html",
    "revision": "853b27e3967686c08f38347f2b2fa367"
  },
  {
    "url": "utils/colors/index.html",
    "revision": "6844bef4a4567a5381e2d69a275a7c76"
  },
  {
    "url": "utils/elevation/index.html",
    "revision": "6d83b0ee0645676d8ce67f8ba0474f3d"
  },
  {
    "url": "utils/sizes/index.html",
    "revision": "ab6870ddce886ba755f87a0ea24a0703"
  },
  {
    "url": "utils/visibility/index.html",
    "revision": "761b4b4892abc67ddd62c8d0df1bd66a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
