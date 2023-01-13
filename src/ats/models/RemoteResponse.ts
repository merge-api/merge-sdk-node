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
    ResponseTypeEnum,
    ResponseTypeEnumFromJSON,
    ResponseTypeEnumFromJSONTyped,
    ResponseTypeEnumToJSON,
} from './';


/**
 * # The RemoteResponse Object
 * ### Description
 * The `RemoteResponse` object is used to represent information returned from a third-party endpoint.
 * 
 * ### Usage Example
 * View the `RemoteResponse` returned from your `DataPassthrough`.
 * @export
 * @interface RemoteResponse
 */
export interface RemoteResponse {
    /**
     * 
     * @type {string}
     * @memberof RemoteResponse
     */
    method: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteResponse
     */
    path: string;
    /**
     * 
     * @type {number}
     * @memberof RemoteResponse
     */
    status: number;
    /**
     * 
     * @type {any}
     * @memberof RemoteResponse
     */
    response: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteResponse
     */
    response_headers?: { [key: string]: any; };
    /**
     * 
     * @type {ResponseTypeEnum}
     * @memberof RemoteResponse
     */
    response_type?: ResponseTypeEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteResponse
     */
    headers?: { [key: string]: any; };
}

export function RemoteResponseFromJSON(json: JSONValue): RemoteResponse | undefined {
    return RemoteResponseFromJSONTyped(json);
}

export function RemoteResponseFromJSONTyped(json: JSONValue): RemoteResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'method': json['method'],
        'path': json['path'],
        'status': json['status'],
        'response': json['response'],
        'response_headers': !exists(json, 'response_headers') ? undefined : json['response_headers'],
        'response_type': !exists(json, 'response_type') ? undefined : ResponseTypeEnumFromJSON(json['response_type']) as ResponseTypeEnum,
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
    };
}

export function RemoteResponseToJSON(value?: RemoteResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'method': value.method,
        'path': value.path,
        'status': value.status,
        'response': value.response,
        'response_headers': value.response_headers,
        'response_type': ResponseTypeEnumToJSON(value.response_type),
        'headers': value.headers,
    };
}

