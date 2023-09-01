

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([
      '/index.html',
      '/index.js',
      '/style.css',
      '/topnav.css',
      '/intlTelInput.css',
      '/manifest.webmanifest',
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



