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
import { useBreakpoints } from '../../hooks/useBreakpoints';

type SectionCardProps = {
    title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
    const { setActivePage } = useAppContext();
    const { isSmall } = useBreakpoints();

    const cardSize = isSmall ? 'w-full h-64' : ' w-64 h-96';

    let iconSrc: string | undefined;
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
            description='Sr Front End Engineer'
            avatarProps={{
                size: 'lg',
                src: '/profile.png',
            }}
        />
    );

    const StandardBody = () => (
        <>
            <Image
                alt='selection logo'
                height={40}
                radius='sm'
                src={iconSrc}
                width={40}
            />
            <div className='flex flex-col text-left'>
                <h2 className='text-md'>{title}</h2>
            </div>
        </>
    );

    return (
        <Card
            id={`SelectionCard-${title}`}
            className={`flex ${cardSize} h-40 shrink-0`}
            isHoverable
            isPressable
            shadow='lg'
            onClick={handleClick}
        >
            <CardHeader className='flex gap-3'>
                {title === Pages.ABOUT ? <AboutBody /> : <StandardBody />}
            </CardHeader>
            <Divider />
            <CardBody className='text-sm min-h-96 text-center'>
                <p>
                    {title === Pages.ABOUT
                        ? 'Click to learn more about me'
                        : `Click to learn more about my ${title}`}
                </p>
            </CardBody>
        </Card>
    );
}
