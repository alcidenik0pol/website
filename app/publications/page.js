import ResearcherHeader from "@/app/components/ResearcherHeader";
import PublicationCard from "@/app/components/PublicationCard";
import publicationsData from "@/app/data/PublicationsData";

export const metadata = {
  title: "Publications | Victor Tenneroni",
  description: "Writing and publications.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Publications
          </h1>
          <p className="text-sm text-muted-foreground">
            Writing and publications.
          </p>
        </header>
        <div className="space-y-1">
          {publicationsData.map((pub) => (
            <PublicationCard key={pub.slug} publication={pub} />
          ))}
        </div>
      </main>
    </div>
  );
}
