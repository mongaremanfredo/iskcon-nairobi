"use client";

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "";

export const PUSH_FEATURE_KEYS = [
  "iskcon-calendar-notifications",
  "iskcon-noticeboard-notifications",
];

export function urlBase64ToUint8Array(
  base64String: string
): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(new ArrayBuffer(rawData.length));

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

function arrayBufferToBase64Url(buffer: ArrayBuffer | null): string {
  if (!buffer) {
    return "";
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window
    .btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function subscriptionToJson(subscription: PushSubscription) {
  return {
    endpoint: subscription.endpoint,
    keys: {
      p256dh: arrayBufferToBase64Url(subscription.getKey("p256dh")),
      auth: arrayBufferToBase64Url(subscription.getKey("auth")),
    },
  };
}

async function currentSubscription(
  registration: ServiceWorkerRegistration
): Promise<PushSubscription | null> {
  try {
    return await registration.pushManager.getSubscription();
  } catch {
    return null;
  }
}

async function subscribeToPush(
  registration: ServiceWorkerRegistration
): Promise<PushSubscription | null> {
  try {
    if (!VAPID_PUBLIC_KEY) {
      return null;
    }

    return await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });
  } catch {
    return null;
  }
}

async function registerWithServer(subscription: PushSubscription): Promise<boolean> {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subscription: subscriptionToJson(subscription),
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}

export async function enablePushOnDevice(
  registration: ServiceWorkerRegistration
): Promise<PushSubscription | null> {
  const existing = await currentSubscription(registration);

  if (existing) {
    await registerWithServer(existing);
    return existing;
  }

  const created = await subscribeToPush(registration);

  if (created) {
    await registerWithServer(created);
    return created;
  }

  return null;
}

export async function disablePushOnDevice(
  registration: ServiceWorkerRegistration | null
): Promise<void> {
  if (!registration) {
    return;
  }

  const subscription = await currentSubscription(registration);

  if (!subscription) {
    return;
  }

  try {
    await subscription.unsubscribe();
  } catch {
    // ignore
  }

  try {
    await fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: subscription.endpoint }),
    });
  } catch {
    // ignore
  }
}

export function keepDevicePushSubscribed(disabledKey: string): boolean {
  return PUSH_FEATURE_KEYS.some(
    (key) => key !== disabledKey && window.localStorage.getItem(key) === "enabled"
  );
}
