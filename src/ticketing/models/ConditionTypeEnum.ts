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
export enum ConditionTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Boolean = 'BOOLEAN',
    Date = 'DATE',
    DateTime = 'DATE_TIME',
    Integer = 'INTEGER',
    Float = 'FLOAT',
    String = 'STRING',
    ListOfStrings = 'LIST_OF_STRINGS'
}

export interface ConditionTypeEnum {
    value: ConditionTypeEnumValues,
    rawValue: string
}


export function ConditionTypeEnumFromJSON(json: any): ConditionTypeEnum {
    return ConditionTypeEnumFromJSONTyped(json, false);
}

export function ConditionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionTypeEnum {
    if ((<any>Object).values(ConditionTypeEnumValues).includes(json)) {
        return {
            value: json as ConditionTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: ConditionTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function ConditionTypeEnumToJSON(value?: ConditionTypeEnum | null): JSONValue {
    return value && value.value != ConditionTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

