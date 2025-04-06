const CACHE_NAME = 'ninjava-game-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/js/main.js',
  '/images/bg01.png',
  '/images/bg02.png',
  '/images/bg03.png',
  '/images/bg04.png',
  '/images/bg05.png',
  // add other assets as needed (icons, additional images, etc.)
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the response from the cache
        if (response) {
          return response;
        }
        // Not in cache - return the result from the network and cache it for later.
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  // Remove old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
