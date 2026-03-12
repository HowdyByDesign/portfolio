export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-12 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">© 2025 Ben Howard</p>

        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/bhowarddesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:Howdy@Howdybydesign.com"
            className="text-sm text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            Howdy@Howdybydesign.com
          </a>
        </div>
      </div>
    </footer>
  );
}
