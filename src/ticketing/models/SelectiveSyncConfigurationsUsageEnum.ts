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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum SelectiveSyncConfigurationsUsageEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    NextSync = 'IN_NEXT_SYNC',
    LastSync = 'IN_LAST_SYNC'
}

export interface SelectiveSyncConfigurationsUsageEnum {
    value: SelectiveSyncConfigurationsUsageEnumValues,
    rawValue: string
}


export function SelectiveSyncConfigurationsUsageEnumFromJSON(json: any): SelectiveSyncConfigurationsUsageEnum {
    return SelectiveSyncConfigurationsUsageEnumFromJSONTyped(json, false);
}

export function SelectiveSyncConfigurationsUsageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectiveSyncConfigurationsUsageEnum {
    if ((<any>Object).values(SelectiveSyncConfigurationsUsageEnumValues).includes(json)) {
        return {
            value: json as SelectiveSyncConfigurationsUsageEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: SelectiveSyncConfigurationsUsageEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function SelectiveSyncConfigurationsUsageEnumToJSON(value?: SelectiveSyncConfigurationsUsageEnum | null): JSONValue {
    return value && value.value != SelectiveSyncConfigurationsUsageEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

