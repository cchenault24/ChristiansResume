import '../../App.css';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { Pages } from '../../model/enum';
import SectionCard from './SectionCard';

export default function HomeCards() {
    const { isSmall } = useBreakpoints();

    const flexDirection1 = isSmall ? 'flex-col items-center' : 'flex-row';
    const AllCards = () => {
        const sectionCards = (
            <>
                <SectionCard title={Pages.JOBS} />
                <SectionCard title={Pages.SKILLS} />
                <SectionCard title={Pages.EDUCATION} />
            </>
        );

        return (
            <div
                className={`flex flex-col gap-4 flex-auto items-center justify-center`}
            >
                {!isSmall && <SectionCard title={Pages.ABOUT} />}
                {isSmall ? (
                    <>
                        <SectionCard title={Pages.ABOUT} />
                        {sectionCards}
                    </>
                ) : (
                    <div
                        className={`flex ${flexDirection1} gap-4 flex-auto justify-center`}
                    >
                        {sectionCards}
                    </div>
                )}
            </div>
        );
    };

    return <AllCards />;
}
