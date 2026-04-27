import { Outlet } from 'react-router-dom';
import NavigationBar from './components/navigation/NavigationBar';

function App() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
}

export default App;
