// Seed data using Firebase REST API to avoid gRPC issues

const FIREBASE_PROJECT_ID = "christiansresume-42c08";
const FIRESTORE_API_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

// Read service account for OAuth token
import serviceAccount from "./serviceAccountKey.json";
import { GoogleAuth } from "google-auth-library";

// Skill proficiency levels
enum TechnicalProficiency {
  Expert = "Expert level",
  Advanced = "Advanced proficiency",
  Proficient = "Proficient",
  Intermediate = "Intermediate",
}

// Technical skill subcategories
enum TechnicalSubcategory {
  FrontendFrameworks = "Frontend Frameworks",
  Languages = "Languages",
  Backend = "Backend",
  StateManagement = "State Management",
  StylingDesign = "Styling & Design",
  BuildTools = "Build Tools",
  CloudDatabases = "Cloud & Databases",
  Testing = "Testing",
  VersionControlDevOps = "Version Control & DevOps",
  Performance = "Performance",
}

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
    const deleteUrl = `https://firestore.googleapis.com/v1/${doc.name}`;
    await fetch(deleteUrl, {
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
    title: "Senior Front-End Engineer",
    company: "Solidus Technical Solutions",
    location: "Remote",
    startDate: "02/2025",
    endDate: "Present",
    icon: "/solidus-logo.png",
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
    icon: "/pepper-logo.png",
    description: [
      "Engineered scalable web applications using React, TypeScript, and GraphQL, delivering features that contributed to a 15% increase in user feature adoption.",
      "Authored comprehensive frontend technical plans to streamline development, reducing delivery timelines by 20% through optimized architecture design and state management strategies.",
      "Spearheaded team-wide quality improvements by introducing an AI-powered code reviewer, cutting bug-related revisions by 30%.",
      "Partnered with UX designers and sales teams to ensure product features met user needs and business goals.",
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Amazon",
    location: "Arlington, VA",
    startDate: "06/2022",
    endDate: "06/2024",
    icon: "/amazon-logo.png",
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
    icon: "/leidos-logo.png",
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
    icon: "/jmu-logo.png",
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
    icon: "/react.png",
    certificate: "",
  },
  {
    title: "Professional React Developer Certification",
    company: "Scrimba",
    type: "Professional Certificate",
    description: "Advanced React development certification focusing on hooks, state management, and modern React patterns.",
    completionDate: "2023",
    icon: "/react.png",
    certificate: "",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    company: "IBM",
    type: "Professional Certificate",
    description: "Professional certification in building server-side applications using Node.js and Express framework.",
    completionDate: "2022",
    icon: "/ibm.png",
    certificate: "",
  },
  {
    title: "Application Development Using Microservices and Serverless",
    company: "IBM",
    type: "Professional Certificate",
    description: "Professional certification covering microservices architecture and serverless computing patterns.",
    completionDate: "2022",
    icon: "/ibm.png",
    certificate: "",
  },
];

const projectsData = [
  {
    title: "Momz & Dadz",
    description: "iOS mobile social media platform designed to connect parents and facilitate knowledge sharing. MVP completed featuring hyper-local connections, verified parent communities, and trust-based interactions.",
    technologies: ["React Native", "iOS", "TypeScript", "Mobile Development"],
    link: "https://www.momzanddadz.com/",
    github: "",
  },
  {
    title: "ParlAId",
    description: "AI-powered NFL parlay builder that generates intelligent 3-leg parlays using machine learning and real-time data. Features include algorithmic analysis of player performance, live injury reports, betting odds integration, secure user authentication, and parlay history tracking.",
    technologies: ["React", "TypeScript", "Firebase", "AI/ML", "Real-time APIs"],
    link: "https://nfl-parlay-builder.web.app/",
    github: "",
  },
  {
    title: "FlexC Box",
    description: "Interactive educational tool designed to teach developers CSS Flexbox properties through hands-on experimentation. Features real-time visualization of flex properties and their effects on layout.",
    technologies: ["React", "TypeScript", "CSS3", "AWS Amplify"],
    link: "https://master.d324ql5qcgcpj0.amplifyapp.com/",
    github: "",
  },
  {
    title: "Reliable Elevator Company Website",
    description: "Professional business website for a family-owned elevator service company. Designed and developed a modern, responsive website to showcase services, enhance online presence, and generate client leads.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Responsive Design"],
    link: "https://www.reliableelevatorcompany.com/",
    github: "",
  },
];

