import ResearcherHeader from "@/app/components/ResearcherHeader";

export const metadata = {
  title: "Deep Tech VC Due Diligence Co-Pilot | Victor Tenneroni",
  description:
    "Upload a pitch deck. Get a structured due diligence memo in minutes. Built on 7 years of venture investing.",
};

export default function StartupPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Deep Tech VC Due Diligence Co-Pilot
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Upload a pitch deck. Get a structured due diligence memo in minutes.
            Built on 7 years of venture investing.
          </p>
        </header>

        <section className="space-y-6">
          {/* How It Works */}
          <div className="pb-6 border-b border-border/50">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              How It Works
            </h2>
            <div className="space-y-3">
              {[
                "Upload your pitch deck or paste a URL.",
                "Select the sector and stage.",
                "Receive a structured due diligence memo.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's In The Report */}
          <div className="pb-6 border-b border-border/50">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              What&apos;s In The Report
            </h2>
            <ul className="space-y-2">
              {[
                "Technology moat assessment — is the IP defensible?",
                "Team credibility evaluation — do the founders have the right background?",
                "Market sizing sanity check — are the TAM assumptions grounded?",
                "Red flags analysis — what could kill the deal?",
                "Follow-up questions — what to ask the founders next.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-border mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="pb-6 border-b border-border/50">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Pricing
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="font-medium">Single</h3>
                <p className="text-sm text-muted-foreground">$299 per deck</p>
              </div>
              <div>
                <h3 className="font-medium">10-Pack</h3>
                <p className="text-sm text-muted-foreground">
                  $1,990 — save 33%
                </p>
              </div>
              <div>
                <h3 className="font-medium">Unlimited</h3>
                <p className="text-sm text-muted-foreground">
                  $2,500 / month
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="pb-6 border-b border-border/50">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              About
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              7 years at Eurazeo (Venture &amp; Growth), 20+ investments across
              Southeast Asia. Ecole 42 and Columbia MSc. The co-pilot combines
              that investing experience with structured analysis to help you move
              faster on deep tech deals.
            </p>
          </div>

          {/* Get Started */}
          <div className="pt-2">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Get Started
            </h2>
            <a
              href="mailto:hello@victortenneroni.com"
              className="inline-block border border-border px-6 py-2.5 text-sm hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Send a deck or describe your use case. Usually respond within 24
              hours.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
