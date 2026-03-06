"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import SplashScreen from "@/components/portfolio/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [ready, setReady] = useState(false);

  return (
    <>
      <SplashScreen
        onFinish={() => {
          setShowSplash(false);
          setReady(true);
        }}
      />
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] transition-colors duration-300 py-3 sm:py-6 space-y-3 sm:space-y-6 relative"
        >
          <div className="absolute top-0 start-0 w-full  ">
            <img className="bg-w" src="/bg.png" alt="zelio" />
          </div>

          <ScrollToTop />
          {/* Header */}
          <div className="px-3 sm:px-6 max-w-330 mx-auto">
            <Header />
          </div>

          {/* Main Content */}
          <main className="max-w-330 mx-auto px-3 sm:px-6 space-y-3 sm:space-y-6">
            {/* Hero Section */}
            <div id="about">
              <Hero />
            </div>

            {/* Statistics Section */}
            <Stats />

            {/* Cooperation & Git Journal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
              <Cooperation className="lg:col-span-2" />
              <GitJournal className="lg:col-span-1" />
            </div>

            {/* Services Section */}
            <div id="services">
              <Services />
            </div>

            {/* Experience Section */}
            <div id="resume">
              <Experience />
            </div>

            {/* Education & Research */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <Education />
              <Research />
            </div>

            {/* Projects Section */}
            <div id="portfolio">
              <Projects />
            </div>

            {/* Skills Section */}
            <Skills />

            {/* Blog Section */}
            <div id="blog">
              <Blog />
            </div>

            {/* Contact Section */}
            <div id="contact">
              <Contact />
            </div>
          </main>

          {/* Footer */}
          <footer className="max-w-[1920px] mx-auto px-3 sm:px-6 py-3 sm:py-6">
            <Footer />
          </footer>
        </motion.div>
      )}
    </>
  );
}
