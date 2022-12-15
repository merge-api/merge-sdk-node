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
    BankInfo,
    BankInfoFromJSON,
    BankInfoToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface BankInfoListRequest {
    accountType?: BankInfoListAccountTypeEnum;
    bankName?: string | null;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    employeeId?: string;
    expand?: BankInfoListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    orderBy?: BankInfoListOrderByEnum;
    pageSize?: number;
    remoteFields?: BankInfoListRemoteFieldsEnum;
    remoteId?: string | null;
}

export interface BankInfoRetrieveRequest {
    id: string;
    expand?: BankInfoRetrieveExpandEnum;
    includeRemoteData?: boolean;
    remoteFields?: BankInfoRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class BankInfoApi extends runtime.BaseAPI {

    /**
     * Returns a list of `BankInfo` objects.
     */
    async bankInfoListRaw(requestParameters: BankInfoListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<BankInfo> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountType !== undefined) {
            queryParameters['account_type'] = requestParameters.accountType;
        }

        if (requestParameters.bankName !== undefined) {
            queryParameters['bank_name'] = requestParameters.bankName;
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

        if (requestParameters.employeeId !== undefined) {
            queryParameters['employee_id'] = requestParameters.employeeId;
        }

        if (requestParameters.expand !== undefined) {
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

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
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

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/bank-info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `BankInfo` objects.
     */
    async bankInfoList(requestParameters: BankInfoListRequest): Promise<MergePaginatedResponse<BankInfo> | undefined> {
        const response = await this.bankInfoListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `BankInfo` object with the given `id`.
     */
    async bankInfoRetrieveRaw(requestParameters: BankInfoRetrieveRequest): Promise<runtime.ApiResponse<BankInfo | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bankInfoRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/bank-info/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BankInfoFromJSON(jsonValue));
    }

    /**
     * Returns a `BankInfo` object with the given `id`.
     */
    async bankInfoRetrieve(requestParameters: BankInfoRetrieveRequest): Promise<BankInfo | undefined> {
        const response = await this.bankInfoRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum BankInfoListAccountTypeEnum {
    Checking = 'CHECKING',
    Savings = 'SAVINGS'
}
/**
* @export
* @enum {string}
*/
export enum BankInfoListExpandEnum {
    Employee = 'employee'
}
/**
* @export
* @enum {string}
*/
export enum BankInfoListOrderByEnum {
    RemoteCreatedAt = '-remote_created_at',
    RemoteCreatedAt = 'remote_created_at'
}
/**
* @export
* @enum {string}
*/
export enum BankInfoListRemoteFieldsEnum {
    AccountType = 'account_type'
}
/**
* @export
* @enum {string}
*/
export enum BankInfoRetrieveExpandEnum {
    Employee = 'employee'
}
/**
* @export
* @enum {string}
*/
export enum BankInfoRetrieveRemoteFieldsEnum {
    AccountType = 'account_type'
}
