import ResearcherHeader from "@/app/components/ResearcherHeader";
import PublicationCard from "@/app/components/PublicationCard";
import engineeringData from "@/app/data/ProjectsData";

export const metadata = {
  title: "Engineering | Victor Tenneroni",
  description: "Engineering and software projects.",
};

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Engineering
          </h1>
          <p className="text-sm text-muted-foreground">
            Engineering and software projects.
          </p>
        </header>
        <div className="space-y-1">
          {engineeringData.map((project) => (
            <PublicationCard key={project.slug} publication={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
