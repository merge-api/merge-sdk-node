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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    ApplicationRequest,
    ApplicationRequestFromJSON,
    ApplicationRequestFromJSONTyped,
    ApplicationRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface ApplicationEndpointRequest
 */
export interface ApplicationEndpointRequest {
    /**
     * 
     * @type {ApplicationRequest}
     * @memberof ApplicationEndpointRequest
     */
    model: ApplicationRequest;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEndpointRequest
     */
    remote_user_id: string;
}

export function ApplicationEndpointRequestFromJSON(json: JSONValue): ApplicationEndpointRequest | null {
    return ApplicationEndpointRequestFromJSONTyped(json);
}

export function ApplicationEndpointRequestFromJSONTyped(json: JSONValue): ApplicationEndpointRequest | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'model': ApplicationRequestFromJSON(json['model']),
        'remote_user_id': json['remote_user_id'],
    };
}

export function ApplicationEndpointRequestToJSON(value?: ApplicationEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'model': ApplicationRequestToJSON(value.model),
        'remote_user_id': value.remote_user_id,
    };
}

