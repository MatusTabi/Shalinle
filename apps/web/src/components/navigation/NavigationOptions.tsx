import { Link } from 'react-router-dom';
import { CircleQuestionMark, User } from 'lucide-react';

const NavigationOptions = () => (
    <ul className="flex gap-4">
        <li>
            <Link to="/about">
                <CircleQuestionMark />
            </Link>
        </li>
        <li>
            <Link to="/profile">
                <User />
            </Link>
        </li>
    </ul>
);

export default NavigationOptions;
