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
 * # The Comment Object
 * ### Description
 * The `Comment` object is used to represent a comment on a ticket.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface CommentRequest
 */
export interface CommentRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CommentRequest
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentRequest
     */
    user?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentRequest
     */
    contact?: string | null;
    /**
     * The comment's text body.
     * @type {string}
     * @memberof CommentRequest
     */
    body?: string | null;
    /**
     * The comment's text body formatted as html.
     * @type {string}
     * @memberof CommentRequest
     */
    html_body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentRequest
     */
    ticket?: string | null;
    /**
     * Whether or not the comment is internal.
     * @type {boolean}
     * @memberof CommentRequest
     */
    is_private?: boolean | null;
    /**
     * When the third party's comment was created.
     * @type {Date}
     * @memberof CommentRequest
     */
    remote_created_at?: Date | null;
}

export function CommentRequestFromJSON(json: JSONValue): CommentRequest | undefined {
    return CommentRequestFromJSONTyped(json);
}

export function CommentRequestFromJSONTyped(json: JSONValue): CommentRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'html_body': !exists(json, 'html_body') ? undefined : json['html_body'],
        'ticket': !exists(json, 'ticket') ? undefined : json['ticket'],
        'is_private': !exists(json, 'is_private') ? undefined : json['is_private'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
    };
}

export function CommentRequestToJSON(value?: CommentRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'user': value.user,
        'contact': value.contact,
        'body': value.body,
        'html_body': value.html_body,
        'ticket': value.ticket,
        'is_private': value.is_private,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
    };
}

