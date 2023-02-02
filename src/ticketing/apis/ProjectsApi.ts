/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    
    Project,
    ProjectFromJSON,
    ProjectToJSON,
    User,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface ProjectsListRequest {
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

export interface ProjectsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

export interface ProjectsUsersListRequest {
    parentId: string;
    cursor?: string;
    expand?: Array<ProjectsUsersListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

/**
 * 
 */
export class ProjectsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Project` objects.
     */
    async projectsListRaw(requestParameters: ProjectsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Project> | undefined>> {
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
            path: `/ticketing/v1/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Project` objects.
     */
    async projectsList(requestParameters: ProjectsListRequest): Promise<MergePaginatedResponse<Project> | undefined> {
        const response = await this.projectsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Project` object with the given `id`.
     */
    async projectsRetrieveRaw(requestParameters: ProjectsRetrieveRequest): Promise<runtime.ApiResponse<Project | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling projectsRetrieve.');
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
            path: `/ticketing/v1/projects/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
    }

    /**
     * Returns a `Project` object with the given `id`.
     */
    async projectsRetrieve(requestParameters: ProjectsRetrieveRequest): Promise<Project | undefined> {
        const response = await this.projectsRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `User` objects.
     */
    async projectsUsersListRaw(requestParameters: ProjectsUsersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<User> | undefined>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling projectsUsersList.');
        }

        const queryParameters: any = {};

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
            path: `/ticketing/v1/projects/{parent_id}/users`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `User` objects.
     */
    async projectsUsersList(requestParameters: ProjectsUsersListRequest): Promise<MergePaginatedResponse<User> | undefined> {
        const response = await this.projectsUsersListRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum ProjectsUsersListExpandEnum {
    Teams = 'teams'
}
