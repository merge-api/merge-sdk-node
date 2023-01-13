/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
export enum RaceEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    AmericanIndianOrAlaskanNative = 'AMERICAN_INDIAN_OR_ALASKAN_NATIVE',
    Asian = 'ASIAN',
    BlackOrAfricanAmerican = 'BLACK_OR_AFRICAN_AMERICAN',
    HispanicOrLatino = 'HISPANIC_OR_LATINO',
    White = 'WHITE',
    NativeHawaiianOrOtherPacificIslander = 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER',
    TwoOrMoreRaces = 'TWO_OR_MORE_RACES',
    DeclineToSelfIdentify = 'DECLINE_TO_SELF_IDENTIFY'
}

export interface RaceEnum {
    value: RaceEnumValues,
    rawValue: string
}


export function RaceEnumFromJSON(json: any): RaceEnum {
    return RaceEnumFromJSONTyped(json, false);
}

export function RaceEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RaceEnum {
    if ((<any>Object).values(RaceEnumValues).includes(json)) {
        return {
            value: json as RaceEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: RaceEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function RaceEnumToJSON(value?: RaceEnum | null): JSONValue {
    return value && value.value != RaceEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

