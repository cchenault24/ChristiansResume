import '../App.css';
import { useBreakpoints } from '../hooks/useBreakpoints';

export default function Summary() {
    const { isMobile, isTablet } = useBreakpoints();

    const isSmall = isMobile || isTablet;
    const alignment = isSmall ? 'text-center' : 'text-left';
    return (
        <p className={`max-w-3xl ${alignment}`}>
            Results-driven Front End Engineer with a strong passion for creating
            visually appealing and highly responsive web applications.
            Leveraging expertise in modern web technologies, I aim to contribute
            to a dynamic team where I can design and develop user-friendly
            interfaces, optimize website performance, and ensure seamless
            cross-browser compatibility. My goal is to combine creativity with
            technical excellence to enhance the user experience and drive
            business success.
        </p>
    );
}
