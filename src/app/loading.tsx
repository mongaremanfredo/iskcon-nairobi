export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-temple-bg px-6 pb-20 pt-40 sm:pt-48" role="status" aria-live="polite">
      <div className="mx-auto max-w-5xl">
        <div className="h-3 w-28 animate-pulse bg-gold/45" />
        <div className="mt-6 h-12 w-full max-w-xl animate-pulse bg-temple-sand/80 sm:h-16" />
        <div className="mt-4 h-5 w-full max-w-2xl animate-pulse bg-temple-sand/55" />
        <div className="mt-3 h-5 w-4/5 max-w-xl animate-pulse bg-temple-sand/55" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[0, 1, 2].map((item) => <div key={item} className="aspect-[4/3] animate-pulse border border-temple-sand bg-white/70" />)}
        </div>
        <span className="sr-only">Loading ISKCON Nairobi</span>
      </div>
    </div>
  );
}
