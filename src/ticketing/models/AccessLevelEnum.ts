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
 * * `PRIVATE` - PRIVATE
 * * `COMPANY` - COMPANY
 * * `PUBLIC` - PUBLIC
 * @export
 * @enum {string}
 */
export enum AccessLevelEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Private = 'PRIVATE',
    Company = 'COMPANY',
    Public = 'PUBLIC'
}

export interface AccessLevelEnum {
    value: AccessLevelEnumValues,
    rawValue: string
}


export function AccessLevelEnumFromJSON(json: any): AccessLevelEnum {
    return AccessLevelEnumFromJSONTyped(json, false);
}

export function AccessLevelEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessLevelEnum {
    if ((<any>Object).values(AccessLevelEnumValues).includes(json)) {
        return {
            value: json as AccessLevelEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: AccessLevelEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function AccessLevelEnumToJSON(value?: AccessLevelEnum | null): JSONValue {
    return value && value.value != AccessLevelEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

