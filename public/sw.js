const CACHE_VERSION = "iskcon-nairobi-v2";
const DEFAULT_NOTIFICATION_URL = "/";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(fetch(event.request));
});

self.addEventListener("push", (event) => {
  let payload = {
    title: "ISKCON Nairobi",
    body: "Open ISKCON Nairobi for the latest temple reminder.",
    url: DEFAULT_NOTIFICATION_URL,
  };

  if (event.data) {
    try {
      payload = { ...payload, ...event.data.json() };
    } catch {
      payload.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      tag: payload.tag || "iskcon-nairobi-reminder",
      renotify: Boolean(payload.renotify),
      icon: payload.icon || "/brand/icon-192.png",
      badge: payload.badge || "/brand/icon-192.png",
      data: {
        url: payload.url || DEFAULT_NOTIFICATION_URL,
      },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const target = new URL(
    event.notification.data?.url || DEFAULT_NOTIFICATION_URL,
    self.location.origin
  );
  const targetUrl =
    target.origin === self.location.origin ? target.href : self.location.origin;

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }

      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }

      return undefined;
    })
  );
});
