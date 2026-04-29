import MainStopCard from '../components/card/MainStopCard';

import Map from '../components/Map';

export const Home = () => {
    return (
        <main className="py-10 px-8 flex flex-col gap-8">
            <div className="absolute top-30 left-10 flex flex-col gap-4">
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

            <Map />

            {/* <StopPoint
                className="top-100 left-300"
                name="Hlavni nadrazi"
                color="lime"
            />
            <StopPoint
                className="top-150 left-100"
                name="Cílové nádraží"
                color="red"
            /> */}
        </main>
    );
};
