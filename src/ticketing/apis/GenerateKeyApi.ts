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
    GenerateRemoteKeyRequest,
    GenerateRemoteKeyRequestFromJSON,
    GenerateRemoteKeyRequestToJSON,
    RemoteKey,
    RemoteKeyFromJSON,
    RemoteKeyToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface GenerateKeyCreateRequest {
    generateRemoteKeyRequest: GenerateRemoteKeyRequest;
}

/**
 * 
 */
export class GenerateKeyApi extends runtime.BaseAPI {

    /**
     * Create a remote key.
     */
    async generateKeyCreateRaw(requestParameters: GenerateKeyCreateRequest): Promise<runtime.ApiResponse<RemoteKey | undefined>> {
        if (requestParameters.generateRemoteKeyRequest === null || requestParameters.generateRemoteKeyRequest === undefined) {
            throw new runtime.RequiredError('generateRemoteKeyRequest','Required parameter requestParameters.generateRemoteKeyRequest was null or undefined when calling generateKeyCreate.');
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
            path: `/ticketing/v1/generate-key`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateRemoteKeyRequestToJSON(requestParameters.generateRemoteKeyRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoteKeyFromJSON(jsonValue));
    }

    /**
     * Create a remote key.
     */
    async generateKeyCreate(requestParameters: GenerateKeyCreateRequest): Promise<RemoteKey | undefined> {
        const response = await this.generateKeyCreateRaw(requestParameters);
        return await response.value();
    }

}
