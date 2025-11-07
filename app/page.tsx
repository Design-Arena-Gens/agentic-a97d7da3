import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Testimonials } from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <section id="work" className="relative z-10 mx-auto flex w-[min(90%,1100px)] flex-col gap-12 pb-24">
        <SectionHeader
          eyebrow="Portfolio"
          title="Signature experiences designed for curious audiences"
          description="Each engagement is a cinematic universe blending tactile textures, generative movement, and immersive digital staging."
        />
        <CaseStudyGrid />
      </section>

      <section className="relative z-10 mx-auto flex w-[min(90%,1100px)] flex-col gap-12 pb-24">
        <SectionHeader
          eyebrow="Craft"
          title="Experience pillars that define every collaboration"
          description="A cross-disciplinary practice spanning strategy, design, and realtime 3D production—tailored for brands with bold ambitions."
        />
        <Services />
      </section>

      <section
        id="process"
        className="relative z-10 mx-auto flex w-[min(90%,1100px)] flex-col gap-12 pb-24"
      >
        <SectionHeader
          eyebrow="Process"
          title="Designing worlds through immersive collaboration"
          description="Anchored in research, fueled by experimentation, and elevated through cinematic storytelling."
          align="center"
        />
        <ProcessTimeline />
      </section>

      <section className="relative z-10 mx-auto flex w-[min(90%,1100px)] flex-col gap-12 pb-24">
        <SectionHeader
          eyebrow="Voices"
          title="Feedback from vision-driven partners"
          description="Thought leaders across fashion, music, and tech collaborating to build the extraordinary."
          align="center"
        />
        <Testimonials />
      </section>

      <section className="relative z-10 mx-auto w-[min(90%,1100px)] pb-24">
        <AboutSection />
      </section>

      <section className="relative z-10 mx-auto w-[min(90%,1100px)] pb-24">
        <ContactSection />
      </section>

      <div className="relative z-10 mx-auto w-[min(90%,1100px)]">
        <Footer />
      </div>
    </main>
  );
}
