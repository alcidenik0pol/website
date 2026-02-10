import Link from "next/link";

export default function ResearcherHeader() {
  return (
    <header className="border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-light tracking-tight">
            Victor Tenneroni
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/investments"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Investments
            </Link>
            <Link
              href="/engineering"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Engineering
            </Link>
            <a
              href="https://art-gallery-ext.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Art
            </a>
            <Link
              href="/publications"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Publications
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
