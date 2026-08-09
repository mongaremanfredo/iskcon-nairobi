import { NextRequest, NextResponse } from "next/server";

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return (forwardedFor?.split(",")[0] || realIp || "unknown").trim();
}

export function rejectNonJson(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ message: "Unsupported request type." }, { status: 415 });
  }
  return null;
}

export function rejectLargeBody(request: NextRequest, maxBytes: number) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  }
  return null;
}

export function rejectCrossOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return null;

  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "https";

  if (!host) {
    return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  }

  try {
    const originUrl = new URL(origin);
    const expectedProtocol = request.headers.get("x-forwarded-proto");
    const protocolMatches = expectedProtocol ? originUrl.protocol === `${protocol}:` : true;

    if (originUrl.host !== host || !protocolMatches) {
      return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  }

  return null;
}

export function rateLimit(request: NextRequest, key: string, options: RateLimitOptions) {
  const now = Date.now();
  const clientKey = `${key}:${getClientIp(request)}`;
  const bucket = buckets.get(clientKey);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(clientKey, { count: 1, resetAt: now + options.windowMs });
    return null;
  }

  if (bucket.count >= options.limit) {
    const retryAfterSeconds = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    return NextResponse.json(
      { message: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSeconds),
        },
      }
    );
  }

  bucket.count += 1;
  return null;
}

export function validatePublicJsonRequest(
  request: NextRequest,
  options: RateLimitOptions & { key: string; maxBytes: number }
) {
  return (
    rejectNonJson(request) ||
    rejectLargeBody(request, options.maxBytes) ||
    rejectCrossOrigin(request) ||
    rateLimit(request, options.key, options)
  );
}

export function requireBearerToken(request: NextRequest, token: string | undefined) {
  if (!token) {
    return NextResponse.json({ message: "Not found." }, { status: 404 });
  }

  const authorization = request.headers.get("authorization") || "";
  const suppliedToken = authorization.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length).trim()
    : "";

  if (suppliedToken !== token) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  return null;
}