const skillsData = [
  // Frontend Frameworks & Libraries (sorted by proficiency: Expert → Advanced → Proficient)
  { skill: "React.js", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.FrontendFrameworks },
  { skill: "Next.js", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.FrontendFrameworks },
  { skill: "React Native", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.FrontendFrameworks },

  // Languages (sorted by proficiency: Expert → Advanced → Proficient)
  { skill: "HTML", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.Languages },
  { skill: "TypeScript", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Languages },
  { skill: "JavaScript", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Languages },
  { skill: "CSS", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Languages },

  // Backend (sorted by proficiency: Expert → Advanced → Proficient)
  { skill: "REST APIs", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.Backend },
  { skill: "GraphQL", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Backend },
  { skill: "Node.js", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.Backend },
  { skill: "Express", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.Backend },

  // State Management (sorted by proficiency: Expert → Advanced → Proficient)
  { skill: "Redux", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.StateManagement },
  { skill: "React Context", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.StateManagement },

  // Styling & Design (sorted by proficiency: Expert → Advanced → Proficient)
  { skill: "Responsive Web Design", descriptor: TechnicalProficiency.Expert, category: "Technical", subcategory: TechnicalSubcategory.StylingDesign },
  { skill: "Tailwind CSS", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.StylingDesign },
  { skill: "Styled Components", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.StylingDesign },
  { skill: "Figma", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.StylingDesign },

  // Build Tools & Bundlers
  { skill: "Vite", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.BuildTools },
  { skill: "Webpack", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.BuildTools },
  { skill: "Turbopack", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.BuildTools },

  // Cloud & Databases
  { skill: "AWS (Amplify, S3, Lambda, CloudWatch)", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.CloudDatabases },
  { skill: "Firebase", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.CloudDatabases },
  { skill: "Vercel", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.CloudDatabases },
  { skill: "Supabase", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.CloudDatabases },

  // Testing
  { skill: "Jest", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.Testing },
  { skill: "React Testing Library", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.Testing },
  { skill: "Cypress", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.Testing },

  // Version Control & DevOps
  { skill: "Git", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.VersionControlDevOps },
  { skill: "GitHub/GitLab/Bitbucket", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.VersionControlDevOps },
  { skill: "CI/CD Pipelines", descriptor: TechnicalProficiency.Proficient, category: "Technical", subcategory: TechnicalSubcategory.VersionControlDevOps },

  // Performance & Optimization
  { skill: "Performance Optimization", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Performance },
  { skill: "Component Optimization", descriptor: TechnicalProficiency.Advanced, category: "Technical", subcategory: TechnicalSubcategory.Performance },

  // Soft Skills
  { skill: "Leadership & Mentorship", descriptor: "Experienced in guiding teams", category: "Soft" },
  { skill: "Code Review", descriptor: "Conducted 300+ reviews, improving code quality", category: "Soft" },
  { skill: "Effective Communication", descriptor: "Adept at translating complex concepts", category: "Soft" },
  { skill: "Problem-Solving", descriptor: "Innovative solutions to challenges", category: "Soft" },
  { skill: "Critical Thinking", descriptor: "Systematic analysis of complex problems", category: "Soft" },
  { skill: "Collaboration", descriptor: "Cross-functional team experience", category: "Soft" },
  { skill: "Stakeholder Management", descriptor: "Partnering with product, UX, and business teams", category: "Soft" },
  { skill: "Agile/Scrum Methodologies", descriptor: "Experienced with sprint planning and agile workflows", category: "Soft" },
  { skill: "Technical Writing", descriptor: "Authored comprehensive technical plans and documentation", category: "Soft" },
  { skill: "Time Management", descriptor: "Managing multiple priorities and deadlines effectively", category: "Soft" },
  { skill: "Adaptability", descriptor: "Quick to learn new technologies and adjust to change", category: "Soft" },
  { skill: "Attention to Detail", descriptor: "Quality-focused development practices", category: "Soft" },
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
