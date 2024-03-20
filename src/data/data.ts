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
};
type ResumeData = {
    jobExperience: {
        [key: string]: JobHistory;
    };
    education: {
        [key: string]: EducationHistory;
    };
    skills: { skill: string; descriptor: string }[];
};

export const useGetData = (): ResumeData => ({
    jobExperience: {
        amazon: {
            company: 'Amazon',
            title: 'Front End Engineer',
            location: 'Arlington, VA',
            start: '06/2022',
            end: 'Present',
            icon: '/amazon-logo.png',
            logo: '/amazon-square.png',
            mobile: '/amazon-mobile.png',
            description: [
                'Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.',
                'Improved tools to boost user interaction and deliver design versatility.',
                'Coded using HTML, CSS and JavaScript/Typescript to develop features for both mobile and desktop platforms.',
                'Translated UX and business requirements into elegant code solutions.',
                'Optimized web applications for performance and ensured cross-browser compatibility.',
                'Implemented web a11y standards for inclusive design.',
                'Conducted testing, code reviews, and maintained code quality and documentation.',
                'Participated in on-call rotations proactively addressing and resolving operational alarms arising from real-time customer-facing issues and CI/CD challenges.',
            ],
        },
        leidos: {
            company: 'Leidos',
            title: 'Software Engineer',
            location: 'Remote',
            start: '05/2018',
            end: '06/2022',
            icon: '/leidos-logo.png',
            logo: '/leidos-square.png',
            mobile: '/leidos-mobile.png',
            description: [
                'Led development efforts for U.S. Air Force defense contracts, delivering full-stack software solutions and introducing process improvements.',
                'Managed substantial test suite of 300+ tests and streamlined pipelines, reviews, and CI/CD processes, ensuring application and team scalability.',
                'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.',
                'Collaborated on stages of systems development lifecycle from requirement gathering to production releases.',
                'Revised, modularized and updated old code bases to modern development standards, reducing operating costs, and improving functionality.',
                'Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.',
                'Designed intuitive graphical user interfaces to improve user experience.',
            ],
        },
    },
    education: {
        jmu: {
            university: 'James Madison University',
            degree: 'Bachelor of Computer Science',
            location: 'Harrisonburg, VA',
            start: '08/2014',
            end: '05/2018',
            icon: '/jmu-logo.png',
        },
    },
    skills: [
        {
            skill: 'Agile Methodologies',
            descriptor:
                'I apply iterative development methods for flexible project management and adaptation to changes.',
        },
        {
            skill: 'Amazon Web Services (AWS)',
            descriptor:
                'I utilize Amazon Web Services to deploy, manage, and scale cloud-based applications and services efficiently.',
        },
        {
            skill: 'Browser Developer Tools and debugging techniques',
            descriptor:
                'I use browser developer tools to identify and fix issues in my web applications during development.',
        },
        {
            skill: 'Code Review',
            descriptor:
                'I ensure code quality and collaboration within my team by conducting thorough code reviews.',
        },
        {
            skill: 'Communication',
            descriptor:
                'I effectively convey ideas, updates, and requirements within my team to ensure smooth collaboration.',
        },
        {
            skill: 'Component Libraries',
            descriptor:
                'I leverage component libraries to build reusable UI elements for efficient development.',
        },
        {
            skill: 'Continuous Integration/Continuous Deployment (CI/CD) practices',
            descriptor:
                'I streamline development processes for faster and more reliable releases.',
        },
        {
            skill: 'Cross-browser Compatibility',
            descriptor:
                'I ensure my websites or applications work consistently across different web browsers.',
        },
        {
            skill: 'CSS (Cascading Style Sheets)',
            descriptor:
                'I style web content to create visually appealing and consistent user interfaces.',
        },
        {
            skill: 'Front-End Development',
            descriptor:
                'I create interactive user interfaces for web applications using HTML, CSS, and JavaScript.',
        },
        {
            skill: 'Git (Version Control)',
            descriptor:
                'I manage code changes, collaborate with team members, and ensure code version management using Git.',
        },
        {
            skill: 'HTML5',
            descriptor:
                'I structure web content to be interpreted and displayed by web browsers effectively.',
        },
        {
            skill: 'JavaScript',
            descriptor:
                'I add interactivity, behavior, and dynamic content to web pages using JavaScript.',
        },
        {
            skill: 'Knowledge of Web Accessibility Standards',
            descriptor:
                'I ensure my digital content is accessible to users with disabilities.',
        },
        {
            skill: 'Object-Oriented Programming (OOP)',
            descriptor:
                'I organize my code into reusable, modular components for easier maintenance and scalability.',
        },
        {
            skill: 'Optimization Techniques',
            descriptor:
                'I optimize the performance and efficiency of web applications to enhance user experience.',
        },
        {
            skill: 'Problem Solving',
            descriptor:
                'I identify and resolve issues efficiently to keep project progress and quality on track.',
        },
        {
            skill: 'React.js',
            descriptor:
                'I efficiently build interactive user interfaces for web applications using React.js.',
        },
        {
            skill: 'Redux.js',
            descriptor:
                'I manage state and data flow in complex JavaScript applications using Redux.js.',
        },
        {
            skill: 'Responsive Web Design',
            descriptor:
                'I adapt web content to different devices and screen sizes for optimal user experience.',
        },
        {
            skill: 'REST APIs',
            descriptor:
                'I facilitate communication between web services, enabling seamless data exchange and integration.',
        },
        {
            skill: 'SQL',
            descriptor:
                'I manage and query relational databases to store and retrieve data effectively.',
        },
        {
            skill: 'Teamwork',
            descriptor:
                'I collaborate effectively with my team to achieve our project goals and objectives.',
        },
        {
            skill: 'Technical Support',
            descriptor:
                'I provide assistance to users in troubleshooting and resolving technical issues.',
        },
        {
            skill: 'Testing Frameworks',
            descriptor:
                'I automate testing processes to ensure software quality and functionality.',
        },
        {
            skill: 'Time Management',
            descriptor:
                'I prioritize tasks and manage my time effectively to meet project deadlines.',
        },
        {
            skill: 'TypeScript',
            descriptor:
                'I use TypeScript to enhance JavaScript code with static typing and advanced language features.',
        },
        {
            skill: 'UI/UX Design Principles',
            descriptor:
                'I create intuitive and visually appealing user interfaces to enhance user experience.',
        },
        {
            skill: 'Usability Testing',
            descriptor:
                'I evaluate user interactions to improve the ease of use and satisfaction of my applications.',
        },
        {
            skill: 'User Experience (UX) Design',
            descriptor:
                'I focus on understanding user needs and behaviors to enhance usability and satisfaction.',
        },
        {
            skill: 'Version Control',
            descriptor:
                'I track and manage changes to source code to ensure collaboration and codebase integrity.',
        },
        {
            skill: 'Vite',
            descriptor:
                'I utilize Vite as a fast build tooling framework for modern web development.',
        },
        {
            skill: 'Web Performance Optimization',
            descriptor:
                'I improve website speed and efficiency for better user experience and search engine rankings.',
        },
    ],
});
