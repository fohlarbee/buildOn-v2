import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-360 overflow-x-hidden bg-background px-4 text-foreground transition-colors sm:px-6 lg:px-8 xl:px-0">
      <Navbar />
      <main className="pt-16 lg:pt-22 xl:pt-29.25">
        <HeroSection />
        <AboutSection />
        <CoreValuesSection />
        <TeamSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
