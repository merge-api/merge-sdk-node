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
    
    TrackingCategory,
    TrackingCategoryFromJSON,
    TrackingCategoryToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface TrackingCategoriesListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<TrackingCategoriesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: TrackingCategoriesListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: TrackingCategoriesListShowEnumOriginsEnum;
}

export interface TrackingCategoriesRetrieveRequest {
    id: string;
    expand?: Array<TrackingCategoriesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: TrackingCategoriesRetrieveRemoteFieldsEnum;
    showEnumOrigins?: TrackingCategoriesRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class TrackingCategoriesApi extends runtime.BaseAPI {

    /**
     * Returns a list of `TrackingCategory` objects.
     */
    async trackingCategoriesListRaw(requestParameters: TrackingCategoriesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<TrackingCategory> | undefined>> {
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
            path: `/accounting/v1/tracking-categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, TrackingCategoryFromJSON));
    }

    /**
     * Returns a list of `TrackingCategory` objects.
     */
    async trackingCategoriesList(requestParameters: TrackingCategoriesListRequest): Promise<MergePaginatedResponse<TrackingCategory> | undefined> {
        const response = await this.trackingCategoriesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `TrackingCategory` object with the given `id`.
     */
    async trackingCategoriesRetrieveRaw(requestParameters: TrackingCategoriesRetrieveRequest): Promise<runtime.ApiResponse<TrackingCategory | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling trackingCategoriesRetrieve.');
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
            path: `/accounting/v1/tracking-categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackingCategoryFromJSON(jsonValue));
    }

    /**
     * Returns a `TrackingCategory` object with the given `id`.
     */
    async trackingCategoriesRetrieve(requestParameters: TrackingCategoriesRetrieveRequest): Promise<TrackingCategory | undefined> {
        const response = await this.trackingCategoriesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesListExpandEnum {
    Company = 'company'
}
/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesListRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesListShowEnumOriginsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesRetrieveExpandEnum {
    Company = 'company'
}
/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesRetrieveRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum TrackingCategoriesRetrieveShowEnumOriginsEnum {
    Status = 'status'
}
