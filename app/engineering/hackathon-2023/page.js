import ProjectPageComponent from "@/app/components/ProjectPageComponent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectPageComponent />
      </div>
      <Footer />
    </main>
  );
}
