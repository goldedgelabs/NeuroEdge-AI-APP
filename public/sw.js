self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  clients.claim();
});
self.addEventListener('fetch', function(event) {
  // basic offline fallback can be added here
});
