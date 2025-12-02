// Basic service worker - caching shell assets
self.addEventListener('install', event => {
  event.waitUntil(caches.open('neuroedge-v1').then(cache => {
    return cache.addAll(['/','/manifest.json']);
  }));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
