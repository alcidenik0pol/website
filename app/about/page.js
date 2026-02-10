import ResearcherHeader from "@/app/components/ResearcherHeader";

export const metadata = {
  title: "About | Victor Tenneroni",
  description: "Background, expertise, and contact information.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            About
          </h1>
        </header>

        <section className="space-y-6">
          {/* Experience */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Experience
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Eurazeo</h3>
                <p className="text-sm text-muted-foreground">
                  Vice President, Venture & Growth · 2017-2025
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Focused on technology investments in Southeast Asia. Previously
                  at 42 (the AngelList of Europe).
                </p>
              </div>
              <div>
                <h3 className="font-medium">HEC Paris</h3>
                <p className="text-sm text-muted-foreground">
                  Master in Management · 2015-2017
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Chapter President for HEC Paris Alumni in Singapore (800+
                  alumni).
                </p>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Expertise
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering, investment, and research. Built products at Meta HQ,
              developed medical AI diagnostics at hackathons, and evaluated
              venture capital opportunities across Southeast Asia.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-4 border-t border-border">
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
              <span>·</span>
              <a
                href="https://vtennero.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                ASEAN Tech Digest
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
