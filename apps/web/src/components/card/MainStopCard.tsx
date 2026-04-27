type MainStopCardProps = {
    title: string;
    name: string;
};

const MainStopCard = ({ title, name }: MainStopCardProps) => {
    return (
        <div className="surface onSurface rounded-lg border border-gray-600 p-4 w-64">
            <h2 className="text-s mb-2">{title}</h2>
            <h1 className="text-2xl font-bold">{name}</h1>
        </div>
    );
};

export default MainStopCard;
