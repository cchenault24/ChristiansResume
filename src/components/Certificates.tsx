import { motion } from "framer-motion";
import React, { useMemo, memo } from "react";
import { listCertificates } from "../graphql/queries";
import { useDataFetching } from "../hooks/useDataFetching";
import client from "../lib/graphql";
import { cardStyles, sectionStyles, sharedStyles } from "../styles/shared";
import { Certificate } from "../types";
import { animations } from "../utils/animations";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";
import SkeletonLoader from "./SkeletonLoader";

const Certificates: React.FC = memo(() => {
  const {
    data: certificates,
    loading,
    error,
  } = useDataFetching<Certificate>(() =>
    client
      .graphql({
        query: listCertificates,
      })
      .then((response) => response.data.listCertificates.items)
  );

  const sortedCertificates = useMemo(() => {
    return [...certificates].sort(
      (a: Certificate, b: Certificate) =>
        new Date(b.completionDate).getTime() -
        new Date(a.completionDate).getTime()
    );
  }, [certificates]);

  if (loading)
    return (
      <SectionWrapper id="certificates" className={sectionStyles.secondary}>
        <SkeletonLoader variant="text" className="h-10 w-1/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkeletonLoader variant="card" count={3} className="h-[420px]" />
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
        {sortedCertificates.map((cert) => (
          <motion.div key={cert.id} variants={animations.itemVariants}>
            <Card
              className={`${cardStyles.base} ${cardStyles.hover} ${cardStyles.glass} flex flex-col min-h-[420px] p-6`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={cert.icon}
                    alt={`${cert.company} certificate icon`}
                    loading="lazy"
                    width={64}
                    height={64}
                    decoding="async"
                    className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 overflow-hidden">
                    <h3
                      className="text-xl font-bold text-light break-words line-clamp-2 mb-1"
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
                    className={`${sharedStyles.link} focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1 min-h-[44px] inline-flex items-center`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate (opens in new tab)`}
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
});

Certificates.displayName = "Certificates";

export default Certificates;
