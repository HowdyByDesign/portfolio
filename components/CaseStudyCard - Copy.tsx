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
      className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
    >
      {/* Index number */}
      <div className="sm:w-8 flex-shrink-0 pt-1">
        <span className="text-xs font-medium text-zinc-300 tabular-nums">
          {index}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="label">{client}</span>
          </div>
          <span className="text-zinc-200 group-hover:text-[#FF3200] transition-colors text-lg flex-shrink-0 leading-none">
            ↗
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-zinc-950 mb-3 leading-snug tracking-tight group-hover:text-zinc-700 transition-colors">
          {title}
        </h2>

        <p className="text-zinc-500 leading-relaxed mb-5 max-w-2xl">
          {description}
        </p>

        <p className="text-xs text-zinc-400">{category}</p>
      </div>
    </Link>
  );
}
