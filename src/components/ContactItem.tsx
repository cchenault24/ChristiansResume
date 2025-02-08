import React from "react";
import { motion } from "framer-motion";

interface ContactItemProps {
  title: string;
  href: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  title,
  href,
  value,
  icon,
  className = "",
}) => (
  <motion.div
    className={`group ${className}`}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <div className="flex items-center gap-3 mb-1">
      <motion.span
        className="text-accent"
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.span>
      <h3 className="text-lg font-medium text-gray-400">{title}</h3>
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-light text-xl hover:text-accent transition-colors duration-300 ml-9 flex items-center gap-2"
    >
      {value}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        →
      </motion.span>
    </a>
  </motion.div>
);

export default ContactItem;
