/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Message Object
 * ### Description
 * The `Message` object is used to represent a text message, in-app message or a message sent via another channel in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/messages` endpoint and view their body properties.
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * The message's from-name.
     * @type {string}
     * @memberof Message
     */
    from_name?: string | null;
    /**
     * When the message was sent.
     * @type {Date}
     * @memberof Message
     */
    send_date?: Date | null;
    /**
     * The message's body.
     * @type {string}
     * @memberof Message
     */
    body?: string | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Message
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Message
     */
    remote_id?: string | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Message
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Message
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Message
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function MessageFromJSON(json: JSONValue): Message | undefined {
    return MessageFromJSONTyped(json);
}

export function MessageFromJSONTyped(json: JSONValue): Message | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'from_name': !exists(json, 'from_name') ? undefined : json['from_name'],
        'send_date': !exists(json, 'send_date') ? undefined : (json['send_date'] === null ? null : new Date(json['send_date'])),
        'body': !exists(json, 'body') ? undefined : json['body'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function MessageToJSON(value?: Message): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'from_name': value.from_name,
        'send_date': value.send_date === undefined ? undefined : (value.send_date === null ? null : value.send_date.toISOString()),
        'body': value.body,
        'remote_id': value.remote_id,
    };
}

