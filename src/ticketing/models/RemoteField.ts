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

/**
 * 
 * @export
 * @interface RemoteField
 */
export interface RemoteField {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteField
     */
    value?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteField
     */
    remote_field_class?: string | JSONValue | null;
}

export function RemoteFieldFromJSON(json: JSONValue): RemoteField | undefined {
    return RemoteFieldFromJSONTyped(json);
}

export function RemoteFieldFromJSONTyped(json: JSONValue): RemoteField | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'remote_field_class': !exists(json, 'remote_field_class') ? undefined : json['remote_field_class'],
    };
}

export function RemoteFieldToJSON(value?: RemoteField): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'value': value.value,
        'remote_field_class': value.remote_field_class,
    };
}

