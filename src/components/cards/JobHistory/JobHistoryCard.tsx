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

type SectionCardProps = {
    company: string;
};

export default function JobHistoryCard({ company }: SectionCardProps) {
    const { setActivePage } = useAppContext();
    const { jobExperience } = useGetData();

    const jobHistoryData = jobExperience[company.toLowerCase()];

    const handleClick = () => {
        const activePage = company === 'Amazon' ? Pages.AMAZON : Pages.LEIDOS;
        setActivePage(activePage);
    };

    return (
        <Card
            id={`JobHistoryCard-${jobHistoryData.company}`}
            className='flex w-96 h-96 shrink-0'
            isHoverable
            isPressable
            shadow='lg'
            onPress={handleClick}
        >
            <CardHeader className='flex gap-3'>
                <Image
                    alt='company logo'
                    height={40}
                    radius='sm'
                    src={jobHistoryData.icon}
                    width={40}
                />
                <div className='flex items-start flex-col'>
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
                    src={jobHistoryData.logo}
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
