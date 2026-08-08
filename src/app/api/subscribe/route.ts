import { NextRequest, NextResponse } from "next/server";
import {
  countPushSubscriptions,
  ensurePushSheet,
  upsertPushSubscription,
} from "@/lib/pushSubscriptions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ message: "Unsupported request type." }, { status: 415 });
    }

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
        ? payload.userAgent.slice(0, 200)
        : "";

    if (!endpoint.startsWith("https://") || !p256dh || !auth) {
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

export async function GET() {
  try {
    await ensurePushSheet();
    const count = await countPushSubscriptions();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Push subscription count failed", error);
    return NextResponse.json({ message: "Unavailable." }, { status: 500 });
  }
}
