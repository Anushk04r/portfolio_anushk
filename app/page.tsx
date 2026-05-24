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
      
      {/* Hero / About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-16 min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 h-full items-stretch">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 h-full">
            <ProfileCard />
          </div>
          
          {/* Right Column: About Content */}
          <div className="lg:col-span-8 h-full py-8 lg:py-0">
            <AboutSection />
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-b from-transparent via-black/40 to-transparent">
        <Skills />
      </div>

      <div className="w-full">
        <Experience />
      </div>

      <div className="w-full bg-gradient-to-b from-transparent via-black/20 to-transparent">
        <Projects />
      </div>

      <div className="w-full">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
