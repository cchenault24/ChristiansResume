import { Button } from '@nextui-org/react';
import '../App.css';
import { useAppContext } from '../hooks/useAppContext';
import { Pages } from '../model/enum';
export default function Header({
    children,
    hideBack,
}: {
    children: string;
    hideBack: boolean;
}) {
    const { setActivePage } = useAppContext();
    const onBackClicked = () => setActivePage(Pages.HOME);

    return (
        <div className='header flex text-start'>
            <span className='flex-1'>
                {!hideBack && (
                    <Button
                        size='lg'
                        variant='solid'
                        isIconOnly
                        onClick={onBackClicked}
                    >
                        <p className='text-4xl align-middle font-bold text-current text-center antialiased'>
                            &larr;
                        </p>
                    </Button>
                )}
            </span>
            <span className='flex-auto text-center cursor-default select-none'>
                <h1 className='text-4xl font-bold text-center antialiased mb-6 bg-gradient-to-br from-default-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    {children}
                </h1>
            </span>
            <span className='flex-1'></span>
        </div>
    );
}
