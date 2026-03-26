import React, { Suspense, lazy, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ScrollNavigation from "./components/ScrollNavigation";
import ScrollProgress from "./components/ScrollProgress";

// Lazy load heavy components that fetch data
const WorkHistory = lazy(() => import("./components/WorkHistory"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Certificates = lazy(() => import("./components/Certificates"));

import SkeletonLoader from "./components/SkeletonLoader";

// Loading component for Suspense fallback
const SectionSkeleton: React.FC = () => (
  <div className="w-full py-12 md:py-16 px-4 md:px-6">
    <div className="w-full max-w-screen-2xl mx-auto">
      <SkeletonLoader variant="text" className="h-10 w-1/3 mx-auto mb-8" />
      <div className="space-y-6">
        <SkeletonLoader variant="card" count={3} />
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  // Ensure page starts at top on initial load
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, []);

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
        <main id="main-content">
          <HeroSection />
          <AboutMe />
          <Suspense fallback={<SectionSkeleton />}>
            <WorkHistory />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Certificates />
          </Suspense>
          <Contact />
        </main>
        <ScrollNavigation />
      </div>
    </ErrorBoundary>
  );
};

export default App;
