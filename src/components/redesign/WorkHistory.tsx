import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listJobHistories } from "../../graphql/queries";

interface JobExperience {
  id: string;
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  description: string[];
  icon?: string;
  createdAt: string;
  updatedAt: string;
  __typename: string;
}

const client = generateClient();

const JobExperience: React.FC = () => {
  const [jobs, setJobs] = useState<JobExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await client.graphql({
          query: listJobHistories,
        });
        setJobs(response.data.listJobHistories.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-400">Loading Job Experience...</p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!jobs.length)
    return <p className="text-center text-gray-400">No job data found.</p>;

  return (
    <SectionWrapper id="job-experience" className="bg-gray-800 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-gray-700 p-6 rounded-lg shadow-subtle hover:shadow-neon transition mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={job.icon || `/${job.company.toLowerCase()}-logo.png`}
              alt={job.company}
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className="text-gray-400">
                {job.company} • {job.location}
              </p>
              <p className="text-gray-400">
                {job.start} - {job.end}
              </p>
            </div>
          </div>
          <ul className="text-gray-400 list-disc list-inside">
            {job.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default JobExperience;
