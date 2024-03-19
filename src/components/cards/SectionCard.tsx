import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
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
            iconSrc = '/src/assets/jobhistory-icon.png';
            break;
        case Pages.SKILLS:
            iconSrc = '/src/assets/skillset-icon.png';
            break;
        case Pages.EDUCATION:
            iconSrc = '/src/assets/education-icon.png';
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
            default:
                activePage = Pages.HOME;
                break;
        }
        setActivePage(activePage);
    };
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
            </CardHeader>
            <Divider />
            <CardBody className='text-sm min-h-96'>
                <p>Click to learn more about my {title}</p>
            </CardBody>
        </Card>
    );
}
