const CACHE_NAME = 'acalanto-v1';
const assets = [
  './',
  './index.html',
  './imagens/fundo08.png',
  './imagens/logo_acalantobebe1.png'
];

// Instalação e Cache básico
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde mesmo offline (se os arquivos estiverem no cache)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});