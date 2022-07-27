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
    EEOC,
    EEOCFromJSON,
    EEOCToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface EeocsListRequest {
    xAccountToken: string;
    candidateId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: EeocsListRemoteFieldsEnum;
    remoteId?: string | null;
}

export interface EeocsRetrieveRequest {
    xAccountToken: string;
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: EeocsRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class EeocsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `EEOC` objects.
     */
    async eeocsListRaw(requestParameters: EeocsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<EEOC>>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling eeocsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.candidateId !== undefined) {
            queryParameters['candidate_id'] = requestParameters.candidateId;
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
            path: `/eeocs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `EEOC` objects.
     */
    async eeocsList(requestParameters: EeocsListRequest): Promise<MergePaginatedResponse<EEOC>> {
        const response = await this.eeocsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `EEOC` object with the given `id`.
     */
    async eeocsRetrieveRaw(requestParameters: EeocsRetrieveRequest): Promise<runtime.ApiResponse<EEOC>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling eeocsRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling eeocsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
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
            path: `/eeocs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EEOCFromJSON(jsonValue));
    }

    /**
     * Returns an `EEOC` object with the given `id`.
     */
    async eeocsRetrieve(requestParameters: EeocsRetrieveRequest): Promise<EEOC> {
        const response = await this.eeocsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum EeocsListRemoteFieldsEnum {
    DisabilityStatus = 'disability_status',
    DisabilityStatusgender = 'disability_status,gender',
    DisabilityStatusgenderrace = 'disability_status,gender,race',
    DisabilityStatusgenderraceveteranStatus = 'disability_status,gender,race,veteran_status',
    DisabilityStatusgenderveteranStatus = 'disability_status,gender,veteran_status',
    DisabilityStatusrace = 'disability_status,race',
    DisabilityStatusraceveteranStatus = 'disability_status,race,veteran_status',
    DisabilityStatusveteranStatus = 'disability_status,veteran_status',
    Gender = 'gender',
    Genderrace = 'gender,race',
    GenderraceveteranStatus = 'gender,race,veteran_status',
    GenderveteranStatus = 'gender,veteran_status',
    Race = 'race',
    RaceveteranStatus = 'race,veteran_status',
    VeteranStatus = 'veteran_status'
}
/**
    * @export
    * @enum {string}
    */
export enum EeocsRetrieveRemoteFieldsEnum {
    DisabilityStatus = 'disability_status',
    DisabilityStatusgender = 'disability_status,gender',
    DisabilityStatusgenderrace = 'disability_status,gender,race',
    DisabilityStatusgenderraceveteranStatus = 'disability_status,gender,race,veteran_status',
    DisabilityStatusgenderveteranStatus = 'disability_status,gender,veteran_status',
    DisabilityStatusrace = 'disability_status,race',
    DisabilityStatusraceveteranStatus = 'disability_status,race,veteran_status',
    DisabilityStatusveteranStatus = 'disability_status,veteran_status',
    Gender = 'gender',
    Genderrace = 'gender,race',
    GenderraceveteranStatus = 'gender,race,veteran_status',
    GenderveteranStatus = 'gender,veteran_status',
    Race = 'race',
    RaceveteranStatus = 'race,veteran_status',
    VeteranStatus = 'veteran_status'
}
