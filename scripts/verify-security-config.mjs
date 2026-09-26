import { readFile } from "node:fs/promises";

const config = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

const requiredHeaders = [
  "Content-Security-Policy",
  "Strict-Transport-Security",
  "X-Content-Type-Options",
  "X-Frame-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "Cross-Origin-Opener-Policy",
  "Cross-Origin-Resource-Policy",
];

const requiredDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src-attr 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "upgrade-insecure-requests",
];

const missing = [...requiredHeaders, ...requiredDirectives].filter(
  (entry) => !config.includes(entry),
);

if (!config.includes("poweredByHeader: false")) {
  missing.push("poweredByHeader: false");
}

if (missing.length > 0) {
  console.error(`Security configuration is missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Security headers and CSP baseline verified.");
