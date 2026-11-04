import { NextResponse } from "next/server";

export const runtime = "nodejs";

// The September 2026 intake has concluded. Keep the endpoint as an explicit
// closure response so old bookmarks and cached clients cannot create records
// for an intake that is no longer displayed on the site.
export async function POST() {
  return NextResponse.json(
    { message: "Registration for this course has closed." },
    { status: 410 }
  );
}
