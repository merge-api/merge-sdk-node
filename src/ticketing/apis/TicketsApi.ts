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
    MetaResponse,
    MetaResponseFromJSON,
    PatchedTicketEndpointRequest,
    PatchedTicketEndpointRequestToJSON,
    Ticket,
    TicketFromJSON,
    TicketEndpointRequest,
    TicketEndpointRequestToJSON,
    TicketResponse,
    TicketResponseFromJSON,
    User,
    UserFromJSON,
    RemoteFieldClass,
    RemoteFieldClassFromJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface TicketsCollaboratorsListRequest {
    parentId: string;
    cursor?: string;
    expand?: Array<TicketsCollaboratorsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface TicketsCreateRequest {
    ticketEndpointRequest: TicketEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface TicketsListRequest {
    accountId?: string;
    assigneeIds?: string;
    collectionIds?: string;
    completedAfter?: Date | null;
    completedBefore?: Date | null;
    contactId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    dueAfter?: Date | null;
    dueBefore?: Date | null;
    expand?: Array<TicketsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    parentTicketId?: string;
    priority?: TicketsListPriorityEnum;
    projectId?: string;
    remoteCreatedAfter?: Date | null;
    remoteCreatedBefore?: Date | null;
    remoteFields?: TicketsListRemoteFieldsEnum;
    remoteId?: string | null;
    remoteUpdatedAfter?: Date | null;
    remoteUpdatedBefore?: Date | null;
    showEnumOrigins?: TicketsListShowEnumOriginsEnum;
    status?: TicketsListStatusEnum;
    tags?: string;
    ticketType?: string | null;
}

export interface TicketsMetaPatchRetrieveRequest extends MergeMetaRequest {
    id: string;
}

// extends MergeMetaRequest
export interface TicketsPartialUpdateRequest {
    id: string;
    patchedTicketEndpointRequest: PatchedTicketEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface TicketsRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface TicketsRetrieveRequest {
    id: string;
    expand?: Array<TicketsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    remoteFields?: TicketsRetrieveRemoteFieldsEnum;
    showEnumOrigins?: TicketsRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class TicketsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `User` objects.
     */
    async ticketsCollaboratorsListRaw(requestParameters: TicketsCollaboratorsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<User> | undefined>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling ticketsCollaboratorsList.');
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
            path: `/ticketing/v1/tickets/{parent_id}/collaborators`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, UserFromJSON));
    }

    /**
     * Returns a list of `User` objects.
     */
    async ticketsCollaboratorsList(requestParameters: TicketsCollaboratorsListRequest): Promise<MergePaginatedResponse<User> | undefined> {
        const response = await this.ticketsCollaboratorsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a `Ticket` object with the given values.
     */
    async ticketsCreateRaw(requestParameters: TicketsCreateRequest): Promise<runtime.ApiResponse<TicketResponse | undefined>> {
        if (requestParameters.ticketEndpointRequest === null || requestParameters.ticketEndpointRequest === undefined) {
            throw new runtime.RequiredError('ticketEndpointRequest','Required parameter requestParameters.ticketEndpointRequest was null or undefined when calling ticketsCreate.');
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
            path: `/ticketing/v1/tickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TicketEndpointRequestToJSON(requestParameters.ticketEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Ticket` object with the given values.
     */
    async ticketsCreate(requestParameters: TicketsCreateRequest): Promise<TicketResponse | undefined> {
        const response = await this.ticketsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Ticket` objects.
     */
    async ticketsListRaw(requestParameters: TicketsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Ticket> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.assigneeIds !== undefined) {
            queryParameters['assignee_ids'] = requestParameters.assigneeIds;
        }

        if (requestParameters.collectionIds !== undefined) {
            queryParameters['collection_ids'] = requestParameters.collectionIds;
        }

        if (requestParameters.completedAfter !== undefined) {
            queryParameters['completed_after'] = (requestParameters.completedAfter as any).toISOString();
        }

        if (requestParameters.completedBefore !== undefined) {
            queryParameters['completed_before'] = (requestParameters.completedBefore as any).toISOString();
        }

        if (requestParameters.contactId !== undefined) {
            queryParameters['contact_id'] = requestParameters.contactId;
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

        if (requestParameters.dueAfter !== undefined) {
            queryParameters['due_after'] = (requestParameters.dueAfter as any).toISOString();
        }

        if (requestParameters.dueBefore !== undefined) {
            queryParameters['due_before'] = (requestParameters.dueBefore as any).toISOString();
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

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
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

        if (requestParameters.parentTicketId !== undefined) {
            queryParameters['parent_ticket_id'] = requestParameters.parentTicketId;
        }

        if (requestParameters.priority !== undefined) {
            queryParameters['priority'] = requestParameters.priority;
        }

        if (requestParameters.projectId !== undefined) {
            queryParameters['project_id'] = requestParameters.projectId;
        }

        if (requestParameters.remoteCreatedAfter !== undefined) {
            queryParameters['remote_created_after'] = (requestParameters.remoteCreatedAfter as any).toISOString();
        }

        if (requestParameters.remoteCreatedBefore !== undefined) {
            queryParameters['remote_created_before'] = (requestParameters.remoteCreatedBefore as any).toISOString();
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.remoteUpdatedAfter !== undefined) {
            queryParameters['remote_updated_after'] = (requestParameters.remoteUpdatedAfter as any).toISOString();
        }

        if (requestParameters.remoteUpdatedBefore !== undefined) {
            queryParameters['remote_updated_before'] = (requestParameters.remoteUpdatedBefore as any).toISOString();
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.ticketType !== undefined) {
            queryParameters['ticket_type'] = requestParameters.ticketType;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/tickets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, TicketFromJSON));
    }

    /**
     * Returns a list of `Ticket` objects.
     */
    async ticketsList(requestParameters: TicketsListRequest): Promise<MergePaginatedResponse<Ticket> | undefined> {
        const response = await this.ticketsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Ticket` PATCHs.
     */
    async ticketsMetaPatchRetrieveRaw(requestParameters: TicketsMetaPatchRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ticketsMetaPatchRetrieve.');
        }

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
            path: `/ticketing/v1/tickets/meta/patch/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Ticket` PATCHs.
     */
    async ticketsMetaPatchRetrieve(requestParameters: TicketsMetaPatchRetrieveRequest): Promise<MetaResponse | undefined> {
        const response = await this.ticketsMetaPatchRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Ticket` POSTs.
     */
    async ticketsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/ticketing/v1/tickets/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Ticket` POSTs.
     */
    async ticketsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.ticketsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a `Ticket` object with the given `id`.
     */
    async ticketsPartialUpdateRaw(requestParameters: TicketsPartialUpdateRequest): Promise<runtime.ApiResponse<TicketResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ticketsPartialUpdate.');
        }

        if (requestParameters.patchedTicketEndpointRequest === null || requestParameters.patchedTicketEndpointRequest === undefined) {
            throw new runtime.RequiredError('patchedTicketEndpointRequest','Required parameter requestParameters.patchedTicketEndpointRequest was null or undefined when calling ticketsPartialUpdate.');
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
            path: `/ticketing/v1/tickets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedTicketEndpointRequestToJSON(requestParameters.patchedTicketEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Updates a `Ticket` object with the given `id`.
     */
    async ticketsPartialUpdate(requestParameters: TicketsPartialUpdateRequest): Promise<TicketResponse | undefined> {
        const response = await this.ticketsPartialUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async ticketsRemoteFieldClassesListRaw(requestParameters: TicketsRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
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
            path: `/ticketing/v1/tickets/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async ticketsRemoteFieldClassesList(requestParameters: TicketsRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.ticketsRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Ticket` object with the given `id`.
     */
    async ticketsRetrieveRaw(requestParameters: TicketsRetrieveRequest): Promise<runtime.ApiResponse<Ticket | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ticketsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
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
            path: `/ticketing/v1/tickets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketFromJSON(jsonValue));
    }

    /**
     * Returns a `Ticket` object with the given `id`.
     */
    async ticketsRetrieve(requestParameters: TicketsRetrieveRequest): Promise<Ticket | undefined> {
        const response = await this.ticketsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum TicketsCollaboratorsListExpandEnum {
    Roles = 'roles',
    Teams = 'teams'
}
/**
* @export
* @enum {string}
*/
export enum TicketsListExpandEnum {
    Account = 'account',
    Assignees = 'assignees',
    Attachments = 'attachments',
    Collections = 'collections',
    Contact = 'contact',
    Creator = 'creator',
    ParentTicket = 'parent_ticket'
}
/**
* @export
* @enum {string}
*/
export enum TicketsListPriorityEnum {
    High = 'HIGH',
    Low = 'LOW',
    Normal = 'NORMAL',
    Urgent = 'URGENT'
}
/**
* @export
* @enum {string}
*/
export enum TicketsListRemoteFieldsEnum {
    Priority = 'priority',
    Prioritystatus = 'priority,status',
    PrioritystatusticketType = 'priority,status,ticket_type',
    PriorityticketType = 'priority,ticket_type',
    Status = 'status',
    StatusticketType = 'status,ticket_type',
    TicketType = 'ticket_type'
}
/**
* @export
* @enum {string}
*/
export enum TicketsListShowEnumOriginsEnum {
    Priority = 'priority',
    Prioritystatus = 'priority,status',
    PrioritystatusticketType = 'priority,status,ticket_type',
    PriorityticketType = 'priority,ticket_type',
    Status = 'status',
    StatusticketType = 'status,ticket_type',
    TicketType = 'ticket_type'
}
/**
* @export
* @enum {string}
*/
export enum TicketsListStatusEnum {
    Closed = 'CLOSED',
    InProgress = 'IN_PROGRESS',
    OnHold = 'ON_HOLD',
    Open = 'OPEN'
}
/**
* @export
* @enum {string}
*/
export enum TicketsRetrieveExpandEnum {
    Account = 'account',
    Assignees = 'assignees',
    Attachments = 'attachments',
    Collections = 'collections',
    Contact = 'contact',
    Creator = 'creator',
    ParentTicket = 'parent_ticket'
}
/**
* @export
* @enum {string}
*/
export enum TicketsRetrieveRemoteFieldsEnum {
    Priority = 'priority',
    Prioritystatus = 'priority,status',
    PrioritystatusticketType = 'priority,status,ticket_type',
    PriorityticketType = 'priority,ticket_type',
    Status = 'status',
    StatusticketType = 'status,ticket_type',
    TicketType = 'ticket_type'
}
/**
* @export
* @enum {string}
*/
export enum TicketsRetrieveShowEnumOriginsEnum {
    Priority = 'priority',
    Prioritystatus = 'priority,status',
    PrioritystatusticketType = 'priority,status,ticket_type',
    PriorityticketType = 'priority,ticket_type',
    Status = 'status',
    StatusticketType = 'status,ticket_type',
    TicketType = 'ticket_type'
}
