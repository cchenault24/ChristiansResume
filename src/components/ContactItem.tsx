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
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className="text-light text-xl hover:text-accent transition-colors duration-300 ml-9 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1 min-h-[44px]"
      aria-label={`${title}: ${value}${href !== "#" ? " (opens in new tab)" : ""}`}
    >
      {value}
    </a>
  </motion.div>
);

export default ContactItem;
