import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    ScrollShadow,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { useGetData } from '../../../data/data';
import Header from '../../Header';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

export default function SkillsetCard() {
    const { setActivePage } = useAppContext();
    const { skills } = useGetData();
    const { isMobile, isTablet } = useBreakpoints();

    const isSmall = isMobile || isTablet;

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    return (
        <>
            <Header hideBack={!isSmall}>My Skillset</Header>
            <Card
                id={`SkillsetCard`}
                className={`flex max-w-screen-md`}
                isHoverable
                isPressable={!isSmall}
                fullWidth={true}
                shadow='lg'
                onClick={handleClick}
            >
                <CardBody>
                    <ScrollShadow hideScrollBar={!isSmall} className='w-full h-[500px]'>
                        <p className='text-default-400 text-center text-sm'>
                            Scroll to see all skills
                        </p>
                        <ul className='list-disc list-inside'>
                            {skills.map((skill, index) => {
                                const bgColor =
                                    index % 2 === 0
                                        ? 'bg-inherit'
                                        : 'bg-gray-300';
                                return (
                                    <li
                                        className={`${bgColor} px-4 select-text`}
                                        key={index}
                                    >
                                        <b>{skill.skill}</b>: {skill.descriptor}
                                    </li>
                                );
                            })}
                        </ul>
                    </ScrollShadow>
                </CardBody>
                <Divider />
                {!isSmall && <CardFooter className='flex justify-center'>
                    <p className='text-default-400 text-center text-sm'>
                        Click anywhere on the Card to return back
                    </p>
                </CardFooter>}
            </Card>
        </>
    );
}
