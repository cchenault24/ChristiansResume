import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = [
  "hero",
  "about",
  "work-history",
  "skills",
  "projects",
  "education",
  "certificates",
  "contact",
];

const ScrollNavigation: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", updateCurrentSection);
    updateCurrentSection(); // Initial check

    return () => window.removeEventListener("scroll", updateCurrentSection);
  }, []);

  const scrollToSection = (direction: "up" | "down") => {
    let targetIndex: number;
    
    if (direction === "up") {
      targetIndex = Math.max(0, currentSectionIndex - 1);
    } else {
      targetIndex = Math.min(sectionIds.length - 1, currentSectionIndex + 1);
    }

    const targetSection = document.getElementById(sectionIds[targetIndex]);
    if (targetSection) {
      const offset = 80; // Account for navbar
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const canScrollUp = currentSectionIndex > 0;
  const canScrollDown = currentSectionIndex < sectionIds.length - 1 && currentSectionIndex > 0;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <AnimatePresence>
        {canScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection("up")}
            className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors min-w-[56px] min-h-[56px] flex items-center justify-center"
            aria-label="Scroll to previous section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollDown && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection("down")}
            className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors min-w-[56px] min-h-[56px] flex items-center justify-center"
            aria-label="Scroll to next section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollNavigation;
