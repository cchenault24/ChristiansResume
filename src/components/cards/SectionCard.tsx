import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    User,
} from '@nextui-org/react';
import '../../App.css';
import { Pages } from '../../model/enum';
import { useAppContext } from '../../hooks/useAppContext';

type SectionCardProps = {
    title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
    const { setActivePage } = useAppContext();
    let iconSrc;
    switch (title) {
        case Pages.JOBS:
            iconSrc = '/jobhistory-icon.png';
            break;
        case Pages.SKILLS:
            iconSrc = '/skillset-icon.png';
            break;
        case Pages.EDUCATION:
            iconSrc = '/education-icon.png';
            break;
        case Pages.ABOUT:
            iconSrc = '/profile.png';
            break;
    }
    const handleClick = () => {
        let activePage;
        switch (title) {
            case Pages.JOBS:
                activePage = Pages.JOBS;
                break;
            case Pages.SKILLS:
                activePage = Pages.SKILLS;
                break;
            case Pages.EDUCATION:
                activePage = Pages.EDUCATION;
                break;
            case Pages.ABOUT:
                activePage = Pages.ABOUT;
                break;
            default:
                activePage = Pages.HOME;
                break;
        }
        setActivePage(activePage);
    };

    const AboutBody = () => (
        <User
            name='Christian Chenault'
            description='Front End Engineer'
            avatarProps={{
                size: 'lg',
                src: '/profile.png',
            }}
        />
    );
    const AboutFooter = () => <p>Click to learn more about me</p>;

    const StandardBody = () => (
        <>
            <Image
                alt='selection logo'
                height={40}
                radius='sm'
                src={iconSrc}
                width={40}
            />
            <div className='flex flex-col'>
                <h2 className='text-md'>{title}</h2>
            </div>
        </>
    );
    const StandardFooter = () => <p>Click to learn more about my {title}</p>;

    return (
        <Card
            id={`SelectionCard-${title}`}
            className='flex w-64 h-40 shrink-0'
            isHoverable
            isPressable
            shadow='lg'
            onClick={handleClick}
        >
            <CardHeader className='flex gap-3'>
                {title === Pages.ABOUT ? <AboutBody /> : <StandardBody />}
            </CardHeader>
            <Divider />
            <CardBody className='text-sm min-h-96'>
            {title === Pages.ABOUT ? <AboutFooter /> : <StandardFooter />}
            </CardBody>
        </Card>
    );
}
