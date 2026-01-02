import React from "react";
import { sectionStyles } from "../styles/shared";
import SectionWrapper from "./SectionWrapper";

const AboutMe: React.FC = () => {
  return (
    <SectionWrapper id="about" className={sectionStyles.primary}>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm a driven and detail-oriented Senior Front-End Engineer with a
            passion for crafting scalable, intuitive, and visually compelling
            web and mobile applications. With expertise in React, React Native,
            TypeScript, and modern web technologies, I thrive on transforming
            complex problems into seamless user experiences across platforms.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My career spans over 8 years of building dynamic, high-performance
            interfaces that empower users and drive business success. From
            architecting comprehensive design systems and reusable component
            libraries to optimizing application performance and ensuring
            accessibility compliance, I'm committed to delivering exceptional
            results. I've led design system initiatives, built countless
            reusable components, and established team wide coding standards that
            improve collaboration and development velocity.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond coding, I enjoy spending quality time with my growing family
            as a proud girl dad and husband to my loving wife. Our home is
            always lively, thanks to our two dogs and cat. I have a deep passion
            for cars, enjoy unwinding with video games, and never miss an
            exciting NFL game. These personal passions keep me grounded and
            inspire my creativity, driving my commitment to innovation and
            user-focused design as I create impactful web experiences.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/myself.png"
            alt="Christian Chenault, Senior Front-End Engineer"
            loading="lazy"
            className="rounded-lg w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
