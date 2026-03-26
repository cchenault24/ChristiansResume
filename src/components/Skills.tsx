import { motion } from "framer-motion";
import React, { memo } from "react";
import { useDataFetching } from "../hooks/useDataFetching";
import { getSkills } from "../lib/firestore";
import { cardStyles, sectionStyles, sharedStyles } from "../styles/shared";
import { Skill } from "../types";
import { animations } from "../utils/animations";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";
import SkeletonLoader from "./SkeletonLoader";

const Skills: React.FC = memo(() => {
  const {
    data: skills,
    loading,
    error,
  } = useDataFetching<Skill>(getSkills, "skills");

  const orderedSkills = React.useMemo(() => {
    if (!skills.length) return {};
    return Object.fromEntries(
      Object.entries(
        skills.reduce((acc: Record<string, Skill[]>, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {})
      )
        .sort(([a], [b]) => {
          if (a.toLowerCase().includes("technical")) return -1;
          if (b.toLowerCase().includes("technical")) return 1;
          if (a.toLowerCase().includes("soft")) return 1;
          if (b.toLowerCase().includes("soft")) return -1;
          return a.localeCompare(b);
        })
        .map(([category, skillsArray]) => [
          category,
          skillsArray.sort((a, b) => a.skill.localeCompare(b.skill)),
        ])
    );
  }, [skills]);

  if (loading)
    return (
      <SectionWrapper id="skills" className={sectionStyles.primary}>
        <SkeletonLoader variant="text" className="h-10 w-1/3 mx-auto mb-8" />
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <SkeletonLoader variant="text" className="h-6 w-1/4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkeletonLoader variant="card" count={4} className="h-32" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {orderedSkills[category].map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={animations.itemVariants}
                  whileHover={animations.cardHover}
                >
                  <Card className={`${cardStyles.skill} ${cardStyles.glass}`}>
                    <h3 className="text-xl font-bold mb-2">{skill.skill}</h3>
                    <p className="text-gray-400">{skill.descriptor}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
});

Skills.displayName = "Skills";

export default Skills;
