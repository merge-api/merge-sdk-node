/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    Expense,
    ExpenseFromJSON,
    ExpenseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface ExpensesListRequest {
    xAccountToken: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface ExpensesRetrieveRequest {
    xAccountToken: string;
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class ExpensesApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Expense` objects.
     */
    async expensesListRaw(requestParameters: ExpensesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Expense>>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling expensesList.');
        }

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

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }




        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; //  authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/expenses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Expense` objects.
     */
    async expensesList(requestParameters: ExpensesListRequest): Promise<MergePaginatedResponse<Expense>> {
        const response = await this.expensesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Expense` object with the given `id`.
     */
    async expensesRetrieveRaw(requestParameters: ExpensesRetrieveRequest): Promise<runtime.ApiResponse<Expense>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling expensesRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling expensesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }




        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; //  authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/expenses/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpenseFromJSON(jsonValue));
    }

    /**
     * Returns an `Expense` object with the given `id`.
     */
    async expensesRetrieve(requestParameters: ExpensesRetrieveRequest): Promise<Expense> {
        const response = await this.expensesRetrieveRaw(requestParameters);
        return await response.value();
    }

}
