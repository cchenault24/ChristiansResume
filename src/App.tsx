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
import ErrorBoundary from "./components/ErrorBoundary";
import { Amplify } from "aws-amplify";

const awsConfig = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION || "us-east-1",
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: import.meta.env.VITE_AWS_APPSYNC_REGION || "us-east-1",
  aws_appsync_authenticationType: import.meta.env.VITE_AWS_APPSYNC_AUTHENTICATION_TYPE || "API_KEY",
  aws_appsync_apiKey: import.meta.env.VITE_AWS_APPSYNC_API_KEY,
};

Amplify.configure(awsConfig);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
