import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
            </nav>

            <Outlet />
        </>
    );
}

export default App;
