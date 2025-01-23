import '../../App.css';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import Header from '../Header';
import JobHistoryCard from '../cards/JobHistory/JobHistoryCard';
import BackButton from '../BackButton';

export default function JobsPage() {
    const { isSmall } = useBreakpoints();

    const flexDirection = isSmall ? 'flex-col items-center' : 'flex-row';

    return (
        <>
            <Header>My Job History</Header>
            <div
                className={`flex ${flexDirection} gap-4 flex-auto justify-center`}
            >
                <JobHistoryCard company='Pepper' />
                <JobHistoryCard company='Amazon' />
                <JobHistoryCard company='Leidos' />
            </div>
            <BackButton ySpacer />
        </>
    );
}
