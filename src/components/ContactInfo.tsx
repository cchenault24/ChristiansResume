import React from "react";
import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Card from "./Card";
import ContactItem from "./ContactItem";
import { sharedStyles } from "../styles/shared";
import { animations } from "../utils/animations";

const ContactInfo: React.FC = () => {
  const contactData = [
    {
      title: "Phone",
      href: "tel:+18042918744",
      value: "(804) 291-8744",
      icon: <BsTelephone className="w-6 h-6" />,
    },
    {
      title: "Email",
      href: "mailto:cchenault24@yahoo.com",
      value: "cchenault24@yahoo.com",
      icon: <MdEmail className="w-6 h-6" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/christianchenault",
      value: "Christian Chenault",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/cchenault24",
      value: "cchenault24",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      title: "Location",
      href: "#",
      value: "Richmond, VA",
      icon: <MdLocationOn className="w-6 h-6" />,
    },
  ];

  return (
    <motion.div
      variants={animations.itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`
          ${sharedStyles.glassmorphism} 
          backdrop-blur-lg 
          bg-opacity-20 
          border border-gray-700
          hover:border-accent
          transition-colors duration-300
        `}
      >
        <div className="flex flex-col gap-8">
          {contactData.map((contact, index) => (
            <ContactItem key={index} {...contact} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;
