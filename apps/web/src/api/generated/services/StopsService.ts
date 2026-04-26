/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { stops_StopDetailResponseDTO } from '../models/stops_StopDetailResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StopsService {
    /**
     * Get all stops
     * Get a list of all stops
     * @returns stops_StopDetailResponseDTO OK
     * @throws ApiError
     */
    public static getStops(): CancelablePromise<Array<stops_StopDetailResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stops',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get a stop by ID
     * Get a stop by its ID
     * @param id Stop ID
     * @returns stops_StopDetailResponseDTO OK
     * @throws ApiError
     */
    public static getStopById(
        id: number,
    ): CancelablePromise<stops_StopDetailResponseDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stops/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
}
