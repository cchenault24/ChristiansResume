import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import SectionWrapper from "./SectionWrapper";
import { listCertificates } from "../graphql/queries";

interface Certificate {
  __typename: "Certificate";
  id: string;
  title: string;
  type?: string;
  company: string;
  completionDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

type CertificateMapping = {
  [key: string]: {
    icon: string;
    certificate: string;
  };
};

const client = generateClient();

const certificateMappings: CertificateMapping = {
  Meta: {
    icon: "/certificate-icon.png",
    certificate: "meta-fee-certificate.pdf",
  },
  Scrimba: {
    icon: "/react.png",
    certificate: "scrimba_adv_react.pdf",
  },
  Leidos: {
    icon: "/csm.png",
    certificate: "",
  },
  IBM: {
    icon: "/ibm-2.png",
    certificate: "ibm-certificate-2.pdf",
  },
  "IBM-Microservices": {
    icon: "/ibm.png",
    certificate: "ibm-certificate.pdf",
  },
};

const getCertificateIcon = (company: string): string =>
  certificateMappings[company]?.icon || "/default-icon.png";

const getCertificatePdf = (company: string): string =>
  certificateMappings[company]?.certificate || "";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-subtle hover-scale glassmorphism flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={getCertificateIcon(cert.company)}
                alt={cert.company}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-gray-400"> {cert.company}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-2">{cert.type}</p>
            <p className="text-gray-400 mb-4">
              Completed: {cert.completionDate}
            </p>
            <p className="text-gray-400 text-sm">{cert.description}</p>
            <div className="flex-grow" />
            <a
              href={getCertificatePdf(cert.company)}
              className="text-accent hover:text-secondary transition mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
