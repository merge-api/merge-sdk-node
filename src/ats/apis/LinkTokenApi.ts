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
    EndUserDetailsRequest,
    EndUserDetailsRequestFromJSON,
    EndUserDetailsRequestToJSON,
    LinkToken,
    LinkTokenFromJSON,
    LinkTokenToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface LinkTokenCreateRequest {
    endUserDetailsRequest: EndUserDetailsRequest;
}

/**
 * 
 */
export class LinkTokenApi extends runtime.BaseAPI {

    /**
     * Creates a link token to be used when linking a new end user.
     */
    async linkTokenCreateRaw(requestParameters: LinkTokenCreateRequest): Promise<runtime.ApiResponse<LinkToken | undefined>> {
        if (requestParameters.endUserDetailsRequest === null || requestParameters.endUserDetailsRequest === undefined) {
            throw new runtime.RequiredError('endUserDetailsRequest','Required parameter requestParameters.endUserDetailsRequest was null or undefined when calling linkTokenCreate.');
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
            path: `/ats/v1/link-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EndUserDetailsRequestToJSON(requestParameters.endUserDetailsRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkTokenFromJSON(jsonValue));
    }

    /**
     * Creates a link token to be used when linking a new end user.
     */
    async linkTokenCreate(requestParameters: LinkTokenCreateRequest): Promise<LinkToken | undefined> {
        const response = await this.linkTokenCreateRaw(requestParameters);
        return await response.value();
    }

}
