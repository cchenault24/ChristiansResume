import '../App.css';
export default function Header({ children }: { children: string }) {
    return (
        <div className='header flex grow mb-6 items-center '>
            <span
                className={`flex-auto w-full text-center justify-center cursor-default select-none `}
            >
                <h1 className='text-4xl font-bold text-center antialiased bg-gradient-to-br from-default-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    {children}
                </h1>
            </span>
            <span className='flex-1'></span>
        </div>
    );
}
