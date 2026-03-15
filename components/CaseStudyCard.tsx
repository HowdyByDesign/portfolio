import Link from "next/link";

interface CaseStudyCardProps {
  index: string;
  client: string;
  category: string;
  title: string;
  description: string;
  href: string;
  nda?: boolean;
}

export default function CaseStudyCard({
  index,
  client,
  category,
  title,
  description,
  href,
  nda,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group relative block py-10 border-b border-warm-100 overflow-hidden"
    >
      {/* Accent rule — draws from left to right on hover using ease-out-expo */}
      <span
        className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full"
        style={{
          transition: "width 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden
      />

      <div className="flex gap-8 sm:gap-14 items-start">
        {/* Index — quiet until hovered */}
        <span
          className="text-xs font-medium tabular-nums pt-2 flex-shrink-0 w-5 text-warm-300 group-hover:text-accent"
          style={{
            transition: "color 300ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {index}
        </span>

        {/* Editorial content block */}
        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="flex items-center gap-2 mb-4">
            <span className="label">{client}</span>
            {nda && (
              <span className="text-[10px] font-semibold text-warm-700 tracking-widest uppercase">
                · NDA
              </span>
            )}
          </div>

          {/* Title + arrow row */}
          <div className="flex items-start justify-between gap-6">
            <h2
              className="font-display text-h2 font-semibold text-warm-900 leading-tight group-hover:text-accent"
              style={{
                transition: "color 400ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {title}
            </h2>

            <span
              className="text-warm-300 group-hover:text-accent flex-shrink-0 text-lg leading-tight pt-1.5"
              style={{
                transition: "color 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                transform: "translate(0, 0)",
              }}
              // Inline style hover via group trick — arrow nudges diagonally
              aria-hidden
            >
              ↗
            </span>
          </div>

          <p className="text-warm-900 font-medium leading-relaxed mt-4 max-w-2xl text-[0.9375rem]">
            {description}
          </p>

          <p className="text-xs font-semibold text-warm-700 tracking-widest uppercase mt-5">{category}</p>
        </div>
      </div>
    </Link>
  );
}
