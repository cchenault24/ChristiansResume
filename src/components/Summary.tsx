import { Spacer } from '@nextui-org/react';
import '../App.css';
import { useBreakpoints } from '../hooks/useBreakpoints';

export default function Summary() {
    const { isSmall } = useBreakpoints();

    return (
        <>
            <p className={`max-w-3xl text-left indent-8`}>
                I am a passionate and results-driven Front End Engineer with a
                strong commitment to creating visually appealing and highly
                responsive web applications. My journey in the tech industry has
                been marked by a deep understanding of modern web technologies
                and a relentless pursuit of excellence in user interface design
                and development.
            </p>
            {isSmall && <Spacer y={1} />}
            <p className={`max-w-3xl text-left indent-8`}>
                Recently, significant life changes have led me to prioritize
                seeking a new job as a remote, mid to senior level Front End
                Engineer. The arrival of my first child has emphasized the
                importance of being present to support my family. Having family
                nearby has become a crucial factor in our lives, prompting me to
                seek opportunities that offer greater flexibility and alignment
                with my evolving personal and professional needs.
            </p
            {isSmall && <Spacer y={1} />}
            <p className={`max-w-3xl text-left indent-8`}>
                My expertise lies in leveraging modern web technologies to
                design and develop user-friendly interfaces, optimize website
                performance, and ensure seamless cross-browser compatibility. I
                am driven by the goal of combining creativity with technical
                excellence to enhance the user experience and drive business
                success.
            </p>
            {isSmall && <Spacer y={1} />}
            <p className={`max-w-3xl text-left indent-8`}>
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
