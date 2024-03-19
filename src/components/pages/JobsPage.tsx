import '../../App.css';
import { useAppContext } from '../../hooks/useAppContext';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { Pages } from '../../model/enum';
import Header from '../Header';
import JobHistoryCard from '../cards/JobHistory/JobHistoryCard';

export default function JobsPage() {
    const { activePage } = useAppContext();
    const { isMobile, isTablet } = useBreakpoints();
    
    const flexDirection = isMobile || isTablet ? 'flex-col items-center' : 'flex-row';
    const hideBack=activePage===Pages.HOME
    return (
        <>
            <Header hideBack={hideBack}>My Job History</Header>
            <div className={`flex ${flexDirection} gap-4 flex-auto justify-center`}>
                <JobHistoryCard company='Amazon' />
                <JobHistoryCard company='Leidos' />
            </div>
        </>
    );
}
