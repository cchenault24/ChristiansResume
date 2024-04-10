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
import { useGetData } from '../../data/data';
import Header from '../../Header';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import { handleDownload } from '../../../utils/utilities';
import React from 'react';

export default function EducationCard() {
    const { setActivePage } = useAppContext();
    const { education } = useGetData();
    const { isSmall } = useBreakpoints();

    const { degree, certificates } = education;
    const direction = isSmall ? 'flex-col' : 'flex-row';

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    const LeftTitle = ({
        title,
        subtitle,
    }: {
        title: string;
        subtitle: string;
    }) => (
        <div className='flex grow items-start flex-col'>
            <p className='text-lg text-start'>{title}</p>
            <div className='flex grow items-start flex-row'>
                <div className='flex grow items-start flex-col'>
                    <div className='flex w-full justify-between'>
                        <p className='text-md w-full text-start text-default-500'>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const RightMetadata = ({
        location,
        date,
    }: {
        location: string;
        date: string;
    }) => (
        <div className='flex grow items-end mt-1 flex-col'>
            <div className='flex grow items-start flex-col'>
                <div className='flex justify-end mr-8'>
                    <p className='text-md text-end text-default-500'>
                        {location}
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
                <p className='text-md text-end text-default-500'>{date}</p>
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
                id={`EducationCard-${degree.university}`}
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
                            src={degree.icon}
                            width={100}
                        />
                        {isSmall ? <Spacer y={4} /> : <Spacer x={4} />}
                        <LeftTitle
                            title={degree.university}
                            subtitle={degree.degree}
                        />
                        {!isSmall && <Spacer x={8} />}
                        <RightMetadata
                            location={degree.location}
                            date={`${degree.start} - ${degree.end}`}
                        />
                    </div>
                </CardHeader>
                <Divider />
                <CardFooter className='flex justify-center'>
                    <p className='text-default-400 text-center text-sm'>
                        Click anywhere on the Card to return back
                    </p>
                </CardFooter>
            </Card>
            <Spacer y={8} />
            <Header>My Certificates</Header>
            {certificates.map((cert, i) => (
                <React.Fragment key={`EducationCard-${i}`}>
                    <Spacer y={4} />
                    <Card
                        id={`EducationCard-${degree.university}`}
                        className='flex'
                        isHoverable
                        isPressable
                        fullWidth={true}
                        shadow='lg'
                        onClick={handleClick}
                    >
                        <CardHeader className='flex gap-3'>
                            <div
                                className={`flex grow items-center ${direction}`}
                            >
                                <Image
                                    alt='certificate logo'
                                    height={100}
                                    radius='sm'
                                    src={cert.icon}
                                    width={100}
                                />
                                {isSmall ? <Spacer y={4} /> : <Spacer x={4} />}
                                <LeftTitle
                                    title={cert.title}
                                    subtitle={cert.type}
                                />
                                {!isSmall && <Spacer x={8} />}
                                <RightMetadata
                                    location={cert.company}
                                    date={cert.completionDate}
                                />
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className={`flex grow items-center flex-col`}>
                                {cert.description}
                                {cert.certificate && (
                                    <Link
                                        className='py-2 text-xs cursor-pointer text-current'
                                        onClick={() =>
                                            handleDownload(cert.certificate)
                                        }
                                        isBlock
                                    >
                                        <div className='flex'>
                                            Download PDF Certificate
                                            <object
                                                className='flex mt-0.5 ml-2 align-top'
                                                data='/download.svg'
                                                width='18'
                                                height='18'
                                            />
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter className='flex justify-center'>
                            <p className='text-default-400 text-center text-sm'>
                                Click anywhere on the Card to return back
                            </p>
                        </CardFooter>
                    </Card>
                </React.Fragment>
            ))}
        </>
    );
}
