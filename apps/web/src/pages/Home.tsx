import Select from '../components/select';
import { useStopsQuery } from '../hooks/stops';

export const Home = () => {
    const { isLoading, data, error } = useStopsQuery();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <Select
                options={data?.map((stop) => stop.name) || []}
                onChange={(value) => console.log(value)}
                value=""
            />
        </>
    );
};
