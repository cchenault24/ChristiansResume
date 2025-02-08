import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { sharedStyles } from "../styles/shared";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="bg-gray-800 text-light">
      <motion.div
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={`${sharedStyles.sectionHeading} mb-2`}
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
    </SectionWrapper>
  );
};

export default Contact;
