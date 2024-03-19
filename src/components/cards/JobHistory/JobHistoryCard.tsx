import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

type SectionCardProps = {
    company: string;
};

export default function JobHistoryCard({ company }: SectionCardProps) {
    const { setActivePage } = useAppContext();
    const { jobExperience } = useGetData();
    const { isMobile, isTablet } = useBreakpoints();

    const isSmall = isMobile || isTablet;
    const cardSize = isSmall ? 'w-64 h-64' : ' w-96 h-96';
    
    const jobHistoryData = jobExperience[company.toLowerCase()];
    const jobHistoryImage = isSmall ? jobHistoryData.mobile : jobHistoryData.logo

    const handleClick = () => {
        const activePage = company === 'Amazon' ? Pages.AMAZON : Pages.LEIDOS;
        setActivePage(activePage);
    };

    return (
        <Card
            id={`JobHistoryCard-${jobHistoryData.company}`}
            className={`flex ${cardSize} shrink-0`}
            isHoverable
            isPressable
            fullWidth={isSmall}
            shadow='lg'
            onClick={handleClick}
        >
            <CardHeader className='flex gap-3'>
                <Image
                    alt='company logo'
                    height={40}
                    radius='sm'
                    src={jobHistoryData.icon}
                    width={40}
                />
                <div className='flex items-start flex-col text-left'>
                    <h2 className='text-md'>{jobHistoryData.title}</h2>
                    <h3 className='text-sm text-default-500'>
                        {jobHistoryData.company}
                    </h3>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='flex items-center py-2'>
                <Image
                    alt='Card background'
                    className='object-cover rounded-xl'
                    src={jobHistoryImage}
                    width={270}
                />
            </CardBody>
            <Divider/>
            <CardFooter className='flex justify-center'>
                <p className='text-default-400 text-center text-xs'>
                    Click anywhere on the Card to see more
                </p>
            </CardFooter>
        </Card>
    );
}
