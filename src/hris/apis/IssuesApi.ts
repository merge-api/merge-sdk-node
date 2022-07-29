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
    Issue,
    IssueFromJSON,
    IssueToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface IssuesListRequest {
    accountToken?: string;
    cursor?: string;
    endDate?: string;
    endUserOrganizationName?: string;
    firstIncidentTimeAfter?: Date | null;
    firstIncidentTimeBefore?: Date | null;
    includeMuted?: string;
    integrationName?: string;
    lastIncidentTimeAfter?: Date | null;
    lastIncidentTimeBefore?: Date | null;
    pageSize?: number;
    startDate?: string;
    status?: IssuesListStatusEnum;
}

export interface IssuesRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class IssuesApi extends runtime.BaseAPI {

    /**
     * Gets issues.
     */
    async issuesListRaw(requestParameters: IssuesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Issue> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountToken !== undefined) {
            queryParameters['account_token'] = requestParameters.accountToken;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['end_date'] = requestParameters.endDate;
        }

        if (requestParameters.endUserOrganizationName !== undefined) {
            queryParameters['end_user_organization_name'] = requestParameters.endUserOrganizationName;
        }

        if (requestParameters.firstIncidentTimeAfter !== undefined) {
            queryParameters['first_incident_time_after'] = (requestParameters.firstIncidentTimeAfter as any).toISOString();
        }

        if (requestParameters.firstIncidentTimeBefore !== undefined) {
            queryParameters['first_incident_time_before'] = (requestParameters.firstIncidentTimeBefore as any).toISOString();
        }

        if (requestParameters.includeMuted !== undefined) {
            queryParameters['include_muted'] = requestParameters.includeMuted;
        }

        if (requestParameters.integrationName !== undefined) {
            queryParameters['integration_name'] = requestParameters.integrationName;
        }

        if (requestParameters.lastIncidentTimeAfter !== undefined) {
            queryParameters['last_incident_time_after'] = (requestParameters.lastIncidentTimeAfter as any).toISOString();
        }

        if (requestParameters.lastIncidentTimeBefore !== undefined) {
            queryParameters['last_incident_time_before'] = (requestParameters.lastIncidentTimeBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['start_date'] = requestParameters.startDate;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/issues`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Gets issues.
     */
    async issuesList(requestParameters: IssuesListRequest): Promise<MergePaginatedResponse<Issue> | undefined> {
        const response = await this.issuesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a specific issue.
     */
    async issuesRetrieveRaw(requestParameters: IssuesRetrieveRequest): Promise<runtime.ApiResponse<Issue | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling issuesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/issues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueFromJSON(jsonValue));
    }

    /**
     * Get a specific issue.
     */
    async issuesRetrieve(requestParameters: IssuesRetrieveRequest): Promise<Issue | undefined> {
        const response = await this.issuesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum IssuesListStatusEnum {
    Ongoing = 'ONGOING',
    Resolved = 'RESOLVED'
}