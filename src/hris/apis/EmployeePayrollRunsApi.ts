/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../runtime';
import {
    EmployeePayrollRun,
    EmployeePayrollRunFromJSON,
    EmployeePayrollRunToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface EmployeePayrollRunsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    employeeId?: string;
    endedAfter?: Date | null;
    endedBefore?: Date | null;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    payrollRunId?: string;
    remoteId?: string | null;
    startedAfter?: Date | null;
    startedBefore?: Date | null;
}

export interface EmployeePayrollRunsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class EmployeePayrollRunsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `EmployeePayrollRun` objects.
     */
    async employeePayrollRunsListRaw(requestParameters: EmployeePayrollRunsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<EmployeePayrollRun> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.employeeId !== undefined) {
            queryParameters['employee_id'] = requestParameters.employeeId;
        }

        if (requestParameters.endedAfter !== undefined) {
            queryParameters['ended_after'] = (requestParameters.endedAfter as any).toISOString();
        }

        if (requestParameters.endedBefore !== undefined) {
            queryParameters['ended_before'] = (requestParameters.endedBefore as any).toISOString();
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.payrollRunId !== undefined) {
            queryParameters['payroll_run_id'] = requestParameters.payrollRunId;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.startedAfter !== undefined) {
            queryParameters['started_after'] = (requestParameters.startedAfter as any).toISOString();
        }

        if (requestParameters.startedBefore !== undefined) {
            queryParameters['started_before'] = (requestParameters.startedBefore as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/employee-payroll-runs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `EmployeePayrollRun` objects.
     */
    async employeePayrollRunsList(requestParameters: EmployeePayrollRunsListRequest): Promise<MergePaginatedResponse<EmployeePayrollRun> | undefined> {
        const response = await this.employeePayrollRunsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     */
    async employeePayrollRunsRetrieveRaw(requestParameters: EmployeePayrollRunsRetrieveRequest): Promise<runtime.ApiResponse<EmployeePayrollRun | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeePayrollRunsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/employee-payroll-runs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeePayrollRunFromJSON(jsonValue));
    }

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     */
    async employeePayrollRunsRetrieve(requestParameters: EmployeePayrollRunsRetrieveRequest): Promise<EmployeePayrollRun | undefined> {
        const response = await this.employeePayrollRunsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
