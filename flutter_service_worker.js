'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "17fc299cb9b8fa9f894a850dfc3452f7",
"assets/assets/fonts/open_sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/open_sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/logo.png": "b272391b74810a9c9ab39a89b26a5fe5",
"assets/assets/svg/img_home.svg": "e019e3590f1171f7d84ccd4f035d63b4",
"assets/FontManifest.json": "d6be7a589c295aa6f4f061f50f8ce0eb",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c44eeb271c607d94d3881a418a2946fd",
"assets/packages/auth_buttons/images/default/apple.svg": "55dba81be7ba24dd88dbf9cc81de95e8",
"assets/packages/auth_buttons/images/default/email.svg": "3082146f3f124a005b10db6fe3109fe7",
"assets/packages/auth_buttons/images/default/facebook.svg": "042d64dc3864e72dee8ed5a25b514b11",
"assets/packages/auth_buttons/images/default/github_black.svg": "8dd7ed5ef65c02f30b4121eee588af6a",
"assets/packages/auth_buttons/images/default/google.svg": "1b57b430c55cb377ac0a88930bcdbd20",
"assets/packages/auth_buttons/images/default/huawei.svg": "82181eb0cd9622dfd588444a4dfe42a5",
"assets/packages/auth_buttons/images/default/microsoft.svg": "4f6ca3fa4b69eb5fca87e32ff32a044b",
"assets/packages/auth_buttons/images/default/twitter.svg": "4250a2b8958bcbef1a0fdb25d7fcce7b",
"assets/packages/auth_buttons/images/outlined/apple.svg": "db47e542919fcaf7d34748536b1deb49",
"assets/packages/auth_buttons/images/outlined/email.svg": "baff162b99d4cb10734919644984b8c7",
"assets/packages/auth_buttons/images/outlined/facebook.svg": "f251b931be2bae01fb489fe3a673ebb3",
"assets/packages/auth_buttons/images/outlined/github.svg": "7f95e5f428d5e503704489ae9059d680",
"assets/packages/auth_buttons/images/outlined/google.svg": "db08beb87c3bf1cffb0eab33ba45e21d",
"assets/packages/auth_buttons/images/outlined/huawei.svg": "9808b2adfd6d50759ac212f2524d89aa",
"assets/packages/auth_buttons/images/outlined/microsoft.svg": "da1f5b1904d6db32f0a328843ef6c194",
"assets/packages/auth_buttons/images/outlined/twitter.svg": "17f1f53b9a9a48f7eb9bef23297adc13",
"assets/packages/auth_buttons/images/secondary/apple.svg": "ada971dac266ff0002cbe1242969fac4",
"assets/packages/auth_buttons/images/secondary/email.svg": "9a8b80e244ab3faef8f215ec9042d826",
"assets/packages/auth_buttons/images/secondary/facebook.svg": "d716044a24525120c68a8aecd0f3ad20",
"assets/packages/auth_buttons/images/secondary/github.svg": "aa9249981ef0010785ac08f5ad311fd9",
"assets/packages/auth_buttons/images/secondary/google.svg": "3d9f5981ce3d70492c4f2669eda64ce8",
"assets/packages/auth_buttons/images/secondary/huawei.svg": "873b380209f2ece370272067b97cc9a9",
"assets/packages/auth_buttons/images/secondary/microsoft.svg": "363865e791ab614f76714d47f31cfe5b",
"assets/packages/auth_buttons/images/secondary/twitter.svg": "7e2e9892b0a7f923f55720429f42f4f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "99f3fe182bd28bf52ba50bbd3149579a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb67228139b226b18678c76a5e393293",
"/": "cb67228139b226b18678c76a5e393293",
"main.dart.js": "a1aa01c26ef30732726894b7a61375fd",
"manifest.json": "5aedfeba0129f9aab9db32ea6ee7d3a5",
"version.json": "ff5c6728fb72d5c1f385b9108d74a848"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
