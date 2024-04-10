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
            end: 'Present',
            icon: '/amazon-logo.png',
            logo: '/amazon-square.png',
            mobile: '/amazon-mobile.png',
            description: [
                'Partnered with stakeholders to integrate solutions and design best practices, enhancing UX outcomes.',
                'Refined UI elements for 100+ pages, using React, HTML, CSS, and TypeScript, significantly improving overall user experience and visual appeal.',
                'Advocated for and led discussion around site accessibility, meeting WCAG 2.1 standards, broadening user base. Collaborated in cross-functional teams to deliver 5+ major feature releases on schedule.',
                'Mentored 4 junior developers, improving team productivity and project delivery times.',
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
                'Led the creation of front-end features for defense projects, enhancing UI and workflows.',
                'Spearheaded UI/UX design initiatives, improving application usability and engagement.',
                'Streamlined front-end development processes, enhancing productivity and feature scalability.',
                'Contributed strategic insights to refine UI design, aligning with user needs and objectives.',
                'Mentored junior engineers, enhancing team skills and project outcomes.',
                'Initiated a peer code review initiative that increased team productivity and reduced bug rates by 25%.',
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
                    'Acquired comprehensive knowledge in front-end development, including React.js, responsive design, and state management, through hands-on projects and assessments.',
                completionDate: 'Mar 2024',
                icon: '/certificate-icon.png',
                certificate: 'meta-fee-certificate.pdf',
            },
            {
                title: 'Certified Scrum Master (CSM)',
                company: 'Leidos',
                type: 'Professional Certificate',
                description:
                    'Enhanced team collaboration and project management skills, emphasizing agile methodologies and scrum practices to improve project delivery times and team dynamics.',
                completionDate: 'Nov 2021',
                icon: '/csm.png',
                certificate: '',
            },
            {
                title: 'Advanced React',
                company: 'Scrimba',
                type: 'Professional Certificate',
                description:
                    'Completed intensive training on advanced React concepts, including hooks, context API, and state management, demonstrating a deeper mastery of React development practices.',
                completionDate: 'Apr 2024',
                icon: '/react.png',
                certificate: '',
            },
            {
                title: 'Application Development Using Microservices and Serverless',
                company: 'IBM',
                type: 'Professional Certificate',
                description:
                    'Gained expertise in developing scalable applications using microservices and serverless architectures, focusing on deployment and management in cloud environments.',
                completionDate: 'Apr 2024',
                icon: '/ibm.png',
                certificate: 'ibm-certificate.pdf',
            },
        ],
    },
    skills: {
        technical: [
            {
                skill: 'Programming Languages & Libraries',
                descriptor:
                    'Proficient in JavaScript, TypeScript, and React.js; experienced with Material-UI, Next UI, and adept at leveraging React Router for SPA development.',
            },
            {
                skill: 'Web Development Tools & Techniques',
                descriptor:
                    'Advanced with Vite, Git, and Agile methodologies for fast development and effective team collaboration. Familiar with deploying, maintaining, and monitoring applications using different AWS Services, enhancing scalability and reliability.',
            },
            {
                skill: 'Styling & Design',
                descriptor:
                    'Adept in modern CSS, Tailwind CSS, CSS-in-JSX; proficient in responsive and accessible design.',
            },
            {
                skill: 'State Management',
                descriptor:
                    'Skilled in Redux and React Context/Provider for optimal application state management.API Integration: Experienced with GraphQL and REST APIs for dynamic data integration.',
            },
            {
                skill: 'Performance Optimization',
                descriptor:
                    'Knowledgeable in techniques like code splitting and lazy loading for improved application performance.',
            },
            {
                skill: 'Quality Assurance',
                descriptor:
                    'Practiced in testing with Jest and Cypress for application reliability.',
            },
        ],
        soft: [
            {
                skill: 'Effective Communication',
                descriptor:
                    'Expertise in translating complex technical ideas for varied audiences.',
            },
            {
                skill: 'Creative Problem-Solving',
                descriptor:
                    'Recognized for innovative solutions to complex challenges.',
            },
            {
                skill: 'Team Collaboration',
                descriptor:
                    'Demonstrated success in both leadership and contributory roles in team settings.',
            },
        ],
    },
});
