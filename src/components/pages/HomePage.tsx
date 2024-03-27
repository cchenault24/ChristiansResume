import {
    Link,
} from '@nextui-org/react';
import '../../App.css';
import HomeCards from '../cards/HomeCards';
import Header from '../Header';
import { handleDownload } from '../../utils/utilities';

export default function HomePage() {
    return (
        <>
            <Header>Welcome to My Interactive Resume</Header>
            <HomeCards />
            <Link
                className='my-6 text-xs cursor-pointer text-current'
                onClick={() => handleDownload('Resume.pdf')}
                isBlock
            >
                Download PDF Resume
            </Link>
        </>
    );
}
