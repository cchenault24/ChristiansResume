import React from "react";
import SectionWrapper from "./SectionWrapper";
import { useGetData } from "../data/data";

const Education: React.FC = () => {
  const { education } = useGetData();
  const { degree } = education;

  return (
    <SectionWrapper id="education" className="bg-gray-800 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="bg-gray-700 p-6 rounded-lg shadow-subtle hover:shadow-neon transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={degree.icon}
            alt={degree.university}
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-bold">{degree.degree}</h3>
            <p className="text-gray-400">{degree.university}</p>
            <p className="text-gray-400">
              {degree.location} • {degree.start} - {degree.end}
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-4">{degree.description}</p>
      </div>
    </SectionWrapper>
  );
};

export default Education;
