import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSections from "../components/AchievementsSections";

export const metadata = {
  title: "Victor Tenneroni (Old Site)",
  description: "Archive of the previous website design.",
};

export default function OldHome() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]  ">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          {/* <AchievementsSections /> */}
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
