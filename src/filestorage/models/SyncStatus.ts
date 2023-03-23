/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    SelectiveSyncConfigurationsUsageEnum,
    SelectiveSyncConfigurationsUsageEnumFromJSON,
    SelectiveSyncConfigurationsUsageEnumFromJSONTyped,
    SelectiveSyncConfigurationsUsageEnumToJSON,
    SyncStatusStatusEnum,
    SyncStatusStatusEnumFromJSON,
    SyncStatusStatusEnumFromJSONTyped,
    SyncStatusStatusEnumToJSON,
} from './';


/**
 * # The SyncStatus Object
 * ### Description
 * The `SyncStatus` object is used to represent the syncing state of an account
 * 
 * ### Usage Example
 * View the `SyncStatus` for an account to see how recently its models were synced.
 * @export
 * @interface SyncStatus
 */
export interface SyncStatus {
    /**
     * 
     * @type {string}
     * @memberof SyncStatus
     */
    model_name: string;
    /**
     * 
     * @type {string}
     * @memberof SyncStatus
     */
    model_id: string;
    /**
     * 
     * @type {Date}
     * @memberof SyncStatus
     */
    last_sync_start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SyncStatus
     */
    next_sync_start?: Date;
    /**
     * 
     * @type {SyncStatusStatusEnum}
     * @memberof SyncStatus
     */
    status: SyncStatusStatusEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof SyncStatus
     */
    is_initial_sync: boolean;
    /**
     * 
     * @type {SelectiveSyncConfigurationsUsageEnum}
     * @memberof SyncStatus
     */
    selective_sync_configurations_usage?: SelectiveSyncConfigurationsUsageEnum | null;
}

export function SyncStatusFromJSON(json: JSONValue): SyncStatus | undefined {
    return SyncStatusFromJSONTyped(json);
}

export function SyncStatusFromJSONTyped(json: JSONValue): SyncStatus | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model_name': json['model_name'],
        'model_id': json['model_id'],
        'last_sync_start': !exists(json, 'last_sync_start') ? undefined : (new Date(json['last_sync_start'])),
        'next_sync_start': !exists(json, 'next_sync_start') ? undefined : (new Date(json['next_sync_start'])),
        'status': SyncStatusStatusEnumFromJSON(json['status']) as SyncStatusStatusEnum,
        'is_initial_sync': json['is_initial_sync'],
        'selective_sync_configurations_usage': !exists(json, 'selective_sync_configurations_usage') ? undefined : SelectiveSyncConfigurationsUsageEnumFromJSON(json['selective_sync_configurations_usage']) as SelectiveSyncConfigurationsUsageEnum,
    };
}

export function SyncStatusToJSON(value?: SyncStatus): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model_name': value.model_name,
        'model_id': value.model_id,
        'last_sync_start': value.last_sync_start === undefined ? undefined : (value.last_sync_start.toISOString()),
        'next_sync_start': value.next_sync_start === undefined ? undefined : (value.next_sync_start.toISOString()),
        'status': SyncStatusStatusEnumToJSON(value.status),
        'is_initial_sync': value.is_initial_sync,
        'selective_sync_configurations_usage': SelectiveSyncConfigurationsUsageEnumToJSON(value.selective_sync_configurations_usage),
    };
}
