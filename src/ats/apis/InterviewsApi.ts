/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
    ScheduledInterview,
    ScheduledInterviewFromJSON,
    ScheduledInterviewToJSON,
    ScheduledInterviewEndpointRequest,
    ScheduledInterviewEndpointRequestFromJSON,
    ScheduledInterviewEndpointRequestToJSON,
    ScheduledInterviewResponse,
    ScheduledInterviewResponseFromJSON,
    ScheduledInterviewResponseToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface InterviewsCreateRequest {
    scheduledInterviewEndpointRequest: ScheduledInterviewEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface InterviewsListRequest {
    applicationId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<InterviewsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    jobInterviewStageId?: string;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    organizerId?: string;
    pageSize?: number;
    remoteFields?: InterviewsListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: InterviewsListShowEnumOriginsEnum;
}

// extends MergeMetaRequest
export interface InterviewsRetrieveRequest {
    id: string;
    expand?: Array<InterviewsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: InterviewsRetrieveRemoteFieldsEnum;
    showEnumOrigins?: InterviewsRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class InterviewsApi extends runtime.BaseAPI {

    /**
     * Creates a `ScheduledInterview` object with the given values.
     */
    async interviewsCreateRaw(requestParameters: InterviewsCreateRequest): Promise<runtime.ApiResponse<ScheduledInterviewResponse | undefined>> {
        if (requestParameters.scheduledInterviewEndpointRequest === null || requestParameters.scheduledInterviewEndpointRequest === undefined) {
            throw new runtime.RequiredError('scheduledInterviewEndpointRequest','Required parameter requestParameters.scheduledInterviewEndpointRequest was null or undefined when calling interviewsCreate.');
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
            path: `/ats/v1/interviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduledInterviewEndpointRequestToJSON(requestParameters.scheduledInterviewEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledInterviewResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `ScheduledInterview` object with the given values.
     */
    async interviewsCreate(requestParameters: InterviewsCreateRequest): Promise<ScheduledInterviewResponse | undefined> {
        const response = await this.interviewsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `ScheduledInterview` objects.
     */
    async interviewsListRaw(requestParameters: InterviewsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<ScheduledInterview> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.applicationId !== undefined) {
            queryParameters['application_id'] = requestParameters.applicationId;
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

        if (requestParameters.jobInterviewStageId !== undefined) {
            queryParameters['job_interview_stage_id'] = requestParameters.jobInterviewStageId;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.organizerId !== undefined) {
            queryParameters['organizer_id'] = requestParameters.organizerId;
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
            path: `/ats/v1/interviews`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `ScheduledInterview` objects.
     */
    async interviewsList(requestParameters: InterviewsListRequest): Promise<MergePaginatedResponse<ScheduledInterview> | undefined> {
        const response = await this.interviewsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `ScheduledInterview` POSTs.
     */
    async interviewsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/ats/v1/interviews/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `ScheduledInterview` POSTs.
     */
    async interviewsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.interviewsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `ScheduledInterview` object with the given `id`.
     */
    async interviewsRetrieveRaw(requestParameters: InterviewsRetrieveRequest): Promise<runtime.ApiResponse<ScheduledInterview | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interviewsRetrieve.');
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
            path: `/ats/v1/interviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledInterviewFromJSON(jsonValue));
    }

    /**
     * Returns a `ScheduledInterview` object with the given `id`.
     */
    async interviewsRetrieve(requestParameters: InterviewsRetrieveRequest): Promise<ScheduledInterview | undefined> {
        const response = await this.interviewsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum InterviewsListExpandEnum {
    Application = 'application',
    Interviewers = 'interviewers',
    JobInterviewStage = 'job_interview_stage',
    Organizer = 'organizer'
}
/**
* @export
* @enum {string}
*/
export enum InterviewsListRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum InterviewsListShowEnumOriginsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum InterviewsRetrieveExpandEnum {
    Application = 'application',
    Interviewers = 'interviewers',
    JobInterviewStage = 'job_interview_stage',
    Organizer = 'organizer'
}
/**
* @export
* @enum {string}
*/
export enum InterviewsRetrieveRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum InterviewsRetrieveShowEnumOriginsEnum {
    Status = 'status'
}
