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

  const organizedSkills = React.useMemo(() => {
    if (!skills.length) return { technical: {}, soft: [], orderedSubcategories: [] };

    const technical: Record<string, Skill[]> = {};
    const soft: Skill[] = [];

    // Define preferred order for subcategories
    const subcategoryOrder = [
      "Frontend Frameworks",
      "Languages",
      "Backend",
      "State Management",
      "Styling & Design",
      "Build Tools",
      "Cloud & Databases",
      "Testing",
      "Version Control & DevOps",
      "Performance",
    ];

    skills.forEach(skill => {
      if (skill.category.toLowerCase() === "technical") {
        const subcategory = skill.subcategory || "Other";
        if (!technical[subcategory]) technical[subcategory] = [];
        technical[subcategory].push(skill);
      } else {
        soft.push(skill);
      }
    });

    // Sort skills within each subcategory
    Object.keys(technical).forEach(subcategory => {
      technical[subcategory].sort((a, b) => a.skill.localeCompare(b.skill));
    });

    soft.sort((a, b) => a.skill.localeCompare(b.skill));

    // Create ordered list of subcategories that exist in the data
    const orderedSubcategories = subcategoryOrder.filter(sub => technical[sub]);

    return { technical, soft, orderedSubcategories };
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
        {/* Technical Skills with Subcategories */}
        <motion.div variants={animations.itemVariants} className="mb-12">
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">
            Technical Skills
          </h3>
          {organizedSkills.orderedSubcategories.map((subcategory) => (
              <div key={subcategory} className="mb-8">
                <h4 className="text-lg font-medium text-gray-300 mb-4">
                  {subcategory}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {organizedSkills.technical[subcategory].map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={animations.itemVariants}
                      whileHover={animations.cardHover}
                    >
                      <Card className={`${cardStyles.skill} ${cardStyles.glass}`}>
                        <h5 className="text-xl font-bold mb-2">{skill.skill}</h5>
                        <p className="text-gray-400">{skill.descriptor}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
        </motion.div>

        {/* Soft Skills */}
        {organizedSkills.soft.length > 0 && (
          <motion.div variants={animations.itemVariants}>
            <h3 className="text-2xl font-semibold text-accent mb-6 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizedSkills.soft.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={animations.itemVariants}
                  whileHover={animations.cardHover}
                >
                  <Card className={`${cardStyles.skill} ${cardStyles.glass}`}>
                    <h5 className="text-xl font-bold mb-2">{skill.skill}</h5>
                    <p className="text-gray-400">{skill.descriptor}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionWrapper>
  );
});

Skills.displayName = "Skills";

export default Skills;
