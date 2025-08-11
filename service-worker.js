self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('soundboard-cache').then(cache => {
      return cache.addAll(['epic-soundboard-v3.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
