self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('whatchat').then((cache) => cache.addAll([
      '/pwa-examples/',
      '/pwa-examples/index.html',
      '/pwa-examples/index.js',
      '/pwa-examples/styles.css',
      '/pwa-examples/images/WhatsApp.png',
      '/pwa-examples/images/logohead.png',
      '/pwa-examples/icon/app-icon_192x192.png',
      '/pwa-examples/icon/fox-icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
