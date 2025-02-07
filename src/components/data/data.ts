type JobHistory = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  icon: string;
  logo: string;
  mobile: string;
  description: string[];
};

type EducationHistory = {
  university: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  icon: string;
  description: string;
};

type CertificateData = {
  title: string;
  company: string;
  type: string;
  certificate: string;
  completionDate: string;
  icon: string;
  description: string;
};

export type Skill = {
  skill: string;
  descriptor: string;
};

type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
};

type ResumeData = {
  jobExperience: {
    [key: string]: JobHistory;
  };
  education: {
    degree: EducationHistory;
    certificates: CertificateData[];
  };
  skills: {
    technical: Skill[];
    soft: Skill[];
  };
  projects: ProjectData[];
};

export const useGetData = (): ResumeData => ({
  jobExperience: {
    amazon: {
      company: "Amazon",
      title: "Front-End Engineer",
      location: "Arlington, VA",
      start: "Jun 2022",
      end: "Jun 2024",
      icon: "/amazon-logo.png",
      logo: "/amazon-square.png",
      mobile: "/amazon-mobile.png",
      description: [
        "Led the development and optimization of 20+ modular UI components for large-scale web applications, improving user experience and engagement by 35%.",
        "Enhanced application scalability and performance by redesigning the React Context API and implementing advanced state management techniques, reducing latency in data handling.",
        "Collaborated with backend engineers, UX designers, and stakeholders to deliver high-impact features aligned with business objectives.",
        "Conducted over 300 code reviews, mentoring 4 junior engineers and improving overall code quality by 5%.",
      ],
    },
    leidos: {
      company: "Leidos",
      title: "Software Engineer",
      location: "Remote",
      start: "May 2018",
      end: "Jun 2022",
      icon: "/leidos-logo.png",
      logo: "/leidos-square.png",
      mobile: "/leidos-mobile.png",
      description: [
        "Directed a team of 5 engineers to transition legacy systems to React, improving project efficiency and increasing sprint completion rates by 40%.",
        "Established and implemented a peer-driven code review process, reducing bug rates by 25% and fostering collaboration across the team.",
        "Utilized Axios and React Redux for seamless API integration, improving system responsiveness and reliability.",
        "Led the development of a mission-critical defense project, ensuring compliance with stringent requirements while enhancing system usability.",
      ],
    },
    pepper: {
      company: "Pepper",
      title: "Senior Front-End Engineer",
      location: "Remote",
      start: "Jun 2024",
      end: "Jan 2025",
      icon: "/pepper-logo.png",
      logo: "/pepper-square.png",
      mobile: "/pepper-mobile.png",
      description: [
        "Engineered scalable web applications using React, TypeScript, and GraphQL, delivering features that contributed to a 15% increase in user feature adoption.",
        "Authored comprehensive frontend technical plans to streamline development, reducing delivery timelines by 20% through optimized architecture design and state management strategies.",
        "Spearheaded team-wide quality improvements by introducing an AI-powered code reviewer, cutting bug-related revisions by 30%.",
        "Partnered with UX designers and sales teams to ensure product features met user needs and business goals.",
      ],
    },
  },
  education: {
    degree: {
      university: "James Madison University",
      degree: "Bachelor of Computer Science",
      location: "Harrisonburg, VA",
      start: "Aug 2014",
      end: "May 2018",
      icon: "/jmu-logo.png",
      description:
        "Specialized in software development and web technologies, with coursework covering algorithms, data structures, web development, and software engineering principles.",
    },
    certificates: [
      {
        title: "Front-End Developer",
        company: "Meta",
        type: "Professional Certificate",
        description:
          "Mastered JavaScript, React.js, UX/UI design, and responsive web development, completing a capstone project showcasing real-world application.",
        completionDate: "Mar 2024",
        icon: "/certificate-icon.png",
        certificate: "meta-fee-certificate.pdf",
      },
      {
        title: "Become a Professional React Developer",
        company: "Scrimba",
        type: "Specialization",
        description:
          "Advanced React.js course focusing on state management, React Router, component design patterns, and over 40 hands-on coding challenges.",
        completionDate: "Apr 2024",
        icon: "/react.png",
        certificate: "scrimba_adv_react.pdf",
      },
      {
        title: "Certified Scrum Master (CSM)",
        company: "Leidos",
        type: "Professional Certificate",
        description:
          "Expertise in Agile methodologies, sprint planning, and team collaboration to improve project timelines and productivity.",
        completionDate: "Nov 2021",
        icon: "/csm.png",
        certificate: "",
      },
      {
        title: "Developing Back-End Apps with Node.js and Express",
        company: "IBM",
        type: "Professional Certificate",
        description:
          "Gained proficiency in Node.js, Express, REST API development, authentication methods, and backend application deployment.",
        completionDate: "Apr 2024",
        icon: "/ibm-2.png",
        certificate: "ibm-certificate-2.pdf",
      },
      {
        title: "Application Development Using Microservices and Serverless",
        company: "IBM",
        type: "Professional Certificate",
        description:
          "Learned microservices architecture, serverless computing, and GraphQL API design using IBM Cloud and Docker-based deployment.",
        completionDate: "Apr 2024",
        icon: "/ibm.png",
        certificate: "ibm-certificate.pdf",
      },
    ],
  },
  skills: {
    technical: [
      {
        skill: "Programming Languages & Frameworks",
        descriptor:
          "Proficient in JavaScript, TypeScript, React.js, and React Native. Experienced with component libraries (Material-UI, NextUI) and utility libraries (date-fns, Lodash, React Router).",
      },
      {
        skill: "Web Development Tools & Techniques",
        descriptor:
          "Skilled in Git, Webpack, and CI/CD pipelines. Familiar with AWS Amplify, S3, CloudWatch, and Lambda for serverless architectures.",
      },
      {
        skill: "Styling & Design",
        descriptor:
          "Expertise in Figma, CSS, and Tailwind CSS, creating responsive and engaging UIs.",
      },
      {
        skill: "State Management & APIs",
        descriptor:
          "Strong experience with Redux, React Context API, GraphQL, and REST APIs.",
      },
      {
        skill: "Testing & Quality Assurance",
        descriptor:
          "Proficient in Jest, React Testing Library, and Cypress for robust test coverage.",
      },
    ],
    soft: [
      {
        skill: "Leadership & Mentorship",
        descriptor:
          "Experienced in mentoring engineers, conducting code reviews, and fostering Agile team growth.",
      },
      {
        skill: "Effective Communication",
        descriptor:
          "Adept at explaining technical concepts to stakeholders and collaborating across departments.",
      },
      {
        skill: "Problem-Solving & Collaboration",
        descriptor:
          "Thrives in team environments, delivering solutions to complex technical challenges.",
      },
    ],
  },
  projects: [
    {
      title: "Interactive Portfolio",
      description:
        "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dynamic content loading, and a clean, professional design.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "NextUI",
      ],
      link: "https://christianchenault.com",
      github: "https://github.com/cchenault/portfolio",
    },
    {
      title: "Flexbox Sandbox",
      description:
        "An interactive learning tool for mastering CSS Flexbox layouts. Users can experiment with different flex properties and see real-time results.",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Emotion",
        "React Color",
        "Vite",
      ],
      link: "https://flexbox-sandbox.com",
      github: "https://github.com/cchenault/flexbox-sandbox",
    },
  ],
});
