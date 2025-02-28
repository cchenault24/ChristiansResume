import React from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listJobHistories } from "../graphql/queries";
import { useDataFetching } from "../hooks/useDataFetching";
import { sectionStyles } from "../styles/shared";
import Card from "./Card";

interface JobExperience {
  __typename: "JobHistory";
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: string;
  logo: string;
  mobile: string;
  description: (string | null)[];
  createdAt: string;
  updatedAt: string;
}

const client = generateClient();

const JobExperience: React.FC = () => {
  const {
    data: jobs,
    loading,
    error,
  } = useDataFetching<JobExperience>(() =>
    client
      .graphql({
        query: listJobHistories,
      })
      .then((response) =>
        response.data.listJobHistories.items.sort((a, b) => {
          // Parse end dates and handle 'Present' case
          const aEndDate =
            a.endDate.toLowerCase() === "present"
              ? new Date()
              : new Date(a.endDate);
          const bEndDate =
            b.endDate.toLowerCase() === "present"
              ? new Date()
              : new Date(b.endDate);

          // Sort by end date first (most recent first)
          return bEndDate.getTime() - aEndDate.getTime();
        })
      )
  );

  if (loading)
    return (
      <p className="text-center text-gray-400">Loading Job Experience...</p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!jobs.length)
    return <p className="text-center text-gray-400">No job data found.</p>;

  return (
    <SectionWrapper id="work-history" className={sectionStyles.secondary}>
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      {jobs.map((job) => (
        <Card
          key={job.id}
          className="hover:shadow-lg transition-all duration-300 hover:scale-105 mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <img src={job.icon} alt={job.company} className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className="text-gray-400">
                {job.company} • {job.location}
              </p>
              <p className="text-gray-400">
                {job.startDate} - {job.endDate}
              </p>
            </div>
          </div>
          <ul className="text-gray-400 list-disc list-inside">
            {job.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </Card>
      ))}
    </SectionWrapper>
  );
};

export default JobExperience;
