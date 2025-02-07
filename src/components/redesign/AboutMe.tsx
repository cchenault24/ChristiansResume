import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="w-full bg-gray-800 text-light py-16 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/avatar.png"
            alt="Christian Chenault"
            className="rounded-full w-48 h-48 mx-auto md:mx-0 shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm a passionate Senior Frontend Engineer with expertise in React,
            TypeScript, and modern web development.
          </p>
          <p className="text-lg leading-relaxed">
            In my free time, I enjoy experimenting with new technologies,
            playing games, and spending time with family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
