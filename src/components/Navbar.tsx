import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  to: string;
  children: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  // @ts-ignore - react-scroll Link component props are not fully typed
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
    activeClass="text-accent"
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
        >
          <nav className="bg-gray-800 dark:backdrop-blur-md dark:bg-black/30 rounded-full px-6 py-4 border border-gray-200 dark:border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-center">
              <NavLink to="about">About</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="work-history">Experience</NavLink>
              <NavLink to="education">Education</NavLink>
              <NavLink to="certificates">Certificates</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
