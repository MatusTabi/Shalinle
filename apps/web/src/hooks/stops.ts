import { useQuery } from '@tanstack/react-query';
import ApiClient from '../api/ApiClient';

export const useStopsQuery = () => {
    console.log('Fetching stops...');
    return useQuery({
        queryKey: ['stops'],
        queryFn: () => ApiClient.getAllStops(),
    });
};
