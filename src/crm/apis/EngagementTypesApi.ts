/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    EngagementType,
    EngagementTypeFromJSON,
    EngagementTypeToJSON,
    RemoteFieldClass
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface EngagementTypesListRequest {
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

export interface EngagementTypesRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface EngagementTypesRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class EngagementTypesApi extends runtime.BaseAPI {

    /**
     * Returns a list of `EngagementType` objects.
     */
    async engagementTypesListRaw(requestParameters: EngagementTypesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<EngagementType> | undefined>> {
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


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagement-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `EngagementType` objects.
     */
    async engagementTypesList(requestParameters: EngagementTypesListRequest): Promise<MergePaginatedResponse<EngagementType> | undefined> {
        const response = await this.engagementTypesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async engagementTypesRemoteFieldClassesListRaw(requestParameters: EngagementTypesRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagement-types/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async engagementTypesRemoteFieldClassesList(requestParameters: EngagementTypesRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.engagementTypesRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `EngagementType` object with the given `id`.
     */
    async engagementTypesRetrieveRaw(requestParameters: EngagementTypesRetrieveRequest): Promise<runtime.ApiResponse<EngagementType | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling engagementTypesRetrieve.');
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
            path: `/crm/v1/engagement-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementTypeFromJSON(jsonValue));
    }

    /**
     * Returns an `EngagementType` object with the given `id`.
     */
    async engagementTypesRetrieve(requestParameters: EngagementTypesRetrieveRequest): Promise<EngagementType | undefined> {
        const response = await this.engagementTypesRetrieveRaw(requestParameters);
        return await response.value();
    }

}
