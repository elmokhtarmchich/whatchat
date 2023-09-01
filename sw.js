

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([

      './index.html',
      './style.css',
      './intlTelInput.css',
      './topnav.css',
      './icon/app-icon_192x192.png',
      './icon/bell.png',
      './icon/contact.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

