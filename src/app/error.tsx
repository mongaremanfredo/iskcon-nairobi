"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="min-h-[68vh] bg-temple-bg px-6 pb-20 pt-40 sm:pt-48">
      <div className="mx-auto max-w-2xl border border-temple-sand bg-white p-8 text-center shadow-card sm:p-12">
        <p className="eyebrow mb-4">A Momentary Interruption</p>
        <h1 className="font-playfair text-4xl text-ink sm:text-5xl">The page could not be completed.</h1>
        <p className="mx-auto mt-5 max-w-lg font-inter leading-relaxed text-ink/65">
          Please try again. If the interruption continues, return home or contact the temple office.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-primary gap-2"><RefreshCw size={17} />Try Again</button>
          <Link href="/" className="btn-outline">Return Home</Link>
          <Link href="/contact" className="btn-outline">Contact the Temple</Link>
        </div>
      </div>
    </section>
  );
}
