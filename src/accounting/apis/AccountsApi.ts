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
    Account,
    AccountFromJSON,
    AccountToJSON,
    AccountEndpointRequest,
    AccountEndpointRequestFromJSON,
    AccountEndpointRequestToJSON,
    AccountResponse,
    AccountResponseFromJSON,
    AccountResponseToJSON,
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

export interface AccountsCreateRequest {
    accountEndpointRequest: AccountEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface AccountsListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<AccountsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: AccountsListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: AccountsListShowEnumOriginsEnum;
}

// extends MergeMetaRequest
export interface AccountsRetrieveRequest {
    id: string;
    expand?: Array<AccountsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: AccountsRetrieveRemoteFieldsEnum;
    showEnumOrigins?: AccountsRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Creates an `Account` object with the given values.
     */
    async accountsCreateRaw(requestParameters: AccountsCreateRequest): Promise<runtime.ApiResponse<AccountResponse | undefined>> {
        if (requestParameters.accountEndpointRequest === null || requestParameters.accountEndpointRequest === undefined) {
            throw new runtime.RequiredError('accountEndpointRequest','Required parameter requestParameters.accountEndpointRequest was null or undefined when calling accountsCreate.');
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
            path: `/accounting/v1/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountEndpointRequestToJSON(requestParameters.accountEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Account` object with the given values.
     */
    async accountsCreate(requestParameters: AccountsCreateRequest): Promise<AccountResponse | undefined> {
        const response = await this.accountsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Account` objects.
     */
    async accountsListRaw(requestParameters: AccountsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Account> | undefined>> {
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

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AccountFromJSON));
    }

    /**
     * Returns a list of `Account` objects.
     */
    async accountsList(requestParameters: AccountsListRequest): Promise<MergePaginatedResponse<Account> | undefined> {
        const response = await this.accountsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Account` POSTs.
     */
    async accountsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/accounting/v1/accounts/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Account` POSTs.
     */
    async accountsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.accountsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Account` object with the given `id`.
     */
    async accountsRetrieveRaw(requestParameters: AccountsRetrieveRequest): Promise<runtime.ApiResponse<Account | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling accountsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Returns an `Account` object with the given `id`.
     */
    async accountsRetrieve(requestParameters: AccountsRetrieveRequest): Promise<Account | undefined> {
        const response = await this.accountsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum AccountsListExpandEnum {
    Company = 'company'
}
/**
* @export
* @enum {string}
*/
export enum AccountsListRemoteFieldsEnum {
    Classification = 'classification',
    Classificationstatus = 'classification,status',
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum AccountsListShowEnumOriginsEnum {
    Classification = 'classification',
    Classificationstatus = 'classification,status',
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum AccountsRetrieveExpandEnum {
    Company = 'company'
}
/**
* @export
* @enum {string}
*/
export enum AccountsRetrieveRemoteFieldsEnum {
    Classification = 'classification',
    Classificationstatus = 'classification,status',
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum AccountsRetrieveShowEnumOriginsEnum {
    Classification = 'classification',
    Classificationstatus = 'classification,status',
    Status = 'status'
}
