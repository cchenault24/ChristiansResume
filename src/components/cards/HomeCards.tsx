import '../../App.css';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { Pages } from '../../model/enum';
import SectionCard from './SectionCard';

export default function HomeCards() {
    const { isSmall } = useBreakpoints();

    const flexDirection = isSmall ? 'flex-col items-center' : 'flex-row';
    return (
        <div className={`flex ${flexDirection} gap-4 flex-auto justify-center`}>
            <SectionCard title={Pages.JOBS} />
            <SectionCard title={Pages.SKILLS} />
            <SectionCard title={Pages.EDUCATION} />
        </div>
    );
}
