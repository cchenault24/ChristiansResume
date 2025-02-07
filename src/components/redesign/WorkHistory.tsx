import React from "react";
import SectionWrapper from "./SectionWrapper";
import { useGetData } from "../data/data";

const WorkHistory: React.FC = () => {
  const { jobExperience } = useGetData();
  const jobs = Object.values(jobExperience).sort((a, b) => {
    // Convert dates to timestamps for comparison
    const dateA = new Date(a.end === "Present" ? Date.now() : a.end).getTime();
    const dateB = new Date(b.end === "Present" ? Date.now() : b.end).getTime();
    return dateB - dateA; // Sort in descending order (most recent first)
  });

  return (
    <SectionWrapper id="work-history" className="bg-gray-900 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Work History</h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-dark p-6 rounded-lg shadow-subtle hover:shadow-neon transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={job.icon} alt={job.company} className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <p className="text-gray-400">
                  {job.company} • {job.location} • {job.start} - {job.end}
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {job.description.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WorkHistory;
