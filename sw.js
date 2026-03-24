// Nombre de la caché
const CACHE_NAME = "peliculas-cache-v1";

// Archivos que queremos guardar offline
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./portada.jpg"
];

// INSTALACIÓN
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// FETCH (cuando la app pide algo)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});