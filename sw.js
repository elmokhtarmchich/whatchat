

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([
      './',
      'index.html',
      'style.css',
      'intlTelInput.css',
      'topnav.css',
      'icon/app-icon_192x192.png',
      'icon/bell.png',
      'icon/contact.png',
    ])),
  );
});

