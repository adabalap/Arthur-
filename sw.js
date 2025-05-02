self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('stylebuddy-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './styles/style.css',
        './scripts/app.js',
        './manifest.json',
        './images/base.png',
        './images/pants.png',
        './images/jacket.png',
        './images/glasses.png',
        './images/cap.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});