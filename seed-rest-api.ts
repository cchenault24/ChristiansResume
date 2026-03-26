// Seed data using Firebase REST API to avoid gRPC issues

const FIREBASE_PROJECT_ID = "christiansresume-42c08";
const FIRESTORE_API_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

// Read service account for OAuth token
import serviceAccount from "./serviceAccountKey.json";
import { GoogleAuth } from "google-auth-library";

const auth = new GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/datastore"],
});

async function getAccessToken(): Promise<string> {
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  if (!tokenResponse.token) {
    throw new Error("Failed to get access token");
  }
  return tokenResponse.token;
}

async function deleteCollection(collectionName: string, token: string) {
  // List all documents
  const listUrl = `${FIRESTORE_API_URL}/${collectionName}`;
  const listResponse = await fetch(listUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!listResponse.ok) {
    console.log(`⚠️  Collection ${collectionName} doesn't exist or is empty`);
    return;
  }

  const data = await listResponse.json();
  const documents = data.documents || [];

  // Delete each document
  for (const doc of documents) {
    await fetch(doc.name, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  console.log(`✅ Cleared ${collectionName} collection (${documents.length} documents)`);
}

// Define types for Firestore field values
interface FirestoreFieldValue {
  stringValue?: string;
  integerValue?: string;
  booleanValue?: boolean;
  arrayValue?: {
    values: { stringValue: string }[];
  };
}

type FirestoreFields = Record<string, FirestoreFieldValue>;

// Define a type for document data that can have various primitive values
type DocumentData = Record<string, string | number | boolean | string[]>;

async function addDocument(collectionName: string, data: DocumentData, token: string) {
  const url = `${FIRESTORE_API_URL}/${collectionName}`;

  // Convert data to Firestore format
  const fields: FirestoreFields = {};
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      fields[key] = {
        arrayValue: {
          values: value.map((v) => ({ stringValue: v })),
        },
      };
    } else if (typeof value === "string") {
      fields[key] = { stringValue: value };
    } else if (typeof value === "number") {
      fields[key] = { integerValue: value.toString() };
    } else if (typeof value === "boolean") {
      fields[key] = { booleanValue: value };
    }
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to add document: ${error}`);
  }
}

// Data
const jobHistoryData = [
  {
    title: "Senior Front End Engineer",
    company: "Solidus Technical Solutions",
    location: "Remote",
    startDate: "02/2025",
    endDate: "Present",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQFQWvXsVMr9Dw/company-logo_200_200/company-logo_200_200/0/1630637044288/solidus_technical_solutions_logo?e=1748476800&v=beta&t=2QmzC5xDqBNvz_PEf5Z8w4Mz1GfRPqhp9BNnvJ7LQYA",
    description: [
      "Led large-scale, multi-phase pull requests (PRs) to transition key features to a more scalable and modular front-end microservice architecture.",
      "Established and enforced front-end best practices for code review, API integration, and automated testing, raising engineering standards across the team.",
      "Collaborated cross-functionally with back-end, DevOps, and product teams to ensure seamless rollouts and minimize disruption in the CI/CD pipeline.",
      "Mentored team members in TypeScript, React, and testing best practices (Jest, React Testing Library, Cucumber/Gherkin), driving higher code quality and reliability.",
    ],
  },
  {
    title: "Senior Front-End Engineer",
    company: "Pepper",
    location: "Remote",
    startDate: "06/2024",
    endDate: "01/2025",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFxLj5lKNn-9g/company-logo_200_200/company-logo_200_200/0/1719510849777/pepper_financial_logo?e=1748476800&v=beta&t=xQfEq8KZnTv7mLQhqC0IqxTL5Y7KFj5bH8vP7xJ5rFw",
    description: [
      "Engineered scalable web applications using React, TypeScript, and GraphQL, delivering features that contributed to a 15% increase in user feature adoption.",
      "Authored comprehensive frontend technical plans to streamline development, reducing delivery timelines by 20% through optimized architecture design and state management strategies.",
      "Spearheaded team-wide quality improvements by introducing an AI-powered code reviewer, cutting bug-related revisions by 30%.",
      "Partnered with UX designers and sales teams to ensure product features met user needs and business goals.",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Amazon",
    location: "Arlington, VA",
    startDate: "06/2022",
    endDate: "06/2024",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: [
      "Led the development and optimization of 20+ modular UI components for large-scale web applications, improving user experience and engagement by 35%.",
      "Enhanced application scalability and performance by redesigning the React Context API and implementing advanced state management techniques, reducing latency in data handling.",
      "Collaborated with backend engineers, UX designers, and stakeholders to deliver high-impact features aligned with business objectives.",
      "Conducted over 300 code reviews, mentoring 4 junior engineers and improving overall code quality by 50%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Leidos",
    location: "Remote",
    startDate: "05/2018",
    endDate: "06/2022",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Leidos_logo.svg",
    description: [
      "Directed a team of 5 engineers to transition legacy systems to React, improving project efficiency and increasing sprint completion rates by 40%.",
      "Established and implemented a peer-driven code review process, reducing bug rates by 25% and fostering collaboration across the team.",
      "Utilized Axios and React Redux for seamless API integration, improving system responsiveness and reliability.",
      "Led the development of a mission-critical defense project, ensuring compliance with stringent requirements while enhancing system usability.",
    ],
  },
];

const educationData = [
  {
    university: "James Madison University",
    degree: "Bachelor of Science in Computer Science",
    location: "Harrisonburg, VA",
    start: "08/2014",
    end: "05/2018",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/1e/James_Madison_University_seal.svg",
    description: "Study Abroad: Completed a semester in Europe, focusing on Web Design and Development. Relevant Coursework: Data Structures and Algorithms, Software Engineering Principles, Web Development, Database Systems, User Interface Design.",
  },
];

const certificatesData = [
  {
    title: "Front-End Developer Professional Certificate",
    company: "Meta",
    type: "Professional Certificate",
    description: "Comprehensive certification covering modern front-end development practices, React, JavaScript, and responsive web design.",
    completionDate: "2023",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    certificate: "",
  },
  {
    title: "Professional React Developer Certification",
    company: "Scrimba",
    type: "Professional Certificate",
    description: "Advanced React development certification focusing on hooks, state management, and modern React patterns.",
    completionDate: "2023",
    icon: "https://scrimba.com/favicon.ico",
    certificate: "",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    company: "IBM",
    type: "Professional Certificate",
    description: "Professional certification in building server-side applications using Node.js and Express framework.",
    completionDate: "2022",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    certificate: "",
  },
  {
    title: "Application Development Using Microservices and Serverless",
    company: "IBM",
    type: "Professional Certificate",
    description: "Professional certification covering microservices architecture and serverless computing patterns.",
    completionDate: "2022",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    certificate: "",
  },
];

const projectsData = [
  {
    title: "Dynamic Portfolio Website",
    description: "Built a single-page application (SPA) to showcase projects and achievements, utilizing dynamic routing and responsive design. Note: Migrated from AWS Amplify to Firebase for improved scalability.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "NextUI", "Vite", "Firebase"],
    link: "https://www.christianchenault.com",
    github: "https://github.com/cchenault24",
  },
];

const skillsData = [
  { skill: "TypeScript", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "JavaScript", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "React.js", descriptor: "Expert level", category: "Technical Skills" },
  { skill: "Next.js", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "AWS (Amplify, S3, Lambda, CloudWatch)", descriptor: "Experienced", category: "Technical Skills" },
  { skill: "CI/CD Pipelines", descriptor: "Skilled", category: "Technical Skills" },
  { skill: "Responsive Web Design", descriptor: "Expert level", category: "Technical Skills" },
  { skill: "Figma", descriptor: "Proficient", category: "Technical Skills" },
  { skill: "CSS", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "Tailwind CSS", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "Styled Components", descriptor: "Proficient", category: "Technical Skills" },
  { skill: "Redux", descriptor: "Deep experience", category: "Technical Skills" },
  { skill: "React Context", descriptor: "Expert level", category: "Technical Skills" },
  { skill: "GraphQL", descriptor: "Advanced proficiency", category: "Technical Skills" },
  { skill: "REST APIs", descriptor: "Expert level", category: "Technical Skills" },
  { skill: "Performance Optimization", descriptor: "Expert level", category: "Technical Skills" },
  { skill: "Jest", descriptor: "Proficient", category: "Technical Skills" },
  { skill: "React Testing Library", descriptor: "Proficient", category: "Technical Skills" },
  { skill: "Cypress", descriptor: "Experienced", category: "Technical Skills" },
  { skill: "Leadership & Mentorship", descriptor: "Experienced in guiding teams", category: "Soft Skills" },
  { skill: "Effective Communication", descriptor: "Adept at translating complex concepts", category: "Soft Skills" },
  { skill: "Problem-Solving", descriptor: "Innovative solutions to challenges", category: "Soft Skills" },
  { skill: "Collaboration", descriptor: "Cross-functional team experience", category: "Soft Skills" },
];

async function seed() {
  try {
    console.log("🌱 Starting Firebase seeding via REST API...\n");

    const token = await getAccessToken();
    console.log("✅ Authenticated with Firebase\n");

    // Clear collections
    console.log("🧹 Clearing existing data...");
    await deleteCollection("jobHistory", token);
    await deleteCollection("education", token);
    await deleteCollection("certificates", token);
    await deleteCollection("projects", token);
    await deleteCollection("skills", token);
    console.log("");

    // Seed data
    console.log("📦 Seeding new data...");

    for (const job of jobHistoryData) {
      await addDocument("jobHistory", job, token);
    }
    console.log(`✅ Seeded ${jobHistoryData.length} job history documents`);

    for (const edu of educationData) {
      await addDocument("education", edu, token);
    }
    console.log(`✅ Seeded ${educationData.length} education documents`);

    for (const cert of certificatesData) {
      await addDocument("certificates", cert, token);
    }
    console.log(`✅ Seeded ${certificatesData.length} certificate documents`);

    for (const project of projectsData) {
      await addDocument("projects", project, token);
    }
    console.log(`✅ Seeded ${projectsData.length} project documents`);

    for (const skill of skillsData) {
      await addDocument("skills", skill, token);
    }
    console.log(`✅ Seeded ${skillsData.length} skill documents`);

    console.log("\n✨ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
