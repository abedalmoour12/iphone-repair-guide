const CACHE_NAME = 'iphone-fix-v1';
const ASSETS = [
  './',
  './index.html',
  './palestine.png',
  './data_iphone11.js',
  './data_iphone12.js',
  './data_iphone13.js',
  './data_iphone14.js',
  './data_iphone15.js',
  './data_iphone16.js',
  './data_iphone17.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
