import React from "react";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ErrorBoundary from "./components/ErrorBoundary";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollNavigation from "./components/ScrollNavigation";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <AboutMe />
        <WorkHistory />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <ScrollNavigation />
      </div>
    </ErrorBoundary>
  );
};

export default App;
