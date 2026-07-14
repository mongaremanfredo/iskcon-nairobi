import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markOnly?: boolean;
  label?: string;
};

export default function BrandLogo({
  className,
  markOnly = false,
  label = "ISKCON Nairobi",
}: BrandLogoProps) {
  if (!markOnly) {
    return (
      <img
        src="/brand/iskcon-logo.svg"
        alt={label}
        className={cn("block shrink-0 object-contain", className)}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "block shrink-0 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
        "aspect-square [mask-image:url('/brand/iskcon-mark.svg')]",
        className
      )}
    />
  );
}
