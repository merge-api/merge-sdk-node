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
    SyncStatus,
    SyncStatusFromJSON,
    SyncStatusToJSON,
} from '../models';

export interface SyncStatusResyncCreateRequest {
    xAccountToken: string;
}

/**
 * 
 */
export class ForceResyncApi extends runtime.BaseAPI {

    /**
     * Force re-sync of all models. This is only available for organizations on Merge\'s Grow and Expand plans.
     */
    async syncStatusResyncCreateRaw(requestParameters: SyncStatusResyncCreateRequest): Promise<runtime.ApiResponse<Array<SyncStatus>>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling syncStatusResyncCreate.');
        }

        const queryParameters: any = {};

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
            path: `/sync-status/resync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SyncStatusFromJSON));
    }

    /**
     * Force re-sync of all models. This is only available for organizations on Merge\'s Grow and Expand plans.
     */
    async syncStatusResyncCreate(requestParameters: SyncStatusResyncCreateRequest): Promise<Array<SyncStatus>> {
        const response = await this.syncStatusResyncCreateRaw(requestParameters);
        return await response.value();
    }

}
