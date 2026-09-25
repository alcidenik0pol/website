import ResearcherHeader from "@/app/components/ResearcherHeader";

export const metadata = {
  title: "STEM OPT Employer Requirements | Victor Tenneroni",
  description: "What employers need to do for STEM OPT — costs, time, and process.",
};

function FactRow({ label, value }) {
  return (
    <p className="text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{label}:</span> {value}
    </p>
  );
}

export default function StemOptPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            STEM OPT Employer Requirements
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The complete process, costs, and time required from the employer.
          </p>
        </header>

        <section className="space-y-6">
          {/* 1. E-Verify Enrollment */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              1. E-Verify Enrollment
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Employer must be enrolled in E-Verify and remain in good
              standing.
            </p>
            <div className="mt-3 space-y-1">
              <FactRow label="Cost" value="$0" />
              <FactRow
                label="Actual work time"
                value="30–60 minutes to complete the online enrollment form"
              />
              <FactRow
                label="Waiting time"
                value="1–2 weeks for the account to become fully active (if not already enrolled)"
              />
            </div>
          </div>

          {/* 2. Complete Form I-983 (Training Plan) */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              2. Complete Form I-983 (Training Plan)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Employer completes Sections 3–6 of Form I-983 (company details,
              E-Verify number, training plan, supervisor information, and
              required attestations). Both parties sign.
            </p>
            <div className="mt-3 space-y-1">
              <FactRow label="Cost" value="$0" />
              <FactRow
                label="Actual work time"
                value="1–4 hours to fill out and sign"
              />
              <FactRow label="Waiting time" value="None" />
            </div>
          </div>

          {/* 3. School (DSO) Review */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              3. School (DSO) Review
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Student submits the signed Form I-983 to the school&rsquo;s
              Designated School Official (DSO). DSO only checks that the form
              is complete and signed.
            </p>
            <div className="mt-3 space-y-1">
              <FactRow label="Cost to employer" value="$0" />
              <FactRow label="Actual work time for employer" value="0" />
              <FactRow
                label="Waiting time"
                value="Usually a few business days (handled entirely by the school)"
              />
            </div>
          </div>

          {/* 4. Ongoing Requirements During the 24-Month Period */}
          <div>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              4. Ongoing Requirements During the 24-Month Period
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sign two short self-evaluations (one at 12 months and one at
                  the end). Student prepares them; employer only reviews and
                  signs.
                </p>
                <div className="mt-3 space-y-1">
                  <FactRow label="Cost" value="$0" />
                  <FactRow
                    label="Actual work time"
                    value="30–45 minutes each"
                  />
                  <FactRow label="Waiting time" value="None" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If employment ends or a material change occurs, notify the
                  school&rsquo;s DSO within 5 business days and submit an
                  updated Form I-983 if needed.
                </p>
                <div className="mt-3 space-y-1">
                  <FactRow label="Cost" value="$0" />
                  <FactRow label="Actual work time" value="A few minutes" />
                  <FactRow label="Waiting time" value="None" />
                </div>
              </div>
            </div>
          </div>

          {/* Summary for HR */}
          <div className="pt-4 border-t border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Summary for HR
            </h2>
            <ul className="space-y-1 text-sm text-muted-foreground leading-relaxed">
              <li>
                <span className="font-medium text-foreground">
                  Total direct cost: $0.
                </span>
              </li>
              <li>
                No immigration petition, no government filing fees, no lawyer
                required.
              </li>
              <li>
                Main effort is one Form I-983 (1–4 hours of actual work) at
                the start. Everything else is minimal.
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t border-border">
          <a
            href="https://careercenter.umich.edu/article/us-employers-guide-hiring-international-students"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Source: U.S. Employers Guide to Hiring International Students —
            University of Michigan Career Center
          </a>
        </footer>
      </main>
    </div>
  );
}
