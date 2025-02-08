import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listCertificates } from "../graphql/queries";
import { animations } from "../utils/animations";
import { motion } from "framer-motion";

interface Certificate {
  __typename: "Certificate";
  id: string;
  title: string;
  type?: string | null;
  company: string;
  completionDate: string;
  description: string;
  icon: string;
  certificate: string;
  createdAt: string;
  updatedAt: string;
}

const client = generateClient();

const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await client.graphql({
          query: listCertificates,
        });
        setCertificates(response.data.listCertificates.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading)
    return <p className="text-center text-gray-400">Loading Certificates...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!certificates.length)
    return <p className="text-center text-gray-400">No certificates found.</p>;

  return (
    <SectionWrapper id="certificates" className="bg-gray-900 text-light">
      <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={animations.itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-subtle hover:shadow-lg 
                     transition-all duration-300 hover:scale-105 glassmorphism 
                     flex flex-col min-h-[420px]"
          >
            <div className="flex items-center gap-4 h-20">
              <img
                src={cert.icon}
                alt={cert.company}
                className="w-24 h-24 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-light">{cert.title}</h3>
                <p className="text-gray-400">
                  {cert.company} • {cert.type}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col flex-1">
              <p className="text-gray-400 mb-4">
                Completed: {cert.completionDate}
              </p>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </div>
            <div className="mt-6">
              <a
                href={cert.certificate}
                className="text-accent hover:text-secondary transition block 
                         hover:translate-x-2 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certificates;
