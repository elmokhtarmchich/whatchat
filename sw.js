self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('watsap-store').then((cache) => cache.addAll([
      '/index.html',
      '/index.js',
      '/style.css',
      '/topnav.css',
      '/intlTelInput.css',
      '/manifest.webmanifest',
      '/sw.js',
      '/script.js',
      './icon/app.png',
    './icon/bell.png',
    './icon/contact.png',
    './icon/flags.png',
    './icon/flags@2x.png',
    './icon/home.png',
    './icon/app-icon_192x192.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

