import React from "react";
import Navbar from "./components/redesign/Navbar";
import HeroSection from "./components/redesign/HeroSection";
import AboutMe from "./components/redesign/AboutMe";
import Projects from "./components/redesign/Projects";
import Skills from "./components/redesign/Skills";
import WorkHistory from "./components/redesign/WorkHistory";
import Education from "./components/redesign/Education";
import Certificates from "./components/redesign/Certificates";
import Contact from "./components/redesign/Contact";
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
