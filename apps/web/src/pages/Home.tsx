import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from '../components/ui/combobox';
import Arrow from '../components/Arrow';
import MainStopCard from '../components/card/MainStopCard';
import Map from '../components/Map';

export const Home = () => {
    // const { isLoading, data, error } = useStopsQuery();

    return (
        <main className="py-10 px-64 flex flex-col gap-8">
            <section className="flex flex-row justify-between items-center">
                <MainStopCard title="STARTING STOP" name="Hlavní nádraží" />
                <Arrow />
                <MainStopCard title="DESTINATION STOP" name="Cílové nádraží" />
            </section>
            <Map />
            <section>
                <Combobox items={['Prague', 'Brno', 'Ostrava']}>
                    <ComboboxInput placeholder="Search for a stop..." />
                    <ComboboxContent>
                        <ComboboxEmpty>No stops found.</ComboboxEmpty>
                        <ComboboxList>
                            {['Prague', 'Brno', 'Ostrava'].map((stop) => (
                                <ComboboxItem key={stop} value={stop}>
                                    {stop}
                                </ComboboxItem>
                            ))}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>
            </section>
        </main>
    );
};
