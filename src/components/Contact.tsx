import React from "react";
import SectionWrapper from "./SectionWrapper";
import { sharedStyles } from "../styles/shared";

const Contact: React.FC = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-gradient-to-br from-dark to-gray-800 text-light"
    >
      <div className={sharedStyles.container}>
        <h2 className={sharedStyles.sectionHeading}>Get In Touch</h2>
        <form className="flex flex-col gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className={sharedStyles.inputBase}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={sharedStyles.inputBase}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className={sharedStyles.inputBase}
          ></textarea>
          <button type="submit" className={sharedStyles.buttonBase}>
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
