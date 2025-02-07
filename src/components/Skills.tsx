import SectionWrapper from "./SectionWrapper";
import { useGetData } from "./data/data";

const Skills: React.FC = () => {
  const { skills } = useGetData();

  return (
    <SectionWrapper id="skills" className="bg-dark text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-accent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.technical.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-subtle hover-scale"
              >
                <h4 className="text-xl font-bold mb-2">{skill.skill}</h4>
                <p className="text-gray-400">{skill.descriptor}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-subtle hover-scale"
              >
                <h4 className="text-xl font-bold mb-2">{skill.skill}</h4>
                <p className="text-gray-400">{skill.descriptor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
