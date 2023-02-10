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
    RemoteFieldRemoteFieldClass,
    RemoteFieldRemoteFieldClassFromJSON,
    RemoteFieldRemoteFieldClassFromJSONTyped,
    RemoteFieldRemoteFieldClassToJSON,
} from './';


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
     * @type {RemoteFieldRemoteFieldClass}
     * @memberof RemoteField
     */
    remote_field_class?: RemoteFieldRemoteFieldClass | JSONValue;
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
        'remote_field_class': !exists(json, 'remote_field_class') ? undefined : RemoteFieldRemoteFieldClassFromJSON(json['remote_field_class']) as RemoteFieldRemoteFieldClass,
    };
}

export function RemoteFieldToJSON(value?: RemoteField): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'value': value.value,
        'remote_field_class': RemoteFieldRemoteFieldClassToJSON(value.remote_field_class as RemoteFieldRemoteFieldClass),
    };
}
