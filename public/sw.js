self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('neuroedge-v1').then(cache => cache.addAll(['/','/index.html'])));
  self.skipWaiting();
});
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
