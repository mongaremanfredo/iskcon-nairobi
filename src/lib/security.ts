export function safeJsonLd(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function asPlainText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function asSheetText(value: string) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

export function quoteSheetName(title: string) {
  return `'${title.replace(/'/g, "''")}'!A:Z`;
}
