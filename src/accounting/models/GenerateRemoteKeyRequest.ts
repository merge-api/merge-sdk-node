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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';

/**
 * # The GenerateRemoteKey Object
 * ### Description
 * The `GenerateRemoteKey` object is used to represent a request for a new remote key.
 * 
 * ### Usage Example
 * Post a `GenerateRemoteKey` to create a new remote key.
 * @export
 * @interface GenerateRemoteKeyRequest
 */
export interface GenerateRemoteKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof GenerateRemoteKeyRequest
     */
    name: string;
}

export function GenerateRemoteKeyRequestFromJSON(json: JSONValue): GenerateRemoteKeyRequest | null {
    return GenerateRemoteKeyRequestFromJSONTyped(json);
}

export function GenerateRemoteKeyRequestFromJSONTyped(json: JSONValue): GenerateRemoteKeyRequest | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'name': json['name'],
    };
}

export function GenerateRemoteKeyRequestToJSON(value?: GenerateRemoteKeyRequest): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'name': value.name,
    };
}

