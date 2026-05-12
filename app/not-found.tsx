import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 flex flex-col items-start">
      <p className="font-signet font-bold tracking-tight text-xl text-[#FF3200] mb-3">
        Howdy!
      </p>
      <p
        className="font-display font-semibold text-warm-900 leading-tight mb-6"
        style={{ fontSize: "clamp(3rem, 6vw + 0.5rem, 5rem)", letterSpacing: "-0.04em" }}
      >
        404
      </p>
      <h1 className="font-display text-h2 font-semibold text-warm-900 leading-tight mb-4">
        That URL doesn&apos;t live here.
      </h1>
      <p className="text-warm-400 font-medium leading-relaxed mb-10 max-w-[44ch]">
        Ben Howard — UX Strategist &amp; Senior Product Designer. You might
        have followed a stale link. The work is still here.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3200] text-white text-sm font-medium rounded-full hover:bg-[#CC2800] transition-colors"
      >
        ← Back to work
      </Link>
    </div>
  );
}
