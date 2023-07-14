/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
 * # The Company Object
 * ### Description
 * The `Company` object is used to represent a company within the HRIS / Payroll system.
 * 
 * ### Usage Example
 * Fetch from the `LIST Companies` endpoint and filter by `ID` to show all companies.
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Company
     */
    remote_id?: string | null;
    /**
     * The company's legal name.
     * @type {string}
     * @memberof Company
     */
    legal_name?: string | null;
    /**
     * The company's display name.
     * @type {string}
     * @memberof Company
     */
    display_name?: string | null;
    /**
     * The company's Employer Identification Numbers.
     * @type {Array<string>}
     * @memberof Company
     */
    eins?: Array<string> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Company
     */
    readonly remote_was_deleted?: boolean;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Company
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Company
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Company
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function CompanyFromJSON(json: JSONValue): Company | undefined {
    return CompanyFromJSONTyped(json);
}

export function CompanyFromJSONTyped(json: JSONValue): Company | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'legal_name': !exists(json, 'legal_name') ? undefined : json['legal_name'],
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'eins': !exists(json, 'eins') ? undefined : json['eins'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function CompanyToJSON(value?: Company): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'legal_name': value.legal_name,
        'display_name': value.display_name,
        'eins': value.eins,
    };
}

