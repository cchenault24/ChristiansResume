import React from "react";
import SectionWrapper from "./SectionWrapper";
import { sectionStyles } from "../styles/shared";

const AboutMe: React.FC = () => {
  return (
    <SectionWrapper id="about" className={sectionStyles.primary}>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm a passionate Senior Frontend Engineer with expertise in React,
            TypeScript, and modern web development.
          </p>
          <p className="text-lg leading-relaxed">
            In my free time, I enjoy experimenting with new technologies,
            playing games, and spending time with family.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/myself.png"
            alt="Christian Chenault"
            className="rounded-lg w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
