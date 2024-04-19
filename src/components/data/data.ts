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
                "Advanced the application's state management by enhancing and maintaining the React Context API and Provider pattern, streamlining component communication and reusability, which led to a more efficient development process and improved application scalability.",
                'Effectively employed React Query to manage fetching, caching, and synchronization of server state from REST APIs, improving application performance and user experience with streamlined data handling and updates.',
                'Led the development of 20+ UI components and pages tailored for micro front-end features, employing React, HTML, CSS, and TypeScript. This effort resulted in a 35% increase in user engagement, significantly improving the overall user experience across the application.',
                "Advocated for and integrated WCAG 2.1 accessibility standards within the development process, utilizing React to extend the application's reach and inclusivity, thus broadening the user base.",
                "Mentored 4 junior engineers in mastering specific front-end technologies, including React's component lifecycle, TypeScript type safety practices, and Jest for unit testing, while also guiding their participation in on-call rotations, significantly improving their technical skills and operational response efficiency.",
                'Conducted thorough code reviews for over 300+ pull requests, enhancing code quality and performance standards, leading to a 50% decrease in code revision rates and significantly boosting the efficiency of front-end development processes.',
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
                "Spearheaded the front-end architecture of a key defense project, conducting in-depth research to select the React framework, then leading the team's successful refactor and development from an older implementation, markedly enhancing UI workflows and operational efficiency.",
                "Leveraged Axios for efficient REST API calls and React Redux for state management, streamlining data flow and enhancing responsiveness in the project's user interface.",
                'Implemented streamlined front-end development processes by introducing new code review practices and fostering enhanced communication during team meetings, significantly boosting team productivity and project agility.',
                "Directed a team of 5 engineers in mastering React and adapting to front-end development, broadening our project's capabilities. Additionally, stepping in as Scrum Master, I fine-tuned our Agile workflows, leading to a 40% increase in sprint completions and facilitated sprint meetings, showcasing my leadership and adaptability.",
                'Initiated a peer code review initiative that increased team productivity and reduced bug rates by 25%, fostering a culture of quality and collaboration.',
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
                    'Skilled in Redux and React Context/Provider for optimal application state management. API Integration: Experienced with GraphQL and REST APIs for dynamic data integration.',
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
