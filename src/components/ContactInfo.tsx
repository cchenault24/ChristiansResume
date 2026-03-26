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
      isLink: true,
    },
    {
      title: "Email",
      href: "mailto:cchenault24@yahoo.com",
      value: "cchenault24@yahoo.com",
      icon: <MdEmail className="w-6 h-6" />,
      isLink: true,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/christianchenault",
      value: "Christian Chenault",
      icon: <FaLinkedin className="w-6 h-6" />,
      isLink: true,
    },
    {
      title: "GitHub",
      href: "https://github.com/cchenault24",
      value: "cchenault24",
      icon: <FaGithub className="w-6 h-6" />,
      isLink: true,
    },
    {
      title: "Location",
      href: "",
      value: "Richmond, VA",
      icon: <MdLocationOn className="w-6 h-6" />,
      isLink: false,
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
          hover:border-[#6366f1]/50
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.3)]
          transition-all duration-300
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
