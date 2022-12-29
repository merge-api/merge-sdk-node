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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum SelectiveSyncConfigurationsUsageEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    NextSync = 'IN_NEXT_SYNC',
    LastSync = 'IN_LAST_SYNC'
}


export function SelectiveSyncConfigurationsUsageEnumFromJSON(json: any): SelectiveSyncConfigurationsUsageEnum {
    return SelectiveSyncConfigurationsUsageEnumFromJSONTyped(json, false);
}

export function SelectiveSyncConfigurationsUsageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectiveSyncConfigurationsUsageEnum {
    if ((<any>Object).values(SelectiveSyncConfigurationsUsageEnum).includes(json)) {
        return json as SelectiveSyncConfigurationsUsageEnum;
    }
    return SelectiveSyncConfigurationsUsageEnum.MERGE_NONSTANDARD_VALUE;
}

export function SelectiveSyncConfigurationsUsageEnumToJSON(value?: SelectiveSyncConfigurationsUsageEnum | null): JSONValue {
    return value ? value as string : null;
}

