/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable prettier/prettier */
export enum ResponseStatus {
    Failure,
    Success
}

export interface ErrorInfo {
    code: string;
    message: string;
}

export interface ApiResponse {
    status: ResponseStatus;
    data: any | null;
    hasErrors: boolean;
    errors?: ErrorInfo[];
}

export interface TypedApiResponse<T> {
    status: ResponseStatus;
    data: T;
    hasErrors: boolean;
    errors?: ErrorInfo[];
}