import { notFound } from "next/navigation";
import ResearcherHeader from "@/app/components/ResearcherHeader";
import projectsData from "@/app/data/ProjectsData";
import demoData from "@/app/data/DemoData";
import { getEmbedUrl } from "@/app/utils/embedUrl";

export async function generateStaticParams() {
  return demoData.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | Victor Tenneroni`,
    description: project.description,
  };
}

export default function DemoSlugPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const demo = demoData.find((d) => d.slug === params.slug);
  const embedUrl = demo ? getEmbedUrl(demo.demoUrl, demo.demoType) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        <h1 className="text-xl md:text-2xl font-light tracking-tight mb-6 truncate">
          {project.title}
        </h1>
        {embedUrl ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">Demo coming soon.</p>
        )}
      </main>
    </div>
  );
}
