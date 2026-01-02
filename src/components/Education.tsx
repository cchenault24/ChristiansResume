import React from "react";
import SectionWrapper from "./SectionWrapper";
import { listEducations } from "../graphql/queries";
import { useDataFetching } from "../hooks/useDataFetching";
import { EducationEntry } from "../types";
import { sectionStyles, cardStyles, sharedStyles } from "../styles/shared";
import Card from "./Card";
import client from "../lib/graphql";

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
    return (
      <SectionWrapper id="education" className={sectionStyles.primary}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto"></div>
          <div className="h-48 bg-gray-700 rounded-lg"></div>
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="education" className={sectionStyles.primary}>
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>
            Error Loading Education
          </h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  if (!education)
    return (
      <SectionWrapper id="education" className={sectionStyles.primary}>
        <p className="text-center text-gray-400">No education data found.</p>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="education" className={sectionStyles.primary}>
      <h2 className={sharedStyles.sectionHeading}>Education</h2>
      <Card className={`${cardStyles.base} ${cardStyles.glass}`}>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={education.icon}
            alt={`${education.university} logo`}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-gray-400 mb-1">{education.university}</p>
            <p className="text-gray-400">
              {education.location} • {education.start} - {education.end}
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-6">{education.description}</p>
      </Card>
    </SectionWrapper>
  );
};

export default Education;
