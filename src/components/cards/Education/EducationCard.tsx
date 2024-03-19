import {
    Card,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import Header from '../../Header';

export default function EducationCard() {
    const { setActivePage } = useAppContext();
    const { education } = useGetData();
    const { jmu } = education;

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    return (
        <>
            <Header hideBack={true}>My Education</Header>
            <Card
                id={`EducationCard-${jmu.university}`}
                className='flex w-[600px]'
                isHoverable
                isPressable
                fullWidth={true}
                shadow='lg'
                onClick={handleClick}
            >
                <CardHeader className='flex gap-3'>
                    <Image
                        alt='jmu logo'
                        height={40}
                        radius='sm'
                        src={jmu.icon}
                        width={40}
                    />
                    <div className='flex grow items-start flex-col'>
                        <div className='flex  w-full justify-between '>
                            <p className='text-lg text-start'>
                                {jmu.university}
                            </p>
                            <div className='flex justify-end mr-8'>
                                <p className='text-md text-end text-default-500'>
                                    {jmu.location}
                                </p>
                                <object
                                    className='mt-0.5 ml-2'
                                    data='/src/assets/location.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <p className='text-md w-full text-start text-default-500'>
                                {jmu.degree}
                            </p>
                            <div className='flex w-full justify-end mr-8 items-end'>
                                <p className='text-md text-end text-default-500'>
                                    {jmu.start} - {jmu.end}
                                </p>
                                <object
                                    className='mb-1 ml-2'
                                    data='/src/assets/calendar.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <Divider />
                <CardFooter className='flex justify-center'>
                    <p className='text-default-400 text-center text-sm'>
                        Click anywhere on the Card to return back
                    </p>
                </CardFooter>
            </Card>
        </>
    );
}
