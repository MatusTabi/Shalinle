import { useSuspenseQuery } from '@tanstack/react-query';
import ApiClient from '../api/ApiClient';

export const useStopsQuery = () => {
    return useSuspenseQuery({
        queryKey: ['stops'],
        queryFn: () => ApiClient.getAllStops(),
    });
};
