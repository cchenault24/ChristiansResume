import { motion } from "framer-motion";
import { memo } from "react";
import { Link, scroller } from "react-scroll";
import { animations } from "../utils/animations";
import { shouldReduceAnimations, isMobile } from "../utils/device";

const HeroSection: React.FC = memo(() => {
  const reduceAnimations = shouldReduceAnimations();
  const isMobileDevice = isMobile();

  // Simplified scroll button animation for mobile
  const scrollButtonAnimation = reduceAnimations
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.5, duration: 0.3 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1, y: [0, 10, 0] },
        transition: {
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        },
      };

  const buttonHoverProps = isMobileDevice
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      };

  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen bg-light dark:bg-gradient-to-br dark:from-dark dark:to-gray-900 text-dark-light dark:text-light flex items-center justify-center px-6 relative pt-20 md:pt-24"
      {...animations.fadeIn}
    >
      <div className="w-full max-w-7xl text-center">
        <motion.div className="mb-8" {...animations.scaleIn}>
          <img
            src="/avatar.png"
            alt="Christian Chenault - Senior Front-End Engineer"
            width={256}
            height={256}
            fetchpriority="high"
            className="w-64 h-64 rounded-full mx-auto border-4 border-accent shadow-lg"
          />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-dark dark:text-light">
          Hi, I'm <span className="text-accent">Christian Chenault</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Crafting immersive, modern, and user-friendly web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.div {...buttonHoverProps}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-accent text-white py-3 px-6 rounded-lg font-medium shadow-neon hover:bg-secondary hover:shadow-secondary transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark min-h-[44px] min-w-[140px] flex items-center justify-center cursor-pointer"
              aria-label="View projects section"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div {...buttonHoverProps}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="border border-accent text-accent py-3 px-6 rounded-lg font-medium hover:bg-accent hover:text-white transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark min-h-[44px] min-w-[140px] flex items-center justify-center cursor-pointer"
              aria-label="Go to contact section"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        {...scrollButtonAnimation}
      >
        <button
          onClick={() => {
            scroller.scrollTo("about", {
              smooth: true,
              duration: 500,
              offset: -80,
            });
          }}
          className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors min-w-[56px] min-h-[56px] flex flex-col items-center justify-center"
          aria-label="Scroll down to see more content"
        >
          <span className="text-sm mb-2">Scroll for more</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </motion.div>
    </motion.section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
