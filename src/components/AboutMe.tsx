import React, { memo } from "react";
import { sectionStyles, sharedStyles } from "../styles/shared";
import SectionWrapper from "./SectionWrapper";

const AboutMe: React.FC = memo(() => {
  return (
    <SectionWrapper id="about" className={sectionStyles.primary}>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className={sharedStyles.sectionHeading}>About Me</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I'm a driven and detail-oriented Senior Front-End Engineer with a
              passion for crafting scalable, intuitive, and visually compelling
              web and mobile applications. With expertise in React, React
              Native, TypeScript, and modern web technologies, I thrive on
              transforming complex problems into seamless user experiences
              across platforms.
            </p>
            <p className="text-lg leading-relaxed">
              My career spans over 8 years of building dynamic, high-performance
              interfaces that empower users and drive business success. From
              architecting comprehensive design systems and reusable component
              libraries to optimizing application performance and ensuring
              accessibility compliance, I'm committed to delivering exceptional
              results. I've led design system initiatives, built countless
              reusable components, and established team wide coding standards
              that improve collaboration and development velocity.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I enjoy spending quality time with my growing
              family as a proud girl dad and husband to my loving wife. Our home
              is always lively, thanks to our two dogs and cat. I have a deep
              passion for cars, enjoy unwinding with video games, and never miss
              an exciting NFL game. These personal passions keep me grounded and
              inspire my creativity, driving my commitment to innovation and
              user-focused design as I create impactful web experiences.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/myself.png"
            alt="Christian Chenault, Senior Front-End Engineer"
            loading="lazy"
            width={600}
            height={800}
            className="rounded-lg w-full max-w-md mx-auto shadow-lg"
            decoding="async"
          />
        </div>
      </div>
    </SectionWrapper>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
