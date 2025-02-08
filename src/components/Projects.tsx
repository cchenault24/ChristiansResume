import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listProjects } from "../graphql/queries";
import { animations } from "../utils/animations";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string | null;
  github?: string | null;
  createdAt: string;
  updatedAt: string;
  __typename: string;
}

const client = generateClient();

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.graphql({
          query: listProjects,
        });
        setProjects(response.data.listProjects.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return <p className="text-center text-gray-400">Loading Projects...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!projects.length)
    return <p className="text-center text-gray-400">No projects found.</p>;

  return (
    <SectionWrapper id="projects" className="bg-gray-900 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
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
            className="card-base card-hover"
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
