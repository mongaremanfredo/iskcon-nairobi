import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offline | ISKCON Nairobi",
  description: "ISKCON Nairobi offline connection page.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="flex min-h-[72svh] items-center bg-[linear-gradient(to_bottom,#3a2a24_0px,#3a2a24_7rem,#f4ece1_7rem)] px-5 pb-16 pt-[calc(var(--site-chrome-height,63px)+7rem)] text-center">
      <div className="mx-auto max-w-xl">
        <Image
          src="/brand/icon-192.png"
          alt="ISKCON Nairobi"
          width={192}
          height={192}
          className="mx-auto h-24 w-24 object-contain sm:h-28 sm:w-28"
        />
        <span className="eyebrow mt-8 block">Connection paused</span>
        <h1 className="mt-3 font-playfair text-4xl leading-tight text-dusk sm:text-5xl">
          You are offline
        </h1>
        <p className="mx-auto mt-5 max-w-md font-inter text-sm leading-relaxed text-dusk/65 sm:text-base">
          Pages you opened earlier may still be available. Reconnect to receive current temple
          notices, festival updates, and form confirmations.
        </p>
        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Try homepage
          </Link>
          <Link href="/festivals" className="btn-outline">
            Open calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
