/* ============================================================
   Service Worker – Japanese Word Practice PWA
   Caches all app files for full offline use.
   Bump CACHE_VERSION when you update any file.
   ============================================================ */

const CACHE_VERSION = 'jp-quiz-v1';

const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './data/n5_words.js',
  './data/sentences.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ── Install: pre-cache all assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_VERSION)
        .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, then network fallback ──
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache new requests dynamically (e.g. future N4 data files)
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback for navigation
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
