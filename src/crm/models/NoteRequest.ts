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

/**
 * # The Note Object
 * ### Description
 * The `Note` object is used to represent a note on another object.
 * ### Usage Example
 * TODO
 * @export
 * @interface NoteRequest
 */
export interface NoteRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof NoteRequest
     */
    remote_id?: string | null;
    /**
     * The note's owner.
     * @type {string}
     * @memberof NoteRequest
     */
    owner?: string | JSONValue | null;
    /**
     * The note's content.
     * @type {string}
     * @memberof NoteRequest
     */
    content?: string | null;
    /**
     * The note's contact.
     * @type {string}
     * @memberof NoteRequest
     */
    contact?: string | JSONValue | null;
    /**
     * The note's account.
     * @type {string}
     * @memberof NoteRequest
     */
    account?: string | JSONValue | null;
    /**
     * The note's opportunity.
     * @type {string}
     * @memberof NoteRequest
     */
    opportunity?: string | JSONValue | null;
    /**
     * When the third party's lead was updated.
     * @type {Date}
     * @memberof NoteRequest
     */
    remote_updated_at?: Date | null;
    /**
     * When the third party's lead was created.
     * @type {Date}
     * @memberof NoteRequest
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NoteRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NoteRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function NoteRequestFromJSON(json: JSONValue): NoteRequest | undefined {
    return NoteRequestFromJSONTyped(json);
}

export function NoteRequestFromJSONTyped(json: JSONValue): NoteRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'opportunity': !exists(json, 'opportunity') ? undefined : json['opportunity'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function NoteRequestToJSON(value?: NoteRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'owner': value.owner,
        'content': value.content,
        'contact': value.contact,
        'account': value.account,
        'opportunity': value.opportunity,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

