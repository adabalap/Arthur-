self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('arthur-store').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/images/arthur_base.png',
        '/images/shirt_red.png',
        '/images/shirt_blue.png',
        '/images/jeans.png',
        '/images/jacket.png',
        '/images/icon-192.png',
        '/images/icon-512.png'
      ])
    )
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
