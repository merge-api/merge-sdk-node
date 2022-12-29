/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
export enum PolicyTypeEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Vacation = 'VACATION',
    Sick = 'SICK',
    Personal = 'PERSONAL',
    JuryDuty = 'JURY_DUTY',
    Volunteer = 'VOLUNTEER',
    Bereavement = 'BEREAVEMENT'
}


export function PolicyTypeEnumFromJSON(json: any): PolicyTypeEnum {
    return PolicyTypeEnumFromJSONTyped(json, false);
}

export function PolicyTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyTypeEnum {
    if ((<any>Object).values(PolicyTypeEnum).includes(json)) {
        return json as PolicyTypeEnum;
    }
    return PolicyTypeEnum.MERGE_NONSTANDARD_VALUE;
}

export function PolicyTypeEnumToJSON(value?: PolicyTypeEnum | null): JSONValue {
    return value ? value as string : null;
}

