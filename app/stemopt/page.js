import ResearcherHeader from "@/app/components/ResearcherHeader";

export const metadata = {
  title: "How STEM OPT Works for Employers | Victor Tenneroni",
  description:
    "A simple, free process for employers hiring a STEM OPT candidate — steps, costs, and time explained.",
};

function FactRow({ label, value }) {
  return (
    <p className="text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{label}:</span> {value}
    </p>
  );
}

function StepMarker({ number }) {
  return (
    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
      <span className="text-xs text-muted-foreground">{number}</span>
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
      {children}
    </h2>
  );
}

export default function StemOptPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            How STEM OPT Works for Employers
          </h1>
        </header>

        <div className="mb-8 border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">
              $0 cost for the employer
            </span>{" "}
            — no immigration petition, no government filing fees, no lawyer
            required.
          </p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            3 years of U.S. work authorization — 12 months of OPT plus
            a 24-month STEM extension.
          </p>
        </div>

        {/* Section A — the critical path when hiring */}
        <section>
          <SectionHeader>What you do when hiring</SectionHeader>
          <div className="relative space-y-8">
            {/* Continuous vertical line behind the step markers */}
            <div
              aria-hidden="true"
              className="absolute left-3 top-3 bottom-3 w-px bg-border -translate-x-1/2"
            />

            {/* 1. E-Verify Enrollment */}
            <div className="relative pl-8">
              <StepMarker number={1} />
              <h3 className="text-sm font-medium text-foreground mb-2">
                E-Verify Enrollment
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Employer must be{" "}
                <a
                  href="https://www.e-verify.gov/employers/enrolling-in-e-verify/the-enrollment-process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  enrolled
                </a>{" "}
                in{" "}
                <a
                  href="https://www.e-verify.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  E-Verify
                </a>{" "}
                and remain in good standing.
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                E-Verify is a free web-based system run by the U.S. Department of
                Homeland Security (USCIS) that confirms new hires&rsquo;
                employment eligibility.
              </p>
              <div className="mt-3 space-y-1">
                <FactRow label="Cost to employer" value="$0" />
                <FactRow
                  label="Estimated time"
                  value="30–60 minutes to complete the online enrollment form"
                />
                <FactRow
                  label="Waiting time"
                  value="1–2 weeks for the account to become fully active (if not already enrolled)"
                />
              </div>
            </div>

            {/* 2. Complete Form I-983 (Training Plan) */}
            <div className="relative pl-8">
              <StepMarker number={2} />
              <h3 className="text-sm font-medium text-foreground mb-2">
                Complete Form I-983 (Training Plan)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Employer completes Sections 3–6 of{" "}
                <a
                  href="https://www.ice.gov/doclib/sevis/pdf/i983.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Form I-983
                </a>{" "}
                (company details, E-Verify number, training plan, supervisor
                information, and required attestations). Both parties sign.
              </p>
              <div className="mt-3 space-y-1">
                <FactRow label="Cost to employer" value="$0" />
                <FactRow
                  label="Estimated time"
                  value="5–60 minutes — the student prepares a draft; the employer adds company details and signs"
                />
                <FactRow label="Waiting time" value="None" />
              </div>
            </div>

            {/* 3. School (DSO) Review */}
            <div className="relative pl-8">
              <StepMarker number={3} />
              <h3 className="text-sm font-medium text-foreground mb-2">
                School (DSO) Review
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Student submits the signed Form I-983 to the school&rsquo;s
                Designated School Official (DSO). DSO only checks that the form
                is complete and signed.
              </p>
              <div className="mt-3 space-y-1">
                <FactRow label="Cost to employer" value="$0" />
                <FactRow label="Estimated time for the employer" value="0" />
                <FactRow
                  label="Waiting time"
                  value="Usually a few business days (handled entirely by the school)"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section B — later, minimal, de-emphasized */}
        <section className="mt-10">
          <SectionHeader>What comes later</SectionHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                12 months in and at the end: sign two short self-evaluations the
                student prepares (30–45 minutes each, $0).
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Sign two short self-evaluations (one at 12 months and one at
                the end). Student prepares them; employer only reviews and
                signs.
              </p>
              <div className="mt-2 space-y-1">
                <FactRow label="Cost to employer" value="$0" />
                <FactRow label="Estimated time" value="30–45 minutes each" />
                <FactRow label="Waiting time" value="None" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                If employment ends early: a few minutes of paperwork.
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                The employer must notify the school&rsquo;s DSO within 5
                business days if the employment ends or a material change
                occurs, and sign an updated Form I-983 if needed.
              </p>
              <div className="mt-2 space-y-1">
                <FactRow label="Cost to employer" value="$0" />
                <FactRow label="Estimated time" value="A few minutes" />
                <FactRow label="Waiting time" value="None" />
              </div>
            </div>
          </div>
        </section>

        {/* Section C — after the extension ends */}
        <section className="mt-10 pt-4 border-t border-border">
          <SectionHeader>After the 3 years</SectionHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The 24-month STEM extension is granted once — after the full 3
            years (12 months of OPT plus 24 months of extension), there is no
            renewal process and nothing left for the employer to file. The
            employee can continue working on an H-1B visa (if eligible).
          </p>
        </section>

        <footer className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">Sources:</p>
          <ul className="mt-1 space-y-1">
            <li>
              <a
                href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Optional Practical Training Extension for STEM Students (STEM
                OPT) — U.S. Citizenship and Immigration Services
              </a>
            </li>
            <li>
              <a
                href="https://studyinthestates.dhs.gov/stem-opt-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                STEM OPT Hub — Study in the States (U.S. Department of Homeland
                Security)
              </a>
            </li>
            <li>
              <a
                href="https://careercenter.umich.edu/article/us-employers-guide-hiring-international-students"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                U.S. Employers Guide to Hiring International Students —
                University of Michigan Career Center
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
