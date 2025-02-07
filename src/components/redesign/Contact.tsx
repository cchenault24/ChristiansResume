import React from "react";
import SectionWrapper from "./SectionWrapper";

const Contact: React.FC = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-gradient-to-br from-dark to-gray-900 text-light"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="py-3 px-4 rounded-lg bg-gray-800 text-light border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="py-3 px-4 rounded-lg bg-gray-800 text-light border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="py-3 px-4 rounded-lg bg-gray-800 text-light border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-dark py-3 px-6 rounded-lg font-medium hover-scale"
          >
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
