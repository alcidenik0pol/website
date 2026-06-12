import ResearcherHeader from "@/app/components/ResearcherHeader";
import DemoTile from "@/app/components/DemoTile";
import projectsData from "@/app/data/ProjectsData";
import demoData from "@/app/data/DemoData";

export const metadata = {
  title: "Demo | Victor Tenneroni",
  description: "Interactive demos and project showcases.",
};

export default function DemoPage() {
  const demoProjects = demoData.map((demo) => {
    const project = projectsData.find((p) => p.slug === demo.slug);
    return { ...demo, project };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
          Demo
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoProjects.map((demo) =>
            demo.project ? (
              <DemoTile
                key={demo.slug}
                slug={demo.slug}
                title={demo.project.title}
                icon={demo.icon}
              />
            ) : null
            )}
        </div>
      </main>
    </div>
  );
}
