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
    RemoteFieldClassForCustomObjectClass,
    RemoteFieldClassForCustomObjectClassFromJSON,
    RemoteFieldClassForCustomObjectClassFromJSONTyped,
    RemoteFieldClassForCustomObjectClassToJSON,
} from './';


/**
 * # The Custom Object Class Object
 * ### Description
 * The `Custom Object Class` object is used to represent a Custom Object Schema in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface CustomObjectClass
 */
export interface CustomObjectClass {
    /**
     * 
     * @type {string}
     * @memberof CustomObjectClass
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomObjectClass
     */
    description?: string | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CustomObjectClass
     */
    readonly labels?: { [key: string]: string; };
    /**
     * 
     * @type {Array<RemoteFieldClassForCustomObjectClass>}
     * @memberof CustomObjectClass
     */
    readonly fields?: Array<RemoteFieldClassForCustomObjectClass> | JSONValue;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof CustomObjectClass
     */
    readonly association_types?: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {string}
     * @memberof CustomObjectClass
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CustomObjectClass
     */
    remote_id?: string | null;
}

export function CustomObjectClassFromJSON(json: JSONValue): CustomObjectClass | undefined {
    return CustomObjectClassFromJSONTyped(json);
}

export function CustomObjectClassFromJSONTyped(json: JSONValue): CustomObjectClass | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<JSONValue>).map(RemoteFieldClassForCustomObjectClassFromJSON)) as Array<RemoteFieldClassForCustomObjectClass>,
        'association_types': !exists(json, 'association_types') ? undefined : json['association_types'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
    };
}

export function CustomObjectClassToJSON(value?: CustomObjectClass): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'description': value.description,
        'remote_id': value.remote_id,
    };
}

