/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ErrorInfo, ResponseStatus, TypedApiResponse } from '../interfaces/api-response';

@Injectable()
export class ApiResponseHelperService {
    /**
     * Creates a success response with data.
     * @param data - The data to include in the response.
     * @returns {TypedApiResponse<T>} The success response.
     */
    getSuccessResponse<T>(data: T): TypedApiResponse<T> {
        return {
            status: ResponseStatus.Success,
            hasErrors: false,
            data: data,
        };
    }
    // const successResponse = apiResponseHelper.getSuccessResponse({ id: 1, name: 'John Doe' });

    /**
     * Creates a failure response with multiple errors.
     * @param errors - An array of error information.
     * @param data - Optional data to include in the response.
     * @returns {TypedApiResponse<T>} The failure response.
     */
    getFailureResponse<T>(errors: ErrorInfo[], data: T | null = null): TypedApiResponse<T | null> {
        return {
            status: ResponseStatus.Failure,
            hasErrors: true,
            data: data,
            errors: errors,
        };
    }
    // const failureResponse = apiResponseHelper.getFailureResponse(
    //     [
    //         { code: 'ERR001', message: 'Invalid input' },
    //         { code: 'ERR002', message: 'Another error' }
    //     ],
    //     null
    // );

    /**
     * Creates a failure response with a single error.
     * @param error - Single error information.
     * @param data - Optional data to include in the response.
     * @returns {TypedApiResponse<T>} The failure response.
     */
    getFailureResponseSingle<T>(error: ErrorInfo, data: T | null = null): TypedApiResponse<T | null> {
        return {
            status: ResponseStatus.Failure,
            hasErrors: true,
            data: data,
            errors: [error],
        };
    }
    // const singleErrorResponse = apiResponseHelper.getFailureResponseSingle(
    //     { code: 'ERR003', message: 'User not found' }
    // );
}
