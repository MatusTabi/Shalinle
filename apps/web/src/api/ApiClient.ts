import { StopsService } from './generated';

class ApiClient {
    getAllStops() {
        return StopsService.getStops();
    }

    getStopById(id: number) {
        return StopsService.getStopById(id);
    }
}

export default new ApiClient();
