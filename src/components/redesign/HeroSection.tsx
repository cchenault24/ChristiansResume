import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-dark text-light min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-7xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm <span className="text-accent">Christian Chenault</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          Crafting immersive, modern, and user-friendly web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent text-dark py-3 px-6 rounded-lg font-medium shadow-neon hover:bg-secondary hover:shadow-secondary transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent py-3 px-6 rounded-lg font-medium hover:bg-accent hover:text-dark transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
