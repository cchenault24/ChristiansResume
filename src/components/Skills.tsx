import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listSkills } from "../graphql/queries";
import { animations } from "../utils/animations";
import { motion } from "framer-motion";

interface Skill {
  id: string;
  skill: string;
  descriptor: string;
  category: string;
}

const client = generateClient();

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await client.graphql({
          query: listSkills,
        });
        setSkills(response.data.listSkills.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);
  if (loading)
    return <p className="text-center text-gray-400">Loading Skills...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!skills.length)
    return <p className="text-center text-gray-400">No skills data found.</p>;

  // Group and sort skills by category
  const sortedGroupedSkills = skills.reduce(
    (acc: Record<string, Skill[]>, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  // Convert to array of entries, sort, and convert back to object
  const orderedSkills = Object.fromEntries(
    Object.entries(sortedGroupedSkills).sort(([a], [b]) => {
      if (a.toLowerCase().includes("technical")) return -1;
      if (b.toLowerCase().includes("technical")) return 1;
      if (a.toLowerCase().includes("soft")) return 1;
      if (b.toLowerCase().includes("soft")) return -1;
      return a.localeCompare(b);
    })
  );

  return (
    <SectionWrapper id="skills" className="bg-gray-800 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <motion.div
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.keys(orderedSkills).map((category) => (
          <motion.div
            key={category}
            variants={animations.itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">
              {category} Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {orderedSkills[category].map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-700 p-6 rounded-lg shadow-subtle hover:shadow-neon hover-scale transition"
                >
                  <h4 className="text-xl font-bold">{skill.skill}</h4>
                  <p className="text-gray-400 mt-2">{skill.descriptor}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
