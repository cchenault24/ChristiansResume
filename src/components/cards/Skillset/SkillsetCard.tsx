import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    ScrollShadow,
    Spacer,
} from '@nextui-org/react';
import '../../../App.css';
import { Pages } from '../../../model/enum';
import { useAppContext } from '../../../hooks/useAppContext';
import { Skill, useGetData } from '../../data/data';
import Header from '../../Header';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import BackButton from '../../BackButton';

export default function SkillsetCard() {
    const { setActivePage } = useAppContext();
    const { skills } = useGetData();
    const { isSmall } = useBreakpoints();

    const handleClick = () => {
        setActivePage(Pages.HOME);
    };

    const SkillsetList = ({ skillset }: { skillset: Skill[] }) => {
        return (
            <ul className='list-disc list-inside'>
                {skillset.map((skill, index) => {
                    const bgColor =
                        index % 2 === 0 ? 'bg-inherit' : 'bg-gray-300';
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
        );
    };
    return (
        <>
            <Header>My Skillset</Header>
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
                    <ScrollShadow
                        hideScrollBar={!isSmall}
                        className='w-full h-[500px]'
                    >
                        <p className='text-default-400 text-center text-sm'>
                            Scroll to see all skills
                        </p>
                        <Spacer y={2} />
                        <h2 className='text-xl font-bold'>Technical Skills</h2>
                        <SkillsetList skillset={skills.technical} />
                        <Spacer y={6} />
                        <h2 className='text-xl font-bold'>Soft Skills</h2>
                        <SkillsetList skillset={skills.soft} />
                        <Spacer y={2} />
                    </ScrollShadow>
                </CardBody>
                <Divider />
                {!isSmall && (
                    <CardFooter className='flex justify-center'>
                        <p className='text-default-400 text-center text-sm'>
                            Click anywhere on the Card to return back
                        </p>
                    </CardFooter>
                )}
            </Card>
            {isSmall && <BackButton ySpacer />}
        </>
    );
}
