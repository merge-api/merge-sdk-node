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
 * # The JournalLine Object
 * ### Description
 * The `JournalLine` object is used to represent a journal entry's line items.
 * 
 * ### Usage Example
 * Fetch from the `GET JournalEntry` endpoint and view the journal entry's line items.
 * @export
 * @interface JournalLineRequest
 */
export interface JournalLineRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof JournalLineRequest
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JournalLineRequest
     */
    account?: string | null;
    /**
     * The line's net amount.
     * @type {number}
     * @memberof JournalLineRequest
     */
    net_amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof JournalLineRequest
     */
    tracking_category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JournalLineRequest
     */
    contact?: string | null;
    /**
     * The line's description.
     * @type {string}
     * @memberof JournalLineRequest
     */
    description?: string | null;
}

export function JournalLineRequestFromJSON(json: JSONValue): JournalLineRequest | null {
    return JournalLineRequestFromJSONTyped(json);
}

export function JournalLineRequestFromJSONTyped(json: JSONValue): JournalLineRequest | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'net_amount': !exists(json, 'net_amount') ? undefined : json['net_amount'],
        'tracking_category': !exists(json, 'tracking_category') ? undefined : json['tracking_category'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function JournalLineRequestToJSON(value?: JournalLineRequest): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'remote_id': value.remote_id,
        'account': value.account,
        'net_amount': value.net_amount,
        'tracking_category': value.tracking_category,
        'contact': value.contact,
        'description': value.description,
    };
}

