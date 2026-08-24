/* ISKCON Nairobi PWA service worker
 *
 * Cache policy:
 * - Page navigations: network first, then the last saved response, then /offline.
 * - Versioned Next.js code, CSS, and fonts: cache first.
 * - Same-origin images: stale while revalidate.
 * - API routes, form submissions, analytics, and non-GET requests: network only.
 *
 * Bump CACHE_VERSION whenever this policy or the precache list changes.
 * See docs/PWA_GUIDE.md before editing this file.
 */
const CACHE_VERSION = "iskcon-nairobi-v4";
const CACHE_PREFIX = "iskcon-nairobi-";
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const OFFLINE_URL = "/offline";
const DEFAULT_NOTIFICATION_URL = "/";
const NAVIGATION_TIMEOUT_MS = 5000;
const MAX_PAGE_ENTRIES = 40;
const MAX_IMAGE_ENTRIES = 90;

const PRECACHE_URLS = [
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/favicon.ico",
  "/brand/icon-192.png",
  "/brand/icon-512.png",
  "/brand/maskable-icon-192.png",
  "/brand/maskable-icon-512.png",
  "/brand/iskcon-logo.svg",
];

const PUSH_VAPID_PUBLIC_KEY =
  "BPgPEE6PLUqf6M27TuN7hvlg1sMKrpDeM1RK5I_basFwH11J5FGcvGQ0h93Ci2Z3jk-gv3PAqWvYqKUVzmxSnTE";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

function subscriptionKeyToBase64Url(key) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(key)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function isCacheable(response) {
  if (!response || !response.ok || response.status !== 200) {
    return false;
  }

  const cacheControl = response.headers.get("cache-control") || "";
  return !/no-store|private/i.test(cacheControl);
}

async function putInCache(cacheName, request, response, maxEntries) {
  if (!isCacheable(response)) {
    return;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());

  const keys = await cache.keys();
  while (keys.length > maxEntries) {
    const oldest = keys.shift();
    if (oldest) {
      await cache.delete(oldest);
    }
  }
}

function timeoutAfter(milliseconds) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Network timeout")), milliseconds);
  });
}

async function networkFirstNavigation(event) {
  const request = event.request;

  try {
    const networkRequest = Promise.resolve(event.preloadResponse).then(
      (preloaded) => preloaded || fetch(request)
    );
    const response = await Promise.race([
      networkRequest,
      timeoutAfter(NAVIGATION_TIMEOUT_MS),
    ]);

    await putInCache(PAGE_CACHE, request, response, MAX_PAGE_ENTRIES);
    return response;
  } catch {
    const cachedPage = await caches.match(request, { ignoreSearch: false });
    if (cachedPage) {
      return cachedPage;
    }

    const offlinePage = await caches.match(OFFLINE_URL);
    if (offlinePage) {
      return offlinePage;
    }

    return new Response(
      "ISKCON Nairobi is currently offline. Please reconnect and try again.",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  await putInCache(ASSET_CACHE, request, response, 180);
  return response;
}

async function staleWhileRevalidate(event) {
  const request = event.request;
  const cached = await caches.match(request);
  const networkUpdate = fetch(request)
    .then(async (response) => {
      await putInCache(IMAGE_CACHE, request, response, MAX_IMAGE_ENTRIES);
      return response;
    })
    .catch(() => undefined);

  if (cached) {
    event.waitUntil(networkUpdate);
    return cached;
  }

  const response = await networkUpdate;
  return response || Response.error();
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(ASSET_CACHE).then((cache) =>
      Promise.all(
        PRECACHE_URLS.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => undefined)
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && !key.startsWith(CACHE_VERSION))
            .map((key) => caches.delete(key))
        )
      ),
      self.registration.navigationPreload
        ? self.registration.navigationPreload.enable()
        : Promise.resolve(),
    ]).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET" || request.headers.has("range")) {
    return;
  }

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin || requestUrl.pathname.startsWith("/api/")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(event));
    return;
  }

  if (
    requestUrl.pathname.startsWith("/_next/static/") ||
    ["script", "style", "font", "worker"].includes(request.destination)
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(staleWhileRevalidate(event));
  }
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
      data: { url: payload.url || DEFAULT_NOTIFICATION_URL },
    })
  );
});

self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    self.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUSH_VAPID_PUBLIC_KEY),
      })
      .then((subscription) =>
        fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subscription: {
              endpoint: subscription.endpoint,
              keys: {
                p256dh: subscriptionKeyToBase64Url(subscription.getKey("p256dh")),
                auth: subscriptionKeyToBase64Url(subscription.getKey("auth")),
              },
            },
          }),
        })
      )
      .catch(() => undefined)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const requestedTarget = new URL(
    event.notification.data?.url || DEFAULT_NOTIFICATION_URL,
    self.location.origin
  );
  const targetUrl =
    requestedTarget.origin === self.location.origin
      ? requestedTarget.href
      : new URL(DEFAULT_NOTIFICATION_URL, self.location.origin).href;

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (clients) => {
      for (const client of clients) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }

      const existingClient = clients.find(
        (client) => "navigate" in client && "focus" in client
      );
      if (existingClient) {
        await existingClient.navigate(targetUrl);
        return existingClient.focus();
      }

      return self.clients.openWindow ? self.clients.openWindow(targetUrl) : undefined;
    })
  );
});
