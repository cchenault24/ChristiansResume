import React from "react";

const certificates = [
  {
    title: "Certified React Developer",
    provider: "Udemy",
    date: "Issued: June 2022",
  },
  {
    title: "TypeScript Mastery",
    provider: "Pluralsight",
    date: "Issued: April 2021",
  },
  {
    title: "Frontend Web Development",
    provider: "freeCodeCamp",
    date: "Issued: March 2020",
  },
];

const Certificates: React.FC = () => {
  return (
    <section
      id="certificates"
      className="w-full bg-gray-900 text-light py-16 px-6"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-lg shadow-subtle hover:shadow-neon transition"
            >
              <h3 className="text-2xl font-bold">{cert.title}</h3>
              <p className="text-gray-400">{cert.provider}</p>
              <p className="text-gray-400">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
