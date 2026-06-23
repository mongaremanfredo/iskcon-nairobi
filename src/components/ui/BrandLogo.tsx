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
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "block shrink-0 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
        markOnly
          ? "aspect-square [mask-image:url('/brand/iskcon-mark.svg')]"
          : "aspect-[516/480] [mask-image:url('/brand/iskcon-logo.svg')]",
        className
      )}
    />
  );
}
