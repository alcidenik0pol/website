// app/old/posts/[slug]/page.js
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import MarkdownImporter from "@/app/components/MarkdownImporter";

export default function OldPostPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MarkdownImporter slug={params.slug} />
      </div>
      <Footer />
    </main>
  );
}
