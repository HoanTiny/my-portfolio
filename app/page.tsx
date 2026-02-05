import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import Cooperation from "@/components/portfolio/Cooperation";
import GitJournal from "@/components/portfolio/GitJournal";
import Services from "@/components/portfolio/Services";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Research from "@/components/portfolio/Research";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Blog from "@/components/portfolio/Blog";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] transition-colors duration-300 py-6 space-y-6 relative">
      <div className="absolute top-0 start-0 w-full h-full ">
        <img className="bg-w" src="/bg.png" alt="zelio" />
      </div>
      {/* Header */}
      <div className="p-6 max-w-330 mx-auto">
        <Header />
      </div>

      {/* Main Content */}
      <main className="max-w-330 mx-auto px-6 space-y-6">
        {/* Hero Section */}
        <Hero />

        {/* Statistics Section */}
        <Stats />

        {/* Cooperation & Git Journal */}
        <div className="grid grid-cols-[866px,1fr] gap-6">
          <Cooperation />
          <GitJournal />
        </div>

        {/* Services Section */}
        <Services />

        {/* Experience Section */}
        <Experience />

        {/* Education & Research */}
        <div className="grid grid-cols-2 gap-6">
          <Education />
          <Research />
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="max-w-[1920px] mx-auto px-6 py-6">
        <Footer />
      </footer>
    </div>
  );
}
