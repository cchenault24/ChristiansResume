import { Card, CardBody, CardFooter, Divider, Link, User } from '@nextui-org/react';
import '../../App.css';
import { useAppContext } from '../../hooks/useAppContext';
import { Pages } from '../../model/enum';
import HomeCards from '../cards/HomeCards';
import Header from '../Header';

export default function HomePage() {
    const { activePage, setActivePage } = useAppContext();
    const hideBack = activePage === Pages.HOME;

    const handleClick = () => {
        setActivePage(Pages.ABOUT);
    };

    // Function will execute on click of button
    const handleDownloadResume = () => {
        // using Java Script method to get PDF file
        fetch("/Resume.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                const alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            });
        });
    };

    return (
        <>
            <Header hideBack={hideBack}>
                Welcome to My Interactive Resume
            </Header>
            <div className='flex w-full justify-center'>
                <Card
                    className='flex w-fit p-4 align-self-center justify-center mb-4 shrink-0'
                    isHoverable
                    isPressable
                    onPress={handleClick}
                >
                    <CardBody>
                        <User
                            name='Christian Chenault'
                            description='Front End Engineer'
                            avatarProps={{
                                size: 'lg',
                                src: '/profile.png',
                            }}
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter className='py-1 text-xs flex justify-center'>
                        Click to learn more about me
                    </CardFooter>
                </Card>
            </div>
            <HomeCards />
            <Link className='my-6 text-xs cursor-pointer text-current' onClick={handleDownloadResume} isBlock>Download PDF Resume</Link>

        </>
    );
}
