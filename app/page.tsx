import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      <div className="w-full px-6 lg:px-12 xl:px-20 pt-32 md:pt-40 pb-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Column: Profile Card (Sticky on desktop) */}
        <div className="w-full lg:w-[380px] shrink-0 lg:sticky lg:top-40 h-auto">
          <ProfileCard />
        </div>
        
        {/* Right Column: Scrollable Content */}
        <div className="w-full flex-1 flex flex-col gap-24">
          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
