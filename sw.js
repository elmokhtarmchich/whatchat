self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('whatchat').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/index.js',
      '/styles.css',
      '/images/WhatsApp.png',
      '/images/logohead.png',
      '/icon/app-icon_192x192.png',
      '/icon/fox-icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
