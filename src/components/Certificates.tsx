import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { animations } from "../utils/animations";
import { useDataFetching } from "../hooks/useDataFetching";
import { Certificate } from "../types";
import { sharedStyles, sectionStyles, cardStyles } from "../styles/shared";
import { listCertificates } from "../graphql/queries";
import { generateClient } from "@aws-amplify/api";
import Card from "./Card";
const client = generateClient();

const Certificates: React.FC = () => {
  const {
    data: certificates,
    loading,
    error,
  } = useDataFetching<Certificate>(() =>
    client
      .graphql({
        query: listCertificates,
      })
      .then((response) =>
        response.data.listCertificates.items.sort(
          (a, b) =>
            new Date(b.completionDate).getTime() -
            new Date(a.completionDate).getTime()
        )
      )
  );

  if (loading)
    return (
      <SectionWrapper id="certificates" className={sectionStyles.secondary}>
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[420px] bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    );

  if (error)
    return (
      <SectionWrapper id="certificates" className={sectionStyles.secondary}>
        <div className="text-center text-red-500">
          <h2 className={sharedStyles.sectionHeading}>
            Error Loading Certificates
          </h2>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );

  return (
    <SectionWrapper id="certificates" className={sectionStyles.secondary}>
      <h2 className={sharedStyles.sectionHeading}>Certificates</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert) => (
          <motion.div key={cert.id} variants={animations.itemVariants}>
            <Card
              className={`${cardStyles.base} ${cardStyles.hover} ${cardStyles.glass} flex flex-col min-h-[420px] p-6`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={cert.icon}
                    alt={cert.company}
                    className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 overflow-hidden">
                    <h3
                      className="text-xl font-bold text-light break-words line-clamp-2"
                      title={cert.title}
                    >
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <p
                  className="text-gray-400 line-clamp-1"
                  title={`${cert.company} • ${cert.type}`}
                >
                  {cert.company} • {cert.type}
                </p>
              </div>
              <div className="mt-8 flex flex-col flex-1">
                <p className="text-gray-400 mb-4">
                  Completed: {cert.completionDate}
                </p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
              {cert.certificate && (
                <div className="mt-6">
                  <a
                    href={cert.certificate}
                    className={sharedStyles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate →
                  </a>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certificates;
