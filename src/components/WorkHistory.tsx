import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { useDataFetching } from "../hooks/useDataFetching";
import { getJobHistories } from "../lib/firestore";
import { sectionStyles, sharedStyles } from "../styles/shared";
import { animations } from "../utils/animations";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";
import SkeletonLoader from "./SkeletonLoader";

interface JobExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: string;
  description: (string | null)[];
}

const JobExperience: React.FC = memo(() => {
  const {
    data: jobs,
    loading,
    error,
  } = useDataFetching<JobExperience>(getJobHistories, "work-history");

  const sortedJobs = useMemo(() => {
    if (!jobs.length) return [];

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

    return [...jobs].sort((a: JobExperience, b: JobExperience) => {
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
    });
  }, [jobs]);

  if (loading)
    return (
      <SectionWrapper id="work-history" className={sectionStyles.secondary}>
        <SkeletonLoader variant="text" className="h-10 w-1/3 mx-auto mb-8" />
        <div className="space-y-6">
          <SkeletonLoader variant="card" count={3} />
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

  if (!sortedJobs.length)
    return (
      <SectionWrapper id="work-history" className={sectionStyles.secondary}>
        <p className="text-center text-gray-400">No job data found.</p>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="work-history" className={sectionStyles.secondary}>
      <h2 className={sharedStyles.sectionHeading}>Work Experience</h2>
      <motion.div
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedJobs.map((job) => (
          <motion.div key={job.id} variants={animations.itemVariants}>
            <Card className="hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-[1.02] mb-6 border-l-4 border-l-transparent hover:border-l-[#6366f1]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <img
                  src={job.icon}
                  alt={`${job.company} logo`}
                  loading="lazy"
                  width={64}
                  height={64}
                  decoding="async"
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-2">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
              </div>
              <ul className="text-gray-400 list-disc list-inside space-y-2 ml-2">
                {job.description.map((desc, index) => (
                  <li key={index} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
});

JobExperience.displayName = "JobExperience";

export default JobExperience;
