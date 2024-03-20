import { Button, Spacer } from '@nextui-org/react';
import '../App.css';
import { useAppContext } from '../hooks/useAppContext';
import { useBreakpoints } from '../hooks/useBreakpoints';
import { Pages } from '../model/enum';

type BackProps = {
    ySpacer?: boolean;
};

export default function BackButton({ ySpacer }: BackProps) {
    const { setActivePage } = useAppContext();
    const { isSmall } = useBreakpoints();

    const buttonSize = isSmall ? 'sm' : 'lg';

    const onBackClicked = () => setActivePage(Pages.HOME);

    return (
        <>
            {ySpacer && <Spacer y={4} />}
            <Button
                className='px-10 py-6'
                size={buttonSize}
                variant='solid'
                isIconOnly
                onClick={onBackClicked}
            >
                <p className='text-4xl align-middle font-bold text-current text-center antialiased'>
                    &larr;
                </p>
            </Button>
        </>
    );
}
