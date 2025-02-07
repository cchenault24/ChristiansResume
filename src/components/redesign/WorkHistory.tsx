import React from "react";

const workHistory = [
  {
    position: "Senior Frontend Engineer",
    company: "Pepper",
    duration: "2021 - Present",
    responsibilities: [
      "Developed scalable frontend applications using React and TypeScript.",
      "Collaborated with cross-functional teams to enhance user experiences.",
      "Led the design and implementation of key features for product launches.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Amazon",
    duration: "2018 - 2021",
    responsibilities: [
      "Built and maintained UI components for e-commerce platforms.",
      "Optimized web performance, resulting in a 20% increase in page speed.",
      "Integrated third-party APIs to enhance functionality.",
    ],
  },
];

const WorkHistory: React.FC = () => {
  return (
    <section
      id="work-history"
      className="w-full bg-gray-900 text-light py-16 px-6"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work History</h2>
        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-lg shadow-subtle hover:shadow-neon transition"
            >
              <h3 className="text-2xl font-bold">{job.position}</h3>
              <p className="text-gray-400">
                {job.company} • {job.duration}
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-400 space-y-2">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
