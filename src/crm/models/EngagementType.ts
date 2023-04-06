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
    RemoteField,
    RemoteFieldFromJSON,
    RemoteFieldFromJSONTyped,
    RemoteFieldToJSON,
} from './';


/**
 * # The Engagement Type Object
 * ### Description
 * The `Engagement Type` object is used to represent an interaction activity. A given `Engagement` typically has an `Engagement Type` object represented in the engagement_type field.
 * ### Usage Example
 * TODO
 * @export
 * @interface EngagementType
 */
export interface EngagementType {
    /**
     * The engagement type's activity type.
     * 
     * * `CALL` - CALL
     * * `MEETING` - MEETING
     * * `EMAIL` - EMAIL
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
     * 
     * @type {Array<RemoteField>}
     * @memberof EngagementType
     */
    readonly remote_fields?: Array<RemoteField>;
}

export function EngagementTypeFromJSON(json: JSONValue): EngagementType | undefined {
    return EngagementTypeFromJSONTyped(json);
}

export function EngagementTypeFromJSONTyped(json: JSONValue): EngagementType | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'activity_type': !exists(json, 'activity_type') ? undefined : ActivityTypeEnumFromJSON(json['activity_type']) as ActivityTypeEnum,
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldFromJSON)) as Array<RemoteField>,
    };
}

export function EngagementTypeToJSON(value?: EngagementType): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'activity_type': ActivityTypeEnumToJSON(value.activity_type),
        'name': value.name,
        'remote_id': value.remote_id,
    };
}

