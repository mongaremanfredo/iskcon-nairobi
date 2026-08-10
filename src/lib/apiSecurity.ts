import { timingSafeEqual } from "crypto";
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
const maxBuckets = 5_000;

class PublicApiError extends Error {
  constructor(
    public readonly status: number,
    message: string
  ) {
    super(message);
  }
}

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

  if (buckets.size > maxBuckets) {
    for (const [bucketKey, value] of buckets) {
      if (value.resetAt <= now) buckets.delete(bucketKey);
      if (buckets.size <= maxBuckets) break;
    }
  }

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

export async function readLimitedJson<T>(request: NextRequest, maxBytes: number): Promise<T> {
  if (!request.body) {
    throw new PublicApiError(400, "Request body is required.");
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > maxBytes) {
      throw new PublicApiError(413, "Request is too large.");
    }

    chunks.push(value);
  }

  const body = new TextDecoder("utf-8", { fatal: false }).decode(concatChunks(chunks, totalBytes));

  try {
    return JSON.parse(body) as T;
  } catch {
    throw new PublicApiError(400, "Invalid JSON payload.");
  }
}

export function publicApiErrorResponse(error: unknown) {
  if (error instanceof PublicApiError) {
    return NextResponse.json({ message: error.message }, { status: error.status });
  }

  return null;
}

function concatChunks(chunks: Uint8Array[], totalBytes: number) {
  const output = new Uint8Array(totalBytes);
  let offset = 0;

  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return output;
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

  if (!constantTimeEquals(suppliedToken, token)) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  return null;
}

function constantTimeEquals(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) return false;

  return timingSafeEqual(leftBuffer, rightBuffer);
}
