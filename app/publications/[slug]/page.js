import { notFound } from "next/navigation";
import ResearcherHeader from "@/app/components/ResearcherHeader";
import PublicationArticle from "@/app/components/PublicationArticle";
import publicationsData from "@/app/data/PublicationsData";

export async function generateStaticParams() {
  return publicationsData.map((publication) => ({
    slug: publication.slug,
  }));
}

export async function generateMetadata({ params }) {
  const publication = publicationsData.find((p) => p.slug === params.slug);

  if (!publication) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${publication.title} | Victor Tenneroni`,
    description: publication.description,
  };
}

export default function PublicationPage({ params }) {
  const publication = publicationsData.find((p) => p.slug === params.slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <PublicationArticle slug={publication.slug} />
      </main>
    </div>
  );
}
