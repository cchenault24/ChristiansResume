import {
    Card,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Spacer,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import Header from '../../Header';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

export default function EducationCard() {
    const { setActivePage } = useAppContext();
    const { education } = useGetData();
    const { isMobile, isTablet } = useBreakpoints();

    const { jmu } = education;
    const isSmall = isMobile || isTablet;
    const direction = isSmall ? 'flex-col' : 'flex-row';

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    const NameDegree = () => (
        <div className='flex grow items-start flex-col'>
            <p className='text-lg text-start'>{jmu.university}</p>
            <div className='flex grow items-start flex-row'>
                <div className='flex grow items-start flex-col'>
                    <div className='flex w-full justify-between'>
                        <p className='text-md w-full text-start text-default-500'>
                            {jmu.degree}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const LocationDate = () => (
        <div className='flex grow items-end mt-1 flex-col'>
            <div className='flex grow items-start flex-col'>
                <div className='flex justify-end mr-8'>
                    <p className='text-md text-end text-default-500'>
                        {jmu.location}
                    </p>
                    <object
                        className='mt-0.5 ml-2'
                        data='/location.svg'
                        width='18'
                        height='18'
                    />
                </div>
            </div>
            <div className='flex w-full justify-end mr-8 items-end'>
                <p className='text-md text-end text-default-500'>
                    {jmu.start} - {jmu.end}
                </p>
                <object
                    className='mb-1 ml-2'
                    data='/calendar.svg'
                    width='18'
                    height='18'
                />
            </div>
        </div>
    );

    return (
        <>
            <Header>My Education</Header>
            <Card
                id={`EducationCard-${jmu.university}`}
                className='flex'
                isHoverable
                isPressable
                fullWidth={true}
                shadow='lg'
                onClick={handleClick}
            >
                <CardHeader className='flex gap-3'>
                    <div className={`flex grow items-center ${direction}`}>
                        <Image
                            alt='jmu logo'
                            height={100}
                            radius='sm'
                            src={jmu.icon}
                            width={100}
                        />
                        {isSmall ? <Spacer y={4} /> : <Spacer x={4} />}
                        <NameDegree />
                        {!isSmall && <Spacer x={8} />}
                        <LocationDate />
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
