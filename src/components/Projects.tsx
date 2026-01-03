import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { animations } from "../utils/animations";
import { useDataFetching } from "../hooks/useDataFetching";
import { Project } from "../types";
import { sharedStyles, cardStyles, sectionStyles } from "../styles/shared";
import { listProjects } from "../graphql/queries";
import Card from "./Card";
import client from "../lib/graphql";
import SkeletonLoader from "./SkeletonLoader";

const Projects: React.FC = memo(() => {
  const {
    data: projects,
    loading,
    error,
  } = useDataFetching<Project>(() =>
    client
      .graphql({
        query: listProjects,
      })
      .then((response) => response.data.listProjects.items)
  );

  if (loading)
    return (
      <SectionWrapper id="projects" className={sectionStyles.secondary}>
        <SkeletonLoader variant="text" className="h-10 w-1/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkeletonLoader variant="card" count={4} className="h-64" />
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="projects" className={sectionStyles.secondary}>
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>
            Error Loading Projects
          </h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="projects" className={sectionStyles.secondary}>
      <h2 className={sharedStyles.sectionHeading}>Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={animations.itemVariants}
            whileHover={animations.cardHover}
          >
            <Card className={`${cardStyles.project} ${cardStyles.glass}`}>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex-grow" />
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-800 text-accent px-2 py-1 rounded transition-colors hover:bg-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-secondary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-3 py-2 min-h-[44px] flex items-center font-medium"
                    aria-label={`View live demo of ${project.title} (opens in new tab)`}
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-3 py-2 min-h-[44px] flex items-center font-medium"
                    aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
});

Projects.displayName = "Projects";

export default Projects;
