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
 * # The Team Object
 * ### Description
 * The `Team` object is used to represent a Team within a company. `Employee` objects are often grouped this way. Note that in the Merge HRIS API, company subdivisions are all represented with `Teams`, rather than `Teams` and `Departments`.
 * 
 * ### Usage Example
 * If you're building a way to filter by `Team`, you'd hit the `GET Teams` endpoint to fetch the `Teams`, and then use the `ID` of the team your user selects to filter the `GET Employees` endpoint.
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Team
     */
    remote_id?: string | null;
    /**
     * The team's name.
     * @type {string}
     * @memberof Team
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    parent_team?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Team
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Team
     */
    readonly remote_was_deleted?: boolean;
}

export function TeamFromJSON(json: JSONValue): Team | null {
    return TeamFromJSONTyped(json);
}

export function TeamFromJSONTyped(json: JSONValue): Team | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parent_team': !exists(json, 'parent_team') ? undefined : json['parent_team'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TeamToJSON(value?: Team): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'parent_team': value.parent_team,
    };
}

