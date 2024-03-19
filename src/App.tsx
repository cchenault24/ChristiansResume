import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { AppProvider } from './context/AppContext';
import Container from './components/Container';

function App() {
    return (
        <NextUIProvider>
            <AppProvider>{<Container />}</AppProvider>
        </NextUIProvider>
    );
}

export default App;
