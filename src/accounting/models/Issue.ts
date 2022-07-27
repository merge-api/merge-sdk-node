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
import {
    IssueStatusEnum,
    IssueStatusEnumFromJSON,
    IssueStatusEnumFromJSONTyped,
    IssueStatusEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    readonly id?: string;
    /**
     * 
     * @type {IssueStatusEnum}
     * @memberof Issue
     */
    status?: IssueStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    error_description: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Issue
     */
    readonly end_user?: { [key: string]: any; };
    /**
     * 
     * @type {Date}
     * @memberof Issue
     */
    first_incident_time?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Issue
     */
    last_incident_time?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Issue
     */
    readonly is_muted?: boolean;
}

export function IssueFromJSON(json: JSONValue): Issue | null {
    return IssueFromJSONTyped(json);
}

export function IssueFromJSONTyped(json: JSONValue): Issue | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : IssueStatusEnumFromJSON(json['status']),
        'error_description': json['error_description'],
        'end_user': !exists(json, 'end_user') ? undefined : json['end_user'],
        'first_incident_time': !exists(json, 'first_incident_time') ? undefined : (json['first_incident_time'] === null ? null : new Date(json['first_incident_time'])),
        'last_incident_time': !exists(json, 'last_incident_time') ? undefined : (json['last_incident_time'] === null ? null : new Date(json['last_incident_time'])),
        'is_muted': !exists(json, 'is_muted') ? undefined : json['is_muted'],
    };
}

export function IssueToJSON(value?: Issue): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'status': IssueStatusEnumToJSON(value.status),
        'error_description': value.error_description,
        'first_incident_time': value.first_incident_time === undefined ? undefined : (value.first_incident_time === null ? null : value.first_incident_time.toISOString()),
        'last_incident_time': value.last_incident_time === undefined ? undefined : (value.last_incident_time === null ? null : value.last_incident_time.toISOString()),
    };
}

