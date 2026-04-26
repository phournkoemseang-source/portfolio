import Navbar from "../conponents/ui/Navbar";
import HeroSection from "../conponents/ui/HeroSection";
import AboutSection from "../conponents/ui/AboutSection";
import SkillsSection from "../conponents/ui/SkillsSection";
import ExperienceSection from "../conponents/ui/ExperienceSection";
import ProjectsSection from "../conponents/ui/ProjectsSection";
import EventsSection from "../conponents/ui/EventsSection";
import ContactSection from "../conponents/ui/ContactSection";
import Footer from "../conponents/ui/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EventsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
