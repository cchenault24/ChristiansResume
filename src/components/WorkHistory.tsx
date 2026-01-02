import React from "react";
import { listJobHistories } from "../graphql/queries";
import { useDataFetching } from "../hooks/useDataFetching";
import client from "../lib/graphql";
import { sectionStyles, sharedStyles } from "../styles/shared";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";

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
        response.data.listJobHistories.items.sort(
          (a: JobExperience, b: JobExperience) => {
            // Helper function to parse MM/YYYY format dates
            const parseDate = (dateStr: string): Date => {
              if (dateStr.toLowerCase() === "present") {
                return new Date();
              }
              // Parse MM/YYYY format
              const [month, year] = dateStr.split("/");
              // Create date as first day of the month for consistent sorting
              return new Date(parseInt(year), parseInt(month) - 1, 1);
            };

            // Parse start dates
            const aStartDate = parseDate(a.startDate);
            const bStartDate = parseDate(b.startDate);

            // Sort by start date first (most recent first)
            const startDateDiff = bStartDate.getTime() - aStartDate.getTime();
            if (startDateDiff !== 0) {
              return startDateDiff;
            }

            // If start dates are equal, sort by end date (most recent first)
            const aEndDate = parseDate(a.endDate);
            const bEndDate = parseDate(b.endDate);
            return bEndDate.getTime() - aEndDate.getTime();
          }
        )
      )
  );

  if (loading)
    return (
      <SectionWrapper id="work-history" className={sectionStyles.secondary}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto"></div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="work-history" className={sectionStyles.secondary}>
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>
            Error Loading Work Experience
          </h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  if (!jobs.length)
    return (
      <SectionWrapper id="work-history" className={sectionStyles.secondary}>
        <p className="text-center text-gray-400">No job data found.</p>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="work-history" className={sectionStyles.secondary}>
      <h2 className={sharedStyles.sectionHeading}>Work Experience</h2>
      {jobs.map((job) => (
        <Card
          key={job.id}
          className="hover:shadow-lg transition-all duration-300 hover:scale-105 mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={job.icon}
              alt={`${job.company} logo`}
              loading="lazy"
              width={64}
              height={64}
              className="w-16 h-16"
            />
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
