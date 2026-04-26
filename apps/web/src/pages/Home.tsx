import { useStopsQuery } from '../hooks/stops';

export const Home = () => {
    console.log('Rendering Home component...');
    const { isLoading, data, error } = useStopsQuery();

    return (
        <>
            <h1 className="text-3xl">Hi there!</h1>
            {isLoading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            {error && <p>Error: {error.message}</p>}
        </>
    );
};
