import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Experience } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <Experience />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};
