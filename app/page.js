import Link from "next/link";
import ResearcherHeader from "./components/ResearcherHeader";
import engineeringData from "./data/ProjectsData";
import publicationsData from "./data/PublicationsData";
import investmentsData from "./data/InvestmentsData";

export const metadata = {
  title: "Victor Tenneroni",
  description: "Venture Capital Investor, AI Engineer",
};

function ItemRow({ item }) {
  return (
    <div className="flex justify-between items-center py-1 group">
      <div className="flex-1">
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:text-primary transition-colors"
        >
          {item.title}
        </a>
        {item.exit && (
          <span className="ml-2 text-xs text-muted-foreground">
            → {item.exit}
            {item.exitAmount && ` · ${item.exitAmount}`}
          </span>
        )}
        {item.ipo && (
          <span className="ml-2 text-xs text-muted-foreground">
            IPO → {item.ipo}
            {item.ipoAmount && ` · ${item.ipoAmount}`}
          </span>
        )}
      </div>
      <span className="text-xs text-muted-foreground ml-4">{item.year}</span>
    </div>
  );
}

export default function Home() {
  // Only show investments with exits or IPOs on home page, exclude Ambler
  const exitedInvestments = investmentsData.filter(
    (inv) => (inv.exit || inv.ipo) && inv.slug !== 'ambler'
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xl md:text-2xl font-medium">
            Venture Capital Investor · AI Engineer
          </p>
          <p className="text-muted-foreground mt-2">
            Based in NYC.<br />Previously: 7 years Singapore, 8 years Japan.
          </p>
        </header>

        {/* Investments */}
        <section id="investments" className="mb-8">
          <Link
            href="/investments"
            className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 hover:text-foreground transition-colors"
          >
            Investments
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-50 transition-opacity"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <div className="space-y-1">
            {exitedInvestments.map((inv) => (
              <ItemRow key={inv.slug} item={inv} />
            ))}
          </div>
        </section>

        {/* Engineering */}
        <section id="engineering" className="mb-8">
          <a
            href="https://github.com/alcidenik0pol"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 hover:text-foreground transition-colors"
          >
            Engineering
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-50 transition-opacity"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <div className="space-y-1">
            {engineeringData.map((project) => (
              <ItemRow key={project.slug} item={project} />
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-8">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Publications
          </h2>
          <div className="space-y-1">
            {publicationsData.map((pub) => (
              <ItemRow key={pub.slug} item={pub} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <a
              href="mailto:victor.tenneroni@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/victor-tenneroni/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/alcidenik0pol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://twitter.com/vtennero"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
