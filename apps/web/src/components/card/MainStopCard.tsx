import { colorMap } from '@/lib/color.type';

type MainStopCardProps = {
    title: string;
    name: string;
    color: keyof typeof colorMap;
};

const MainStopCard = ({ title, name, color }: MainStopCardProps) => {
    return (
        <div
            className={`onSurface border-s-2 ${colorMap[color].border} p-4 w-64`}
        >
            <h2 className={`text-s mb-2 ${colorMap[color].text}`}>{title}</h2>
            <h1 className="text-2xl text-white">{name}</h1>
        </div>
    );
};

export default MainStopCard;
