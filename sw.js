self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('whatchat').then((cache) => cache.addAll([
      '/whatchat/',
      '/whatchat/index.html',
      '/whatchat/index.js',
      '/whatchat/styles.css',
      '/whatchat/images/WhatsApp.png',
      '/whatchat/images/logohead.png',
      '/whatchat/icon/app-icon_192x192.png',
      '/whatchat/icon/fox-icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
