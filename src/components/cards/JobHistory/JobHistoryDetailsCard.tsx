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
import { useGetData } from '../../data/data';

type SectionCardProps = {
    company: string;
};

export default function JobHistoryDetailsCard({ company }: SectionCardProps) {
    const { setActivePage } = useAppContext();
    const { jobExperience } = useGetData();

    const jobHistoryData = jobExperience[company.toLowerCase()];
    const jobHistoryDescription = jobHistoryData.description;

    const handleClick = () => {
        setActivePage(Pages.JOBS);
    };

    return (
        <Card
            id={`JobHistoryDetailsCard-${jobHistoryData.company}`}
            className='flex max-w-screen-md'
            isHoverable
            isPressable
            fullWidth={true}
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
                <div className='flex grow items-start flex-col'>
                    <div className='flex  w-full justify-between '>
                        <h2 className='text-lg text-start'>
                            {jobHistoryData.title}
                        </h2>
                        <div className='flex justify-end mr-8'>
                            <h3 className='text-md text-end text-default-500 mr-2'>
                                {jobHistoryData.location}
                            </h3>
                            <object
                                className='mt-0.5'
                                data='/location.svg'
                                width='18'
                                height='18'
                            />
                        </div>
                    </div>
                    <div className='flex w-full justify-between'>
                        <h3 className='text-md text-start text-default-500'>
                            {jobHistoryData.company}
                        </h3>
                        <div className='flex w-full justify-end mr-8'>
                            <h3 className='text-md text-end text-default-500 mr-2'>
                                {jobHistoryData.start} - {jobHistoryData.end}
                            </h3>
                            <object
                                className='mt-0.5'
                                data='/calendar.svg'
                                width='18'
                                height='18'
                            />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='flex items-center py-2'>
                <ul className='list-disc m-6'>
                    {jobHistoryDescription.map((descriptor, index) => (
                        <li key={index}>{descriptor}</li>
                    ))}
                </ul>
            </CardBody>
            <CardFooter className='flex justify-center'>
                <p className='text-default-400 text-center text-sm'>
                    Click anywhere on the Card to return back
                </p>
            </CardFooter>
        </Card>
    );
}
