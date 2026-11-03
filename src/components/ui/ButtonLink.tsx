import type { ComponentProps } from "react";
import Link from "next/link";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant: "primary" | "outline" | "ghost";
};

/** An internal link styled with the shared button classes from globals.css. */
export default function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link {...props} className={className ? `btn-${variant} ${className}` : `btn-${variant}`} />;
}
