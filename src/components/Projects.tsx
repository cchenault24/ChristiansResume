import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { animations } from "../utils/animations";
import { useDataFetching } from "../hooks/useDataFetching";
import { Project } from "../types";
import { sharedStyles } from "../styles/shared";
import { generateClient } from "@aws-amplify/api";
import { listProjects } from "../graphql/queries";

const client = generateClient();

const Projects: React.FC = () => {
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
      <SectionWrapper id="projects" className="bg-gray-900 text-light">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="projects" className="bg-gray-900 text-light">
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>
            Error Loading Projects
          </h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="projects" className="bg-gray-900 text-light">
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
            className={sharedStyles.cardBase}
          >
            <div className="bg-dark p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex-grow" />
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-800 text-accent px-2 py-1 rounded"
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
                    className="text-accent hover:text-secondary transition"
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
