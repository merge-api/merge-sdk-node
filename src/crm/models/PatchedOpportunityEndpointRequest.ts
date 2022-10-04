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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    PatchedOpportunityRequest,
    PatchedOpportunityRequestFromJSON,
    PatchedOpportunityRequestFromJSONTyped,
    PatchedOpportunityRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface PatchedOpportunityEndpointRequest
 */
export interface PatchedOpportunityEndpointRequest {
    /**
     * 
     * @type {PatchedOpportunityRequest}
     * @memberof PatchedOpportunityEndpointRequest
     */
    model: PatchedOpportunityRequest;
}

export function PatchedOpportunityEndpointRequestFromJSON(json: JSONValue): PatchedOpportunityEndpointRequest | undefined {
    return PatchedOpportunityEndpointRequestFromJSONTyped(json);
}

export function PatchedOpportunityEndpointRequestFromJSONTyped(json: JSONValue): PatchedOpportunityEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': PatchedOpportunityRequestFromJSON(json['model']) as PatchedOpportunityRequest,
    };
}

export function PatchedOpportunityEndpointRequestToJSON(value?: PatchedOpportunityEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': PatchedOpportunityRequestToJSON(value.model),
    };
}

