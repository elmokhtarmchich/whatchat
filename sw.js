

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([

      './index.html',
      './styles.css',
      './intlTelInput.css',
      './topnav.css',
      './manifest.webmanifest',
      './favicon/favicon.ico',
      './favicon/favicon.svg',
      './favicon/apple-touch-icon.png',
      './favicon/favicon-96x96.png',
      './favicon/web-app-manifest-192x192.png',
      './favicon/web-app-manifest-512x512.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

