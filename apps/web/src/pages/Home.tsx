import MainStopCard from '@/components/card/MainStopCard';
import SchematicMap from '@/components/map/Map';

export const Home = () => {
    return (
        <main className="h-[calc(100vh-64px)]">
            <SchematicMap />
            <div className="absolute top-16 left-0 flex flex-col gap-4 background">
                <MainStopCard
                    title="STARTING STOP"
                    name="Hlavní nádraží"
                    color="lime"
                />
                <MainStopCard
                    title="DESTINATION STOP"
                    name="Cílové nádraží"
                    color="red"
                />
            </div>
        </main>
    );
};
