const CACHE_NAME = "my-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log("Deleting cache:", cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", (event) => {
  const response = caches.match(event.request).then((cachedResponse) => {
    if (cachedResponse) {
      return cachedResponse;
    }

    return fetch(event.request).then((networkResponse) => {
      const response = networkResponse.clone();
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response);

        return response;
      });
    });
  });

  event.respondWith(response);
});
