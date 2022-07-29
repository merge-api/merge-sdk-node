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
import {
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The User Object
 * ### Description
 * The `User` object is used to represent an employee within a company.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof User
     */
    remote_id?: string | null;
    /**
     * The user's name.
     * @type {string}
     * @memberof User
     */
    name?: string | null;
    /**
     * The user's email address.
     * @type {string}
     * @memberof User
     */
    email_address?: string | null;
    /**
     * Whether or not the user is active.
     * @type {boolean}
     * @memberof User
     */
    is_active?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    teams?: Array<string>;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof User
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof User
     */
    readonly remote_was_deleted?: boolean;
}

export function UserFromJSON(json: JSONValue): User | undefined {
    return UserFromJSONTyped(json);
}

export function UserFromJSONTyped(json: JSONValue): User | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email_address': !exists(json, 'email_address') ? undefined : json['email_address'],
        'is_active': !exists(json, 'is_active') ? undefined : json['is_active'],
        'teams': !exists(json, 'teams') ? undefined : json['teams'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function UserToJSON(value?: User): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'email_address': value.email_address,
        'is_active': value.is_active,
        'teams': value.teams,
    };
}

