import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import Header from '../../Header';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import Summary from '../../Summary';

export default function AboutMeCard() {
    const { setActivePage } = useAppContext();
    const { education } = useGetData();
    const { isSmall } = useBreakpoints();

    const { jmu } = education;

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    const ProfileIcon = () => (
        <Image
            className='text-lg text-center'
            alt='profile logo'
            height={100}
            radius='sm'
            src='/profile.png'
            width={100}
        />
    );

    const LeftText = () => {
        const alignment = isSmall ? 'items-center' : 'items-start';
        return (
            <div className={`flex grow ${alignment} flex-col`}>
                <h2 className='text-lg text-start'>Christian Chenault</h2>
                <h3 className='text-sm text-center text-default-500'>
                    Front End Engineer
                </h3>
                <h3 className='text-sm text-center text-default-500'>
                    Expertise: JavaScript, React, HTML, CSS
                </h3>
                <h3 className='text-sm text-start text-default-500'>
                    Experience: 5+ years
                </h3>
            </div>
        );
    };

    const RightText = () => {
        const alignment = isSmall ? 'items-center' : 'items-end';
        return (
            <div className={`flex grow ${alignment} flex-col`}>
                <div className='flex justify-between'>
                    <div className='flex justify-end items-end'>
                        <h3 className='text-sm text-end text-default-500'>
                            <Link href='mailto:cchenault24@yahoo.com' size='sm'>
                                cchenault24@yahoo.com
                            </Link>
                        </h3>
                        <object
                            className='mb-1 mx-2'
                            data='/email.svg'
                            width='18'
                            height='18'
                        />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-end items-end'>
                        <h3 className='text-sm text-end text-default-500'>
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
                <div className='flex justify-between'>
                    <div className='flex justify-end items-end'>
                        <h3 className='text-sm text-end text-default-500'>
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
                <div className='flex justify-between'>
                    <div className='flex justify-end items-end'>
                        <h3 className='text-sm text-end text-default-500'>
                            <Link
                                href='https://www.linkedin.com/in/christianchenault/'
                                size='sm'
                            >
                                LinkedIn
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
        );
    };

    const direction = isSmall ? 'flex-col' : 'flex-row';

    return (
        <>
            <Header>About Me</Header>
            <Card
                id={`EducationCard-${jmu.university}`}
                className='flex max-w-screen-md'
                isHoverable
                isPressable
                fullWidth={true}
                shadow='lg'
                onClick={handleClick}
            >
                <CardHeader className={`flex gap-3 ${direction}`}>
                    <ProfileIcon />
                    <LeftText />
                    {!isSmall && <RightText />}
                </CardHeader>
                <Divider />
                <CardBody>
                    <Summary />
                    {isSmall && (
                        <>
                            <Divider className='my-3' />
                            <RightText />
                        </>
                    )}
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
