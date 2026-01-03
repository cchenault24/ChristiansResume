import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { rafThrottle } from "../utils/throttle";

const ScrollProgress: React.FC = memo(() => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Use requestAnimationFrame for smooth performance
    const throttledUpdate = rafThrottle(updateScrollProgress);

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", throttledUpdate, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", throttledUpdate);
  }, []);

  if (scrollProgress === 0) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-[49]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="h-full bg-accent shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
