import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="backdrop-blur-md bg-black/30 rounded-full px-6 py-4 border border-white/10">
        <div className="flex justify-center items-center gap-6">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Skills
          </Link>
          <Link
            to="work-history"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Experience
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Education
          </Link>
          <Link
            to="certificates"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Certificates
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-300 hover:text-accent cursor-pointer transition text-sm"
            activeClass="text-accent"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
