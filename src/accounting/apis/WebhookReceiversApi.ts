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
    WebhookReceiver,
    WebhookReceiverFromJSON,
    WebhookReceiverToJSON,
    WebhookReceiverRequest,
    WebhookReceiverRequestFromJSON,
    WebhookReceiverRequestToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface WebhookReceiversCreateRequest {
    webhookReceiverRequest: WebhookReceiverRequest;
}

//
/**
 * 
 */
export class WebhookReceiversApi extends runtime.BaseAPI {

    /**
     * Creates a `WebhookReceiver` object with the given values.
     */
    async webhookReceiversCreateRaw(requestParameters: WebhookReceiversCreateRequest): Promise<runtime.ApiResponse<WebhookReceiver | undefined>> {
        if (requestParameters.webhookReceiverRequest === null || requestParameters.webhookReceiverRequest === undefined) {
            throw new runtime.RequiredError('webhookReceiverRequest','Required parameter requestParameters.webhookReceiverRequest was null or undefined when calling webhookReceiversCreate.');
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
            path: `/accounting/v1/webhook-receivers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookReceiverRequestToJSON(requestParameters.webhookReceiverRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookReceiverFromJSON(jsonValue));
    }

    /**
     * Creates a `WebhookReceiver` object with the given values.
     */
    async webhookReceiversCreate(requestParameters: WebhookReceiversCreateRequest): Promise<WebhookReceiver | undefined> {
        const response = await this.webhookReceiversCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `WebhookReceiver` objects.
     */
    async webhookReceiversListRaw(): Promise<runtime.ApiResponse<Array<WebhookReceiver> | undefined>> {
        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/webhook-receivers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebhookReceiverFromJSON));
    }

    /**
     * Returns a list of `WebhookReceiver` objects.
     */
    async webhookReceiversList(): Promise<Array<WebhookReceiver> | undefined> {
        const response = await this.webhookReceiversListRaw();
        return await response.value();
    }

}
