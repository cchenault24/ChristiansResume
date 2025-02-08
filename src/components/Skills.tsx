import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { animations } from "../utils/animations";
import { useDataFetching } from "../hooks/useDataFetching";
import { Skill } from "../types";
import { sharedStyles, sectionStyles, cardStyles } from "../styles/shared";
import { generateClient } from "aws-amplify/api";
import { listSkills } from "../graphql/queries";

const client = generateClient();

const Skills: React.FC = () => {
  const {
    data: skills,
    loading,
    error,
  } = useDataFetching<Skill>(() =>
    client
      .graphql({
        query: listSkills,
      })
      .then((response) => response.data.listSkills.items)
  );

  const orderedSkills = React.useMemo(() => {
    if (!skills.length) return {};
    return Object.fromEntries(
      Object.entries(
        skills.reduce((acc: Record<string, Skill[]>, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {})
      ).sort(([a], [b]) => {
        if (a.toLowerCase().includes("technical")) return -1;
        if (b.toLowerCase().includes("technical")) return 1;
        if (a.toLowerCase().includes("soft")) return 1;
        if (b.toLowerCase().includes("soft")) return -1;
        return a.localeCompare(b);
      })
    );
  }, [skills]);

  if (loading)
    return (
      <SectionWrapper id="skills" className={sectionStyles.primary}>
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-gray-700 rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-32 bg-gray-700 rounded-lg"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="skills" className={sectionStyles.primary}>
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>Error Loading Skills</h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="skills" className={sectionStyles.primary}>
      <h2 className={sharedStyles.sectionHeading}>Skills</h2>
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
                  className={`${cardStyles.skill} ${cardStyles.glass}`}
                >
                  <h3 className="text-xl font-bold mb-2">{skill.skill}</h3>
                  <p className="text-gray-400">{skill.descriptor}</p>
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
