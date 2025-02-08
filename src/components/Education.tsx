import React from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listEducations } from "../graphql/queries";
import { useDataFetching } from "../hooks/useDataFetching";
import { EducationEntry } from "../types";

const client = generateClient();

const Education: React.FC = () => {
  const {
    data: educations,
    loading,
    error,
  } = useDataFetching<EducationEntry>(() =>
    client
      .graphql({
        query: listEducations,
      })
      .then((response) => response.data.listEducations.items)
  );

  const education = educations[0];

  if (loading)
    return <p className="text-center text-gray-400">Loading Education...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!education)
    return (
      <p className="text-center text-gray-400">No education data found.</p>
    );

  return (
    <SectionWrapper id="education" className="bg-gray-800 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="bg-gray-700 p-6 rounded-lg shadow-subtle hover:shadow-neon hover-scale transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={education.icon}
            alt={education.university}
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-bold">{education.degree}</h3>
            <p className="text-gray-400">{education.university}</p>
            <p className="text-gray-400">
              {education.location} • {education.start} - {education.end}
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-4">{education.description}</p>
      </div>
    </SectionWrapper>
  );
};

export default Education;
