import React from "react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Virginia",
    duration: "2014 - 2018",
  },
  {
    degree: "High School Diploma",
    institution: "Mechanicsville High School",
    duration: "2010 - 2014",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full bg-gray-800 text-light py-16 px-6"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-subtle hover:shadow-neon transition"
            >
              <h3 className="text-2xl font-bold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
