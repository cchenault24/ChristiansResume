import React from "react";

const projects = [
  {
    title: "Flexbox Sandbox",
    description: "A dynamic sandbox for mastering Flexbox layouts.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Showcasing my work and expertise.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-gray-900 text-light py-16 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-lg shadow-subtle hover:shadow-neon transition"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-accent hover:text-secondary transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
