import '../../App.css';
import { Pages } from '../../model/enum';
import SectionCard from './SectionCard';

export default function HomeCards() {
    return (
        <div className='flex gap-4 flex-auto justify-center'>
            <SectionCard title={Pages.JOBS}/>
            <SectionCard title={Pages.SKILLS} />
            <SectionCard title={Pages.EDUCATION} />
        </div>
    );
}
