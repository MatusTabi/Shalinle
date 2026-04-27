import NavigationHome from './NavigationHome';
import NavigationOptions from './NavigationOptions';

const NavigationBar = () => {
    return (
        <nav className="bg-transparent border-b border-gray-700 px-16 py-2 text-white navbar flex justify-between items-center list-none">
            <NavigationHome />
            <NavigationOptions />
        </nav>
    );
};

export default NavigationBar;
