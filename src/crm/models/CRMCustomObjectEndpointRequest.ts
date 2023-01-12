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
    CustomObjectRequest,
    CustomObjectRequestFromJSON,
    CustomObjectRequestFromJSONTyped,
    CustomObjectRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface CRMCustomObjectEndpointRequest
 */
export interface CRMCustomObjectEndpointRequest {
    /**
     * 
     * @type {CustomObjectRequest}
     * @memberof CRMCustomObjectEndpointRequest
     */
    model: CustomObjectRequest;
}

export function CRMCustomObjectEndpointRequestFromJSON(json: JSONValue): CRMCustomObjectEndpointRequest | undefined {
    return CRMCustomObjectEndpointRequestFromJSONTyped(json);
}

export function CRMCustomObjectEndpointRequestFromJSONTyped(json: JSONValue): CRMCustomObjectEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': CustomObjectRequestFromJSON(json['model']) as CustomObjectRequest,
    };
}

export function CRMCustomObjectEndpointRequestToJSON(value?: CRMCustomObjectEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': CustomObjectRequestToJSON(value.model),
    };
}
