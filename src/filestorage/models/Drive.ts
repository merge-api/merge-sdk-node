/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
 * # The Drive Object
 * ### Description
 * The `Drive` object is used to represent a drive that contains the folders and files in the user's workspace.
 * ### Usage Example
 * Fetch from the `GET /api/filestorage/v1/drives` endpoint and view their drives.
 * @export
 * @interface Drive
 */
export interface Drive {
    /**
     * 
     * @type {string}
     * @memberof Drive
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Drive
     */
    remote_id?: string | null;
    /**
     * The drive's name.
     * @type {string}
     * @memberof Drive
     */
    name?: string | null;
    /**
     * When the third party's drive was created.
     * @type {Date}
     * @memberof Drive
     */
    remote_created_at?: Date | null;
    /**
     * The drive's url.
     * @type {string}
     * @memberof Drive
     */
    drive_url?: string | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Drive
     */
    remote_was_deleted?: boolean;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Drive
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Drive
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Drive
     */
    remote_data?: Array<{ [key: string]: any; }> | null;
}

export function DriveFromJSON(json: JSONValue): Drive | undefined {
    return DriveFromJSONTyped(json);
}

export function DriveFromJSONTyped(json: JSONValue): Drive | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'drive_url': !exists(json, 'drive_url') ? undefined : json['drive_url'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : json['remote_data'],
    };
}

export function DriveToJSON(value?: Drive): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'drive_url': value.drive_url,
        'remote_was_deleted': value.remote_was_deleted,
        'remote_data': value.remote_data,
    };
}

