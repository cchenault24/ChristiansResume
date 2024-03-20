import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    Link,
    User,
} from '@nextui-org/react';
import '../../App.css';
import { useAppContext } from '../../hooks/useAppContext';
import { Pages } from '../../model/enum';
import HomeCards from '../cards/HomeCards';
import Header from '../Header';

export default function HomePage() {
    const { setActivePage } = useAppContext();

    const handleClick = () => {
        setActivePage(Pages.ABOUT);
    };

    // Function will execute on click of button
    const handleDownloadResume = () => {
        // using Java Script method to get PDF file
        fetch('/Resume.pdf').then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            });
        });
    };

    return (
        <>
            <Header>Welcome to My Interactive Resume</Header>
            <HomeCards />
            <Link
                className='my-6 text-xs cursor-pointer text-current'
                onClick={handleDownloadResume}
                isBlock
            >
                Download PDF Resume
            </Link>
        </>
    );
}
