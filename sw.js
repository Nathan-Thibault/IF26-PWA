const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/<votre-depot>/",
      "/<votre-depot>/index.html",
      "/<votre-depot>/styles/base.css",
      "/<votre-depot>/styles/to-do-styles.css",
      "/<votre-depot>/simple-to-do.js"
    ]),
  );
});
