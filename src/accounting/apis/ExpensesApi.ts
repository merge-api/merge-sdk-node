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
    ExpenseEndpointRequest,
    ExpenseEndpointRequestFromJSON,
    ExpenseEndpointRequestToJSON,
    ExpenseResponse,
    ExpenseResponseFromJSON,
    ExpenseResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface ExpensesCreateRequest {
    expenseEndpointRequest: ExpenseEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ExpensesListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<ExpensesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
    transactionDateAfter?: Date | null;
    transactionDateBefore?: Date | null;
}

// extends MergeMetaRequest
export interface ExpensesRetrieveRequest {
    id: string;
    expand?: Array<ExpensesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class ExpensesApi extends runtime.BaseAPI {

    /**
     * Creates an `Expense` object with the given values.
     */
    async expensesCreateRaw(requestParameters: ExpensesCreateRequest): Promise<runtime.ApiResponse<ExpenseResponse | undefined>> {
        if (requestParameters.expenseEndpointRequest === null || requestParameters.expenseEndpointRequest === undefined) {
            throw new runtime.RequiredError('expenseEndpointRequest','Required parameter requestParameters.expenseEndpointRequest was null or undefined when calling expensesCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/expenses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExpenseEndpointRequestToJSON(requestParameters.expenseEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpenseResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Expense` object with the given values.
     */
    async expensesCreate(requestParameters: ExpensesCreateRequest): Promise<ExpenseResponse | undefined> {
        const response = await this.expensesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Expense` objects.
     */
    async expensesListRaw(requestParameters: ExpensesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Expense> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
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

        if (requestParameters.transactionDateAfter !== undefined) {
            queryParameters['transaction_date_after'] = (requestParameters.transactionDateAfter as any).toISOString();
        }

        if (requestParameters.transactionDateBefore !== undefined) {
            queryParameters['transaction_date_before'] = (requestParameters.transactionDateBefore as any).toISOString();
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/expenses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ExpenseFromJSON));
    }

    /**
     * Returns a list of `Expense` objects.
     */
    async expensesList(requestParameters: ExpensesListRequest): Promise<MergePaginatedResponse<Expense> | undefined> {
        const response = await this.expensesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Expense` POSTs.
     */
    async expensesMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};


        if (requestParameters !== undefined) {
            Object.keys(requestParameters.misc_params_query).forEach((key) => {
                if (requestParameters.misc_params_query[key] !== undefined) {
                    queryParameters[key] = requestParameters.misc_params_query[key];
                }
            })
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/expenses/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Expense` POSTs.
     */
    async expensesMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.expensesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Expense` object with the given `id`.
     */
    async expensesRetrieveRaw(requestParameters: ExpensesRetrieveRequest): Promise<runtime.ApiResponse<Expense | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling expensesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/accounting/v1/expenses/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpenseFromJSON(jsonValue));
    }

    /**
     * Returns an `Expense` object with the given `id`.
     */
    async expensesRetrieve(requestParameters: ExpensesRetrieveRequest): Promise<Expense | undefined> {
        const response = await this.expensesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum ExpensesListExpandEnum {
    Account = 'account',
    Company = 'company',
    Contact = 'contact'
}
/**
* @export
* @enum {string}
*/
export enum ExpensesRetrieveExpandEnum {
    Account = 'account',
    Company = 'company',
    Contact = 'contact'
}
