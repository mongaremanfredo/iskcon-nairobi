import { NextRequest, NextResponse } from "next/server";
import {
  ensurePushSheet,
  removePushSubscription,
} from "@/lib/pushSubscriptions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ message: "Unsupported request type." }, { status: 415 });
    }

    const payload = (await request.json()) as { endpoint?: unknown };
    const endpoint = typeof payload.endpoint === "string" ? payload.endpoint : "";

    if (!endpoint.startsWith("https://")) {
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
