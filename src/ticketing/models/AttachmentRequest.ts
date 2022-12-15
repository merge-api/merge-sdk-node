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
 * # The Attachment Object
 * ### Description
 * The `Attachment` object is used to represent an attachment for a ticket.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface AttachmentRequest
 */
export interface AttachmentRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof AttachmentRequest
     */
    remote_id?: string | null;
    /**
     * The attachment's name.
     * @type {string}
     * @memberof AttachmentRequest
     */
    file_name?: string | null;
    /**
     * The ticket associated with the attachment.
     * @type {string}
     * @memberof AttachmentRequest
     */
    ticket?: string | JSONValue | null;
    /**
     * The attachment's url.
     * @type {string}
     * @memberof AttachmentRequest
     */
    file_url?: string | null;
    /**
     * The attachment's file format.
     * @type {string}
     * @memberof AttachmentRequest
     */
    content_type?: string | null;
    /**
     * The user who uploaded the attachment.
     * @type {string}
     * @memberof AttachmentRequest
     */
    uploaded_by?: string | null;
    /**
     * When the third party's attachment was created.
     * @type {Date}
     * @memberof AttachmentRequest
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function AttachmentRequestFromJSON(json: JSONValue): AttachmentRequest | undefined {
    return AttachmentRequestFromJSONTyped(json);
}

export function AttachmentRequestFromJSONTyped(json: JSONValue): AttachmentRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'file_name': !exists(json, 'file_name') ? undefined : json['file_name'],
        'ticket': !exists(json, 'ticket') ? undefined : json['ticket'],
        'file_url': !exists(json, 'file_url') ? undefined : json['file_url'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
        'uploaded_by': !exists(json, 'uploaded_by') ? undefined : json['uploaded_by'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function AttachmentRequestToJSON(value?: AttachmentRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'file_name': value.file_name,
        'ticket': value.ticket,
        'file_url': value.file_url,
        'content_type': value.content_type,
        'uploaded_by': value.uploaded_by,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

