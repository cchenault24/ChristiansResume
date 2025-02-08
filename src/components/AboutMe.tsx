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
            I’m a driven and detail-oriented Senior Front-End Engineer with a
            passion for crafting scalable, intuitive, and visually compelling
            web applications. With expertise in React, TypeScript, and modern
            web technologies, I thrive on transforming complex problems into
            seamless user experiences.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My career spans over 6 years of building dynamic, high-performance
            interfaces that empower users and drive business success. Whether
            it’s architecting modular components, optimizing application
            performance, or collaborating with cross-functional teams, I’m
            committed to delivering exceptional results.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond coding, I enjoy spending quality time with my growing family,
            as a proud new girl dad and soon-to-be husband to my loving fiancée.
            Our home is always lively, thanks to our two dogs and a cat. I have
            a deep passion for cars, unwind with video games, and never miss the
            excitement of an NFL game. These personal passions keep me grounded
            and inspire my creativity, driving my commitment to innovation and
            user-focused design as I create impactful web experiences.
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
