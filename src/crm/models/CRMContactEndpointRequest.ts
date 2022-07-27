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
    ContactRequest,
    ContactRequestFromJSON,
    ContactRequestFromJSONTyped,
    ContactRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface CRMContactEndpointRequest
 */
export interface CRMContactEndpointRequest {
    /**
     * 
     * @type {ContactRequest}
     * @memberof CRMContactEndpointRequest
     */
    model: ContactRequest;
}

export function CRMContactEndpointRequestFromJSON(json: JSONValue): CRMContactEndpointRequest | null {
    return CRMContactEndpointRequestFromJSONTyped(json);
}

export function CRMContactEndpointRequestFromJSONTyped(json: JSONValue): CRMContactEndpointRequest | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'model': ContactRequestFromJSON(json['model']),
    };
}

export function CRMContactEndpointRequestToJSON(value?: CRMContactEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'model': ContactRequestToJSON(value.model),
    };
}

