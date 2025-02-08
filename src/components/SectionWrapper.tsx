import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  noVerticalPadding?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = "",
  noVerticalPadding = false,
}) => {
  return (
    <motion.section
      id={id}
      className={`w-full will-change-transform will-change-opacity ${
        !noVerticalPadding && "py-16"
      } px-6 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
