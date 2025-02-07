import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen bg-gradient-to-br from-dark to-gray-900 text-light flex items-center justify-center px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm <span className="text-accent">Christian Chenault</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          Crafting immersive, modern, and user-friendly web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            className="bg-accent text-dark py-3 px-6 rounded-lg font-medium shadow-neon hover:bg-secondary hover:shadow-secondary transition"
            whileHover={{ scale: 1.05 }} // Hover animation
            whileTap={{ scale: 0.95 }} // Tap animation
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-accent text-accent py-3 px-6 rounded-lg font-medium hover:bg-accent hover:text-dark transition"
            whileHover={{ scale: 1.05 }} // Hover animation
            whileTap={{ scale: 0.95 }} // Tap animation
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
