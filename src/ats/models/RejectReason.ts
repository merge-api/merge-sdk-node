/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
 * # The RejectReason Object
 * ### Description
 * The `RejectReason` object is used to represent a reason for rejecting an application.
 * ### Usage Example
 * Fetch from the `LIST RejectReasons` endpoint and filter by `ID` to show all reasons.
 * @export
 * @interface RejectReason
 */
export interface RejectReason {
    /**
     * 
     * @type {string}
     * @memberof RejectReason
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof RejectReason
     */
    remote_id?: string | null;
    /**
     * The rejection reason’s name.
     * @type {string}
     * @memberof RejectReason
     */
    name?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof RejectReason
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof RejectReason
     */
    readonly remote_was_deleted?: boolean;
}

export function RejectReasonFromJSON(json: JSONValue): RejectReason | undefined {
    return RejectReasonFromJSONTyped(json);
}

export function RejectReasonFromJSONTyped(json: JSONValue): RejectReason | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function RejectReasonToJSON(value?: RejectReason): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
    };
}

