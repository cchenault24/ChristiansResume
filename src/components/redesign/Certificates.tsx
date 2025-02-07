import React from "react";
import SectionWrapper from "./SectionWrapper";
import { useGetData } from "../data/data";

const Certificates: React.FC = () => {
  const { education } = useGetData();
  const { certificates } = education;

  return (
    <SectionWrapper id="certificates" className="bg-gray-900 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-subtle hover-scale glassmorphism"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={cert.icon} alt={cert.company} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-gray-400">{cert.company}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-2">{cert.type}</p>
            <p className="text-gray-400 mb-4">
              Completed: {cert.completionDate}
            </p>
            <p className="text-gray-400 text-sm">{cert.description}</p>
            {cert.certificate && (
              <a
                href={cert.certificate}
                className="text-accent hover:text-secondary transition mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
