import React from "react";

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-dark text-light py-16 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 py-6 px-4 rounded-lg shadow-subtle hover:shadow-neon transition"
            >
              <p className="text-xl font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
