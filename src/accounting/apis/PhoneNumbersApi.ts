/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    AccountingPhoneNumber,
    AccountingPhoneNumberFromJSON,
    AccountingPhoneNumberToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface PhoneNumbersRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class PhoneNumbersApi extends runtime.BaseAPI {

    /**
     * Returns an `AccountingPhoneNumber` object with the given `id`.
     */
    async phoneNumbersRetrieveRaw(requestParameters: PhoneNumbersRetrieveRequest): Promise<runtime.ApiResponse<AccountingPhoneNumber | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling phoneNumbersRetrieve.');
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
            path: `/accounting/v1/phone-numbers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountingPhoneNumberFromJSON(jsonValue));
    }

    /**
     * Returns an `AccountingPhoneNumber` object with the given `id`.
     */
    async phoneNumbersRetrieve(requestParameters: PhoneNumbersRetrieveRequest): Promise<AccountingPhoneNumber | undefined> {
        const response = await this.phoneNumbersRetrieveRaw(requestParameters);
        return await response.value();
    }

}
