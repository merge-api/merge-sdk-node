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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    TicketRequest,
    TicketRequestFromJSON,
    TicketRequestFromJSONTyped,
    TicketRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface TicketEndpointRequest
 */
export interface TicketEndpointRequest {
    /**
     * 
     * @type {TicketRequest}
     * @memberof TicketEndpointRequest
     */
    model: TicketRequest;
}

export function TicketEndpointRequestFromJSON(json: JSONValue): TicketEndpointRequest | undefined {
    return TicketEndpointRequestFromJSONTyped(json);
}

export function TicketEndpointRequestFromJSONTyped(json: JSONValue): TicketEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': TicketRequestFromJSON(json['model']) as TicketRequest,
    };
}

export function TicketEndpointRequestToJSON(value?: TicketEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': TicketRequestToJSON(value.model),
    };
}

