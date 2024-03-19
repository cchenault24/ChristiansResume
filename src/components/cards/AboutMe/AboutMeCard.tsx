import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
    Spacer,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import Header from '../../Header';
import Summary from '../../Summary';

export default function AboutMeCard() {
    const { setActivePage } = useAppContext();
    const { education } = useGetData();
    const { jmu } = education;

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    return (
        <>
            <Header hideBack={true}>About Me</Header>
            <Card
                id={`EducationCard-${jmu.university}`}
                className='flex max-w-screen-md'
                isHoverable
                isPressable
                fullWidth={true}
                shadow='lg'
                onClick={handleClick}
            >
                <CardHeader className='flex gap-3'>
                    <Image
                        alt='profile logo'
                        height={100}
                        radius='sm'
                        src='/profile.png'
                        width={100}
                    />
                    <div className='flex grow items-start flex-col'>
                        <div className='flex w-full justify-between'>
                            <h2 className='w-fit text-lg text-start'>
                                Christian Chenault
                            </h2>
                            <Spacer x={16} />
                            <div className='flex w-fit justify-end items-end'>
                                <h3 className='w-full text-sm text-end text-default-500'>
                                    <Link
                                        href='mailto:cchenault24@yahoo.com'
                                        size='sm'
                                    >
                                        cchenault24@yahoo.com
                                    </Link>
                                </h3>
                                <object
                                    className='mb-1 mx-2'
                                    data='/phone.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <h3 className='text-md w-fit text-start text-default-500'>
                                Front End Engineer
                            </h3>
                            <Spacer x={16} />
                            <div className='flex w-fit justify-end items-end'>
                                <h3 className='w-full text-sm text-end text-default-500'>
                                    <Link href='tel:+1804+291+8744' size='sm'>
                                        (804) 291-8744
                                    </Link>
                                </h3>
                                <object
                                    className='mb-1 mx-2'
                                    data='/phone.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <h3 className='text-md w-fit text-start text-default-500'>
                                Expertise: JavaScript, React, HTML, CSS
                            </h3>
                            <Spacer x={16} />
                            <div className='flex w-fit justify-end items-end'>
                                <h3 className='w-full text-sm text-end text-default-500'>
                                    <Link
                                        href='https://www.google.com/maps?q=Alexandria+VA'
                                        size='sm'
                                    >
                                        Alexandria, VA
                                    </Link>
                                </h3>
                                <object
                                    className='mb-1 mx-2'
                                    data='/location.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <h3 className='text-md w-fit text-start text-default-500'>
                                Experience: 5+ years
                            </h3>
                            <Spacer x={16} />
                            <div className='flex w-fit justify-end items-end'>
                                <h3 className='text-sm text-end text-default-500'>
                                    <Link
                                        href='https://www.linkedin.com/in/christianchenault/'
                                        size='sm'
                                    >
                                        https://www.linkedin.com/in/christianchenault/
                                    </Link>
                                </h3>
                                <object
                                    className='mb-1 mx-2'
                                    data='/linkedin.svg'
                                    width='18'
                                    height='18'
                                />
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Summary />
                </CardBody>
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
