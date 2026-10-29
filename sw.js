// Guarda la app en el aparato para que el altar funcione sin internet.
// Al publicar cambios, sube el número de VERSION para que los aparatos tomen la nueva.
const VERSION = "altar-en-casa-v1";
const APP = ["./", "./index.html", "./manifest.webmanifest", "./icono-192.png", "./icono-512.png", "./icono-mascara.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const propio = url.origin === location.origin;
  const letras = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!propio && !letras) return;
  // primero lo guardado (rápido y sin internet); por detrás se actualiza si hay conexión
  e.respondWith(caches.open(VERSION).then(async c => {
    const clave = req.mode === "navigate" ? "./index.html" : req;
    const guardado = await c.match(clave, {ignoreSearch: req.mode === "navigate"});
    const deRed = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(clave, r.clone()); return r; }).catch(() => guardado);
    return guardado || deRed;
  }));
});
