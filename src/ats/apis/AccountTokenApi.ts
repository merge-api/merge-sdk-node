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
    AccountToken,
    AccountTokenFromJSON,
    AccountTokenToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface AccountTokenRetrieveRequest {
    publicToken: string;
}

/**
 * 
 */
export class AccountTokenApi extends runtime.BaseAPI {

    /**
     * Returns the account token for the end user with the provided public token.
     */
    async accountTokenRetrieveRaw(requestParameters: AccountTokenRetrieveRequest): Promise<runtime.ApiResponse<AccountToken | undefined>> {
        if (requestParameters.publicToken === null || requestParameters.publicToken === undefined) {
            throw new runtime.RequiredError('publicToken','Required parameter requestParameters.publicToken was null or undefined when calling accountTokenRetrieve.');
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
            path: `/ats/v1/account-token/{public_token}`.replace(`{${"public_token"}}`, encodeURIComponent(String(requestParameters.publicToken))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountTokenFromJSON(jsonValue));
    }

    /**
     * Returns the account token for the end user with the provided public token.
     */
    async accountTokenRetrieve(requestParameters: AccountTokenRetrieveRequest): Promise<AccountToken | undefined> {
        const response = await this.accountTokenRetrieveRaw(requestParameters);
        return await response.value();
    }

}
