import { motion } from "framer-motion";
import React, { memo, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { sharedStyles } from "../styles/shared";
import { animations } from "../utils/animations";
import { rafThrottle } from "../utils/throttle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionWrapper from "./SectionWrapper";

const Contact: React.FC = memo(() => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      // Show button when user is near the bottom (within last 10% of scroll)
      setShowScrollToTop(scrollPercentage > 90);
    };

    const throttledCheck = rafThrottle(checkScrollPosition);
    window.addEventListener("scroll", throttledCheck, { passive: true });
    checkScrollPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledCheck);
    };
  }, []);

  return (
    <SectionWrapper id="contact" className="bg-gray-800 text-light relative">
      <motion.div
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={sharedStyles.sectionHeading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>

      {showScrollToTop && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => {
              scroller.scrollTo("hero", {
                smooth: true,
                duration: 500,
                offset: 0,
              });
            }}
            className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors min-w-[56px] min-h-[56px] flex flex-col items-center justify-center"
            aria-label="Scroll to top"
          >
            <span className="text-sm mb-2">Scroll to top</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;
