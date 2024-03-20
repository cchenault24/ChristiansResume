import '../App.css';
import { useBreakpoints } from '../hooks/useBreakpoints';

export default function Summary() {
    const { isSmall } = useBreakpoints();

    const alignment = isSmall ? 'text-center' : 'text-left';
    return (
        <>
            <p className={`max-w-3xl ${alignment} indent-8`}>
                I am a passionate and results-driven Front End Engineer with a
                strong commitment to creating visually appealing and highly
                responsive web applications. My journey in the tech industry has
                been marked by a deep understanding of modern web technologies
                and a relentless pursuit of excellence in user interface design
                and development.
            </p>
            <p className={`max-w-3xl ${alignment} indent-8`}>
                Recently, significant life changes have led me to prioritize
                seeking a new job as a remote, mid to senior level Front End
                Engineer. The arrival of my first child has emphasized the
                importance of being present to support my family, particularly
                my girlfriend, who can easily feel overwhelmed. Having family
                nearby has become a crucial factor in our lives, prompting me to
                seek opportunities that offer greater flexibility and alignment
                with my evolving personal and professional needs.
            </p>
            <p className={`max-w-3xl ${alignment} indent-8`}>
                Although my current role is hybrid, rumors suggest a potential
                shift towards return-to-office, which may not align with my
                desired work environment. Moreover, the lack of advancement
                opportunities and scarcity of front-end development projects
                within my current role have fueled a sense of stagnation and
                undervaluation.
            </p>
            <p className={`max-w-3xl ${alignment} indent-8`}>
                My expertise lies in leveraging modern web technologies to
                design and develop user-friendly interfaces, optimize website
                performance, and ensure seamless cross-browser compatibility. I
                am driven by the goal of combining creativity with technical
                excellence to enhance the user experience and drive business
                success.
            </p>
            <p className={`max-w-3xl ${alignment} indent-8`}>
                In my next role, I am seeking to join a dynamic team where I can
                contribute my skills and experience to make meaningful
                contributions. I am eager to find a position that not only
                offers the flexibility I require but also recognizes and
                cultivates my proficiency in front-end development, enabling me
                to thrive professionally while supporting my family.
            </p>
        </>
    );
}
