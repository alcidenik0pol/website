import ResearcherHeader from "@/app/components/ResearcherHeader";
import PublicationCard from "@/app/components/PublicationCard";
import investmentsData from "@/app/data/InvestmentsData";

export const metadata = {
  title: "Investments | Victor Tenneroni",
  description: "Venture capital investments.",
};

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Investments
          </h1>
          <p className="text-sm text-muted-foreground">
            Venture capital investments.
          </p>
        </header>
        <div className="space-y-1">
          {investmentsData.map((inv) => (
            <PublicationCard key={inv.slug} publication={inv} />
          ))}
        </div>
      </main>
    </div>
  );
}
