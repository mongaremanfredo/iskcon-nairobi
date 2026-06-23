import { cn } from "@/lib/utils";

type SavannaDividerProps = {
  className?: string;
  tone?: "sand" | "transparent";
};

export default function SavannaDivider({
  className,
  tone = "sand",
}: SavannaDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-24 overflow-hidden",
        tone === "sand" ? "bg-sand" : "bg-transparent",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <circle cx="1120" cy="42" r="22" fill="var(--color-sunset)" opacity="0.85" />
        <path
          d="M0 92 C145 78 280 82 430 93 C590 104 716 86 858 66 C1030 42 1196 50 1440 72 L1440 120 L0 120 Z"
          fill="var(--color-dusk)"
          opacity="0.16"
        />
        <path
          d="M174 82c56-28 132-25 190-2-58 3-104 18-136 43v37h-32v-35c-43-24-95-33-156-29 43-22 89-29 134-14z"
          fill="var(--color-dusk)"
          opacity="0.72"
        />
        <path
          d="M936 70c76-38 179-33 257-2-78 4-141 24-184 58v40h-38v-38c-58-32-129-44-212-38 58-30 121-40 177-20z"
          fill="var(--color-dusk)"
          opacity="0.82"
        />
        <path
          d="M1188 86c42-21 99-18 143-1-44 3-78 14-102 33v30h-25v-28c-32-18-71-25-116-22 31-16 65-21 100-12z"
          fill="var(--color-dusk)"
          opacity="0.56"
        />
      </svg>
    </div>
  );
}
