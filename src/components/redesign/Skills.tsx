import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiGraphql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "GraphQL", icon: <SiGraphql /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-dark text-light py-16 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 py-6 px-4 rounded-lg shadow-subtle hover-scale flex flex-col items-center justify-center"
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <p className="text-xl font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
