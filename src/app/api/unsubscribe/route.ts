import { NextRequest, NextResponse } from "next/server";
import { validatePublicJsonRequest } from "@/lib/apiSecurity";
import {
  ensurePushSheet,
  removePushSubscription,
} from "@/lib/pushSubscriptions";

export const runtime = "nodejs";

function isValidPushEndpoint(endpoint: string) {
  if (endpoint.length > 500) return false;
  try {
    const url = new URL(endpoint);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, {
      key: "push-unsubscribe",
      limit: 10,
      windowMs: 10 * 60 * 1000,
      maxBytes: 4 * 1024,
    });
    if (blocked) return blocked;

    const payload = (await request.json()) as { endpoint?: unknown };
    const endpoint = typeof payload.endpoint === "string" ? payload.endpoint : "";

    if (!isValidPushEndpoint(endpoint)) {
      return NextResponse.json({ message: "Invalid endpoint." }, { status: 400 });
    }

    await ensurePushSheet();
    await removePushSubscription(endpoint);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Push unsubscribe failed", error);
    return NextResponse.json(
      { message: "Could not remove the push subscription." },
      { status: 500 }
    );
  }
}
