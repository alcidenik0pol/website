import { notFound } from "next/navigation";
import ResearcherHeader from "@/app/components/ResearcherHeader";
import ProjectPageArticle from "@/app/components/ProjectPageArticle";
import projectsPageData from "@/app/data/ProjectsPageData";

export async function generateStaticParams() {
  return projectsPageData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsPageData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${project.title} | Victor Tenneroni`,
  };
}

export default function ProjectPage({ params }) {
  const project = projectsPageData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <ProjectPageArticle slug={project.slug} />
      </main>
    </div>
  );
}
