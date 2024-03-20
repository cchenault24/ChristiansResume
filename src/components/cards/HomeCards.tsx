import '../../App.css';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { Pages } from '../../model/enum';
import SectionCard from './SectionCard';

export default function HomeCards() {
    const { isSmall } = useBreakpoints();

    const flexDirection1 = isSmall ? 'flex-col items-center' : 'flex-row';
    const flexDirection2 = isSmall ? 'flex-col' : 'flex-row';
    return (
        <div className={`flex flex-col gap-4 flex-auto items-center justify-center`}>
            <SectionCard title={Pages.ABOUT} />
            <div
                className={`flex ${flexDirection1} gap-4 flex-auto justify-center`}
            >
                <SectionCard title={Pages.JOBS} />
                <SectionCard title={Pages.SKILLS} />
                <SectionCard title={Pages.EDUCATION} />
            </div>
        </div>
    );
}
