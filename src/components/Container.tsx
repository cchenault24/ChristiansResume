import '../App.css';
import HomePage from './pages/HomePage';
import { Pages } from '../model/enum';
import JobsPage from './pages/JobsPage';
import { useAppContext } from '../hooks/useAppContext';
import JobHistoryDetailsCard from './cards/JobHistory/JobHistoryDetailsCard';
import EducationCard from './cards/Education/EducationCard';
import AboutMeCard from './cards/AboutMe/AboutMeCard';
import SkillsetCard from './cards/Skillset/SkillsetCard';

export default function Container() {
    const { activePage } = useAppContext();

    let PageToShow;
    switch (activePage) {
        case Pages.JOBS:
            PageToShow = <JobsPage />;
            break;
        case Pages.ABOUT:
            PageToShow = <AboutMeCard />;
            break;
        case Pages.EDUCATION:
            PageToShow = <EducationCard />;
            break;
        case Pages.SKILLS:
            PageToShow = <SkillsetCard />;
            break;
        case Pages.AMAZON:
            PageToShow = <JobHistoryDetailsCard company='Amazon' />;
            break;
        case Pages.LEIDOS:
            PageToShow = <JobHistoryDetailsCard company='Leidos' />;
            break;
        case Pages.PEPPER:
            PageToShow = <JobHistoryDetailsCard company='Pepper' />;
            break;
        default:
            PageToShow = <HomePage />;
            break;
    }
    return PageToShow;
}
