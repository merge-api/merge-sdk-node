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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum ActivityTypeEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Call = 'CALL',
    Meeting = 'MEETING',
    Email = 'EMAIL'
}


export function ActivityTypeEnumFromJSON(json: any): ActivityTypeEnum {
    return ActivityTypeEnumFromJSONTyped(json, false);
}

export function ActivityTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityTypeEnum {
    if ((<any>Object).values(ActivityTypeEnum).includes(json)) {
        return json as ActivityTypeEnum;
    }
    return ActivityTypeEnum.MERGE_NONSTANDARD_VALUE;
}

export function ActivityTypeEnumToJSON(value?: ActivityTypeEnum | null): JSONValue {
    return value ? value as string : null;
}

