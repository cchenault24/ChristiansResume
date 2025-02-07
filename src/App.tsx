import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <WorkHistory />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;
