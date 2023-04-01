var cacheName = 'v1.0';

var cacheAssets = [
      '/index.html',
      '/index.js',
      '/styles.css',
      '/images/WhatsApp.png',
      '/images/logohead.png',
      '/images/icons-192.png',
      '/images/icons-512.png',
      '/fox-icon.png',
]

// installation
self.addEventListener('install', e => {
      console.log('Service Worker: Installed');
      e.waitUntil(
            caches
              .open(cacheName)
              .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
              })
              .then(() => self.skipWaiting())
          );

});    

// activation
self.addEventListener('activate', e => {
    console.log('Service Worker: Installed');
}); 
