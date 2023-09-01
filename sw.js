

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([
      '/index.html',
    ])),
  );
});



