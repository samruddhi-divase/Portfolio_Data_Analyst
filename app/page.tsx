import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ImpactMetrics } from "@/components/impact-metrics"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ImpactMetrics />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
