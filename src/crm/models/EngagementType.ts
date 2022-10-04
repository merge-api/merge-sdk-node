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
import {
    ActivityTypeEnum,
    ActivityTypeEnumFromJSON,
    ActivityTypeEnumFromJSONTyped,
    ActivityTypeEnumToJSON,
} from './';


/**
 * # The Engagement Type Object
 * ### Description
 * The `Engagement Type` object is used to represent the type of an engagement in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface EngagementType
 */
export interface EngagementType {
    /**
     * 
     * @type {string}
     * @memberof EngagementType
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof EngagementType
     */
    remote_id?: string | null;
    /**
     * The engagement type's activity type.
     * @type {ActivityTypeEnum}
     * @memberof EngagementType
     */
    activity_type?: ActivityTypeEnum | null;
    /**
     * The engagement type's name.
     * @type {string}
     * @memberof EngagementType
     */
    name?: string | null;
}

export function EngagementTypeFromJSON(json: JSONValue): EngagementType | undefined {
    return EngagementTypeFromJSONTyped(json);
}

export function EngagementTypeFromJSONTyped(json: JSONValue): EngagementType | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'activity_type': !exists(json, 'activity_type') ? undefined : ActivityTypeEnumFromJSON(json['activity_type']) as ActivityTypeEnum,
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function EngagementTypeToJSON(value?: EngagementType): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'activity_type': ActivityTypeEnumToJSON(value.activity_type),
        'name': value.name,
    };
}
