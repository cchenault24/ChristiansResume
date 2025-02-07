export type Skill = {
  skill: string;
  descriptor: string;
};

type ResumeData = {
  skills: {
    technical: Skill[];
    soft: Skill[];
  };
};

export const useGetData = (): ResumeData => ({
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
});
