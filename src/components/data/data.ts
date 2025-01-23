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
};

export const useGetData = (): ResumeData => ({
    jobExperience: {
        amazon: {
            company: 'Amazon',
            title: 'Front End Engineer',
            location: 'Arlington, VA',
            start: 'Jun 2022',
            end: 'Jun 2024',
            icon: '/amazon-logo.png',
            logo: '/amazon-square.png',
            mobile: '/amazon-mobile.png',
            description: [
                "Led the development and optimization of 20+ modular UI components for large-scale web applications, improving user experience and engagement by 35%.",
                "Enhanced application scalability and performance by redesigning the React Context API and implementing advanced state management techniques, reducing latency in data handling.",
                "Collaborated with backend engineers, UX designers, and stakeholders to deliver high-impact features aligned with business objectives.",
                "Conducted over 300 code reviews, mentoring 4 junior engineers and improving overall code quality by 5%."
            ],
        },
        leidos: {
            company: 'Leidos',
            title: 'Software Engineer',
            location: 'Remote',
            start: 'May 2018',
            end: 'Jun 2022',
            icon: '/leidos-logo.png',
            logo: '/leidos-square.png',
            mobile: '/leidos-mobile.png',
            description: [
                "Directed a team of 5 engineers to transition legacy systems to React, improving project efficiency and increasing sprint completion rates by 40%.",
                "Established and implemented a peer-driven code review process, reducing bug rates by 25% and fostering collaboration across the team.",
                "Utilized Axios and React Redux for seamless API integration, improving system responsiveness and reliability.",
                "Led the development of a mission-critical defense project, ensuring compliance with stringent requirements while enhancing system usability.",
            ]
        },
        pepper: {
            company: 'Pepper',
            title: 'Senior Front-End Engineer',
            location: 'Remote',
            start: 'Jun 2024',
            end: 'Jan 2025',
            icon: '/pepper-logo.png',
            logo: '/pepper-square.png',
            mobile: '/pepper-mobile.png',
            description: [
                "Engineered scalable web applications using React, TypeScript, and GraphQL, delivering features that contributed to a 15% increase in userfeature adoption.",
                "Authored comprehensive frontend technical plans to streamline development, reducing delivery timelines by 20% through optimized architecture design and state management strategies",
                "Spearheaded team-wide quality improvements by introducing an AI-powered code reviewer, cutting bug-related revisions by 30%.",
                "Partnered with UX designers and sales teams to ensure product features met user needs and business goals",
            ],
        },
    },
    education: {
        degree: {
            university: 'James Madison University',
            degree: 'Bachelor of Computer Science',
            location: 'Harrisonburg, VA',
            start: 'Aug 2014',
            end: 'May 2018',
            icon: '/jmu-logo.png',
            description:
                'Specialized in software development and web technologies, with coursework covering algorithms, data structures, web development, and software engineering principles.            ',
        },
        certificates: [
            {
                title: 'Front-End Developer',
                company: 'Meta',
                type: 'Professional Certificate',
                description:
                    'In this Professional Certificate course, I mastered a wide range of front-end development skills through practical projects and assessments. My studies encompassed JavaScript programming, version control, comprehensive HTML and CSS, and responsive design. I specialized in React.js, focusing on higher-order components, state management, and the advanced use of React hooks. Additionally, I delved into UX/UI design principles using Figma and applied all these skills in a capstone project. ',
                completionDate: 'Mar 2024',
                icon: '/certificate-icon.png',
                certificate: 'meta-fee-certificate.pdf',
            },
            {
                title: 'Become a Professional React Developer',
                company: 'Scrimba',
                type: 'Specialization',
                description:
                    'In this course, I learned React development from the ground up. This foundational phase helped me grasp the essentials of building dynamic web applications with modern React. As I progressed to the advanced course, I delved deeper into React’s sophisticated patterns and internal mechanisms, particularly focusing on complex applications using React Router, which significantly enhanced my JavaScript proficiency and prepared me for the competitive tech job market. The course also included over 40 practical challenges that sharpened my problem-solving skills by putting core React concepts to the test in real-world scenarios. Additionally, a concise module on React interview questions equipped me with the knowledge and confidence to tackle common interview challenges effectively. This comprehensive learning experience not only solidified my technical skills but also prepared me thoroughly for real-world applications and job interviews in the tech industry.',
                completionDate: 'Apr 2024',
                icon: '/react.png',
                certificate: 'scrimba_adv_react.pdf',
            },
            {
                title: 'Certified Scrum Master (CSM)',
                company: 'Leidos',
                type: 'Professional Certificate',
                description:
                    'This certificate program honed my skills in agile methodologies and scrum practices, preparing me to become a certified scrum master. I learned key techniques such as sprint planning, conducting daily stand-ups, and leading sprint reviews and retrospectives. This training sharpened my ability to improve project timelines, enhance team dynamics, and effectively manage projects.',
                completionDate: 'Nov 2021',
                icon: '/csm.png',
                certificate: '',
            },
            {
                title: 'Developing Back-End Apps with Node.js and Express',
                company: 'IBM',
                type: 'Professional Certificate',
                description:
                    'In this course, I deepened my expertise in Node.js and Express, learning to develop server-side applications using asynchronous operations, REST APIs, CRUD operations, and advanced authentication methods. Through extensive hands-on labs, I mastered asynchronous I/O and extended Node.js capabilities using the Express framework to manage routing, middleware, and dynamic content. The culmination of my learning was a final project where I built an application to manage book ratings and reviews, significantly enhancing my portfolio.',
                completionDate: 'Apr 2024',
                icon: '/ibm-2.png',
                certificate: 'ibm-certificate-2.pdf',
            },
            {
                title: 'Application Development Using Microservices and Serverless',
                company: 'IBM',
                type: 'Professional Certificate',
                description:
                    'In this certificate program, I mastered microservices and serverless architectures, starting with an introduction to microservices and progressing to in-depth learning of Web API essentials like REST API and GraphQL. I gained hands-on experience with serverless computing, focusing on using IBM Cloud Code Engine to build and deploy container-based applications using Docker. This practical training taught me to efficiently manage application deployment tasks, enabling rapid and scalable software development in a cloud environment.',
                completionDate: 'Apr 2024',
                icon: '/ibm.png',
                certificate: 'ibm-certificate.pdf',
            },
        ],
    },
    skills: {
        technical: [
            {
                skill: 'Programming Languages & Frameworks',
                descriptor:
                    'Proficient in JavaScript, TypeScript, React.js, and React Native. Experienced with component libraries (e.g., Material-UI, NextUI) and utility libraries (e.g., date-fns, lodash, React Router).',
            },
            {
                skill: 'Web Development Tools & Techniques',
                descriptor:
                    'Skilled in Git, Webpack, and CI/CD pipelines. Familiar with AWS services, including but not limited to Amplify, S3, CloudWatch, and Lambda, for deploying and managing serverless architectures.',
            },
            {
                skill: 'Styling & Design',
                descriptor:
                    'Expertise in using Figma and CSS, with proficiency in modern CSS frameworks (e.g., Tailwind CSS) to create responsive and user-friendly interfaces.',
            },
            {
                skill: 'State Management & APIs',
                descriptor:
                    'Strong experience with Redux, React Context API, GraphQL, and REST APIs for data handling and dynamic integration.',
            },
            {
                skill: 'Performance Optimization',
                descriptor:
                    'Skilled in memoization, code splitting, lazy loading, and optimizing component architecture to improve application performance and scalability',
            },
            {
                skill: 'Testing & Quality Assurance',
                descriptor:
                    'Proficient in Jest, React Testing Library, and Cypress to ensure application reliability through automated testing.',
            },
        ],
        soft: [
            {
                skill: 'Leadership & Mentorship',
                descriptor:
                    'Experienced in guiding teams, conducting code reviews, and fostering growth within Agile environments',
            },
            {
                skill: 'Effective Communication',
                descriptor:
                    'Adept at translating complex technical concepts into actionable insights for both technical and non-technical stakeholders.',
            },
            {
                skill: 'Problem-Solving & Collaboration',
                descriptor:
                    'Recognized for delivering innovative solutions to technical challenges and working seamlessly with backend engineers, UX designers, and product teams.',
            },
        ],
    },
});
