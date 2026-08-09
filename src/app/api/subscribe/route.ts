import { NextRequest, NextResponse } from "next/server";
import {
  rateLimit,
  rejectCrossOrigin,
  requireBearerToken,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText } from "@/lib/security";
import {
  countPushSubscriptions,
  ensurePushSheet,
  upsertPushSubscription,
} from "@/lib/pushSubscriptions";

export const runtime = "nodejs";

const allowedPushHosts = [
  "fcm.googleapis.com",
  "updates.push.services.mozilla.com",
  "web.push.apple.com",
  "wns2-",
  "notify.windows.com",
];

function isValidPushEndpoint(endpoint: string) {
  if (endpoint.length > 500) return false;

  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:") return false;
    return allowedPushHosts.some((host) =>
      host.endsWith("-")
        ? url.hostname.startsWith(host)
        : url.hostname === host || url.hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
}

function isValidSubscriptionKey(value: string, maxLength: number) {
  return value.length > 0 && value.length <= maxLength && /^[A-Za-z0-9_-]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, {
      key: "push-subscribe",
      limit: 10,
      windowMs: 10 * 60 * 1000,
      maxBytes: 8 * 1024,
    });
    if (blocked) return blocked;

    const payload = (await request.json()) as {
      subscription?: {
        endpoint?: unknown;
        keys?: { p256dh?: unknown; auth?: unknown };
      };
      userAgent?: unknown;
    };

    const endpoint =
      typeof payload.subscription?.endpoint === "string"
        ? payload.subscription.endpoint
        : "";
    const p256dh =
      typeof payload.subscription?.keys?.p256dh === "string"
        ? payload.subscription.keys.p256dh
        : "";
    const auth =
      typeof payload.subscription?.keys?.auth === "string"
        ? payload.subscription.keys.auth
        : "";
    const userAgent =
      typeof payload.userAgent === "string"
        ? asPlainText(payload.userAgent, 200)
        : "";

    if (
      !isValidPushEndpoint(endpoint) ||
      !isValidSubscriptionKey(p256dh, 120) ||
      !isValidSubscriptionKey(auth, 64)
    ) {
      return NextResponse.json({ message: "Invalid push subscription." }, { status: 400 });
    }

    await ensurePushSheet();
    await upsertPushSubscription({ endpoint, p256dh, auth, userAgent });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Push subscription failed", error);
    return NextResponse.json(
      { message: "Could not save the push subscription. Please try again shortly." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const blocked =
      rejectCrossOrigin(request) ||
      rateLimit(request, "push-count", { limit: 20, windowMs: 10 * 60 * 1000 }) ||
      requireBearerToken(request, process.env.PUSH_SUBSCRIBER_COUNT_TOKEN);
    if (blocked) return blocked;

    await ensurePushSheet();
    const count = await countPushSubscriptions();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Push subscription count failed", error);
    return NextResponse.json({ message: "Unavailable." }, { status: 500 });
  }
}
