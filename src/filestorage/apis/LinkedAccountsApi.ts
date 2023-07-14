/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
	AccountDetailsAndActions
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface LinkedAccountsListRequest {
    category?: LinkedAccountsListCategoryEnum;
    cursor?: string;
    endUserEmailAddress?: string;
    endUserOrganizationName?: string;
    endUserOriginId?: string;
    endUserOriginIds?: string;
    id?: string;
    ids?: string;
    includeDuplicates?: boolean;
    integrationName?: string;
    isTestAccount?: string;
    pageSize?: number;
    status?: string;
}

/**
 * 
 */
export class LinkedAccountsApi extends runtime.BaseAPI {

    /**
     * List linked accounts for your organization.
     */
    async linkedAccountsListRaw(requestParameters: LinkedAccountsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<AccountDetailsAndActions> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.category !== undefined) {
            queryParameters['category'] = requestParameters.category;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.endUserEmailAddress !== undefined) {
            queryParameters['end_user_email_address'] = requestParameters.endUserEmailAddress;
        }

        if (requestParameters.endUserOrganizationName !== undefined) {
            queryParameters['end_user_organization_name'] = requestParameters.endUserOrganizationName;
        }

        if (requestParameters.endUserOriginId !== undefined) {
            queryParameters['end_user_origin_id'] = requestParameters.endUserOriginId;
        }

        if (requestParameters.endUserOriginIds !== undefined) {
            queryParameters['end_user_origin_ids'] = requestParameters.endUserOriginIds;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        if (requestParameters.includeDuplicates !== undefined) {
            queryParameters['include_duplicates'] = requestParameters.includeDuplicates;
        }

        if (requestParameters.integrationName !== undefined) {
            queryParameters['integration_name'] = requestParameters.integrationName;
        }

        if (requestParameters.isTestAccount !== undefined) {
            queryParameters['is_test_account'] = requestParameters.isTestAccount;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/filestorage/v1/linked-accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AccountDetailsAndActionsFromJSON));
    }

    /**
     * List linked accounts for your organization.
     */
    async linkedAccountsList(requestParameters: LinkedAccountsListRequest): Promise<MergePaginatedResponse<AccountDetailsAndActions> | undefined> {
        const response = await this.linkedAccountsListRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum LinkedAccountsListCategoryEnum {
    Accounting = 'accounting',
    Ats = 'ats',
    Crm = 'crm',
    Filestorage = 'filestorage',
    Hris = 'hris',
    Mktg = 'mktg',
    Ticketing = 'ticketing'
}
