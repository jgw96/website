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
    "revision": "5998681c14029eebb918fd7c533be3f5"
  },
  {
    "url": "build/app.registry.json",
    "revision": "d65e9e8e9d1b29d82f3d5009ea543bea"
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
    "url": "build/app/jpg7wqsn.css",
    "revision": "bdbbdb3b820b2c8d7128ff060307627e"
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
    "revision": "f035c62bd483f34c06b84b755dd95aec"
  },
  {
    "url": "components/cards/index.html",
    "revision": "67aa3fec907a1dfdd3487bafaa5db351"
  },
  {
    "url": "components/overlays/index.html",
    "revision": "ceff6e8c10598d515401ff071069e94d"
  },
  {
    "url": "generics/global/index.html",
    "revision": "7dc98404913a0a6116edf420dafd12c9"
  },
  {
    "url": "getting-started/about/index.html",
    "revision": "52bbe2572e11dcd89e391cf27a5bb482"
  },
  {
    "url": "getting-started/custombuild/index.html",
    "revision": "9290dcdf533cfd95138e2f4af825194f"
  },
  {
    "url": "getting-started/install/index.html",
    "revision": "1a3e8a43f32ddd22c146946e995f761b"
  },
  {
    "url": "index.html",
    "revision": "5c666b1340ebb8071e068868fe39ea06"
  },
  {
    "url": "manifest.json",
    "revision": "9c6408d38d4c719e4ad2bff3241d4b89"
  },
  {
    "url": "objects/containers/index.html",
    "revision": "a6c0e8c02a00424aace51e3357b19c27"
  },
  {
    "url": "objects/drawers/index.html",
    "revision": "3fd4592ecd98432cc751880597f4fa45"
  },
  {
    "url": "objects/grid/index.html",
    "revision": "c405d671798aacb90b0e1c0cc31c7a7e"
  },
  {
    "url": "objects/images/index.html",
    "revision": "2f6363ab6a3d51f338ae4fbdab850dcd"
  },
  {
    "url": "objects/medias/index.html",
    "revision": "e3663131ea0367529f304dcb061c0c1e"
  },
  {
    "url": "objects/modals/index.html",
    "revision": "7cc1c3260b44fd397856c81e344ef3f6"
  },
  {
    "url": "objects/panels/index.html",
    "revision": "bf44058895dd23f717dc288a2f41a427"
  },
  {
    "url": "utils/alignment/index.html",
    "revision": "465f3701193af677b671f68e32f81bef"
  },
  {
    "url": "utils/boxing/index.html",
    "revision": "561a0ab13326bbedf0be4d12dd96da66"
  },
  {
    "url": "utils/colors/index.html",
    "revision": "acb26841f32ec32393f9af7e3a1aa674"
  },
  {
    "url": "utils/elevation/index.html",
    "revision": "52c102ba6dc31ae55b0aabb8afbd170d"
  },
  {
    "url": "utils/sizes/index.html",
    "revision": "1b351b7d1b0ad7e8aca3e185ad5e09f1"
  },
  {
    "url": "utils/visibility/index.html",
    "revision": "10d5f305c4b76136d5125f88a7be82ae"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
