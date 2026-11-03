import { cn } from "@/lib/utils";

interface FormMessageProps {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  /** The background the form sits on. */
  tone?: "light" | "dark";
  className?: string;
}

/** The result of a form submission. Errors are announced immediately to screen readers. */
export default function FormMessage({ status, message, tone = "light", className }: FormMessageProps) {
  if (!message) return null;
  const isError = status === "error";
  const colour = tone === "light"
    ? isError ? "text-primary-dark" : "text-emerald-700"
    : isError ? "text-gold-light" : "text-emerald-300";

  return (
    <p className={cn("font-body text-sm leading-relaxed", colour, className)} role={isError ? "alert" : "status"}>
      {message}
    </p>
  );
}
