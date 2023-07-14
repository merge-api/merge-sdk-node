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
    CRMContactEndpointRequest,
    CRMContactEndpointRequestToJSON,
    CRMContactResponse,
    CRMContactResponseFromJSON,
    Contact,
    ContactFromJSON,
    IgnoreCommonModelRequest,
    IgnoreCommonModelRequestToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    PatchedCRMContactEndpointRequest,
    PatchedCRMContactEndpointRequestToJSON,
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

export interface ContactsCreateRequest {
    cRMContactEndpointRequest: CRMContactEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ContactsIgnoreCreateRequest {
    modelId: string;
    ignoreCommonModelRequest: IgnoreCommonModelRequest;
}

export interface ContactsListRequest {
    accountId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<ContactsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface ContactsMetaPatchRetrieveRequest extends MergeMetaRequest {
    id: string;
}

// extends MergeMetaRequest
export interface ContactsPartialUpdateRequest {
    id: string;
    patchedCRMContactEndpointRequest: PatchedCRMContactEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ContactsRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    pageSize?: number;
}

export interface ContactsRetrieveRequest {
    id: string;
    expand?: Array<ContactsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
}

/**
 * 
 */
export class ContactsApi extends runtime.BaseAPI {

    /**
     * Creates a `Contact` object with the given values.
     */
    async contactsCreateRaw(requestParameters: ContactsCreateRequest): Promise<runtime.ApiResponse<CRMContactResponse | undefined>> {
        if (requestParameters.cRMContactEndpointRequest === null || requestParameters.cRMContactEndpointRequest === undefined) {
            throw new runtime.RequiredError('cRMContactEndpointRequest','Required parameter requestParameters.cRMContactEndpointRequest was null or undefined when calling contactsCreate.');
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
            path: `/crm/v1/contacts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CRMContactEndpointRequestToJSON(requestParameters.cRMContactEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CRMContactResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Contact` object with the given values.
     */
    async contactsCreate(requestParameters: ContactsCreateRequest): Promise<CRMContactResponse | undefined> {
        const response = await this.contactsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async contactsIgnoreCreateRaw(requestParameters: ContactsIgnoreCreateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.modelId === null || requestParameters.modelId === undefined) {
            throw new runtime.RequiredError('modelId','Required parameter requestParameters.modelId was null or undefined when calling contactsIgnoreCreate.');
        }

        if (requestParameters.ignoreCommonModelRequest === null || requestParameters.ignoreCommonModelRequest === undefined) {
            throw new runtime.RequiredError('ignoreCommonModelRequest','Required parameter requestParameters.ignoreCommonModelRequest was null or undefined when calling contactsIgnoreCreate.');
        }

        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/contacts/ignore/{model_id}`.replace(`{${"model_id"}}`, encodeURIComponent(String(requestParameters.modelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IgnoreCommonModelRequestToJSON(requestParameters.ignoreCommonModelRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async contactsIgnoreCreate(requestParameters: ContactsIgnoreCreateRequest): Promise<void> {
        await this.contactsIgnoreCreateRaw(requestParameters);
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async contactsListRaw(requestParameters: ContactsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Contact> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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
            path: `/crm/v1/contacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ContactFromJSON));
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async contactsList(requestParameters: ContactsListRequest): Promise<MergePaginatedResponse<Contact> | undefined> {
        const response = await this.contactsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `CRMContact` PATCHs.
     */
    async contactsMetaPatchRetrieveRaw(requestParameters: ContactsMetaPatchRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling contactsMetaPatchRetrieve.');
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
            path: `/crm/v1/contacts/meta/patch/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `CRMContact` PATCHs.
     */
    async contactsMetaPatchRetrieve(requestParameters: ContactsMetaPatchRetrieveRequest): Promise<MetaResponse | undefined> {
        const response = await this.contactsMetaPatchRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `CRMContact` POSTs.
     */
    async contactsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/crm/v1/contacts/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `CRMContact` POSTs.
     */
    async contactsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.contactsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a `Contact` object with the given `id`.
     */
    async contactsPartialUpdateRaw(requestParameters: ContactsPartialUpdateRequest): Promise<runtime.ApiResponse<CRMContactResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling contactsPartialUpdate.');
        }

        if (requestParameters.patchedCRMContactEndpointRequest === null || requestParameters.patchedCRMContactEndpointRequest === undefined) {
            throw new runtime.RequiredError('patchedCRMContactEndpointRequest','Required parameter requestParameters.patchedCRMContactEndpointRequest was null or undefined when calling contactsPartialUpdate.');
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
            path: `/crm/v1/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedCRMContactEndpointRequestToJSON(requestParameters.patchedCRMContactEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CRMContactResponseFromJSON(jsonValue));
    }

    /**
     * Updates a `Contact` object with the given `id`.
     */
    async contactsPartialUpdate(requestParameters: ContactsPartialUpdateRequest): Promise<CRMContactResponse | undefined> {
        const response = await this.contactsPartialUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async contactsRemoteFieldClassesListRaw(requestParameters: ContactsRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
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

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
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
            path: `/crm/v1/contacts/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async contactsRemoteFieldClassesList(requestParameters: ContactsRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.contactsRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Contact` object with the given `id`.
     */
    async contactsRetrieveRaw(requestParameters: ContactsRetrieveRequest): Promise<runtime.ApiResponse<Contact | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling contactsRetrieve.');
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


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactFromJSON(jsonValue));
    }

    /**
     * Returns a `Contact` object with the given `id`.
     */
    async contactsRetrieve(requestParameters: ContactsRetrieveRequest): Promise<Contact | undefined> {
        const response = await this.contactsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum ContactsListExpandEnum {
    Account = 'account'
}
/**
* @export
* @enum {string}
*/
export enum ContactsRetrieveExpandEnum {
    Account = 'account'
}
