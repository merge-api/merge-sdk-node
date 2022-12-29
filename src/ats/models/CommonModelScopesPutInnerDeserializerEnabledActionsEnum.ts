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
export enum CommonModelScopesPutInnerDeserializerEnabledActionsEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Read = 'READ',
    Write = 'WRITE'
}


export function CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSON(json: any): CommonModelScopesPutInnerDeserializerEnabledActionsEnum {
    return CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSONTyped(json, false);
}

export function CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonModelScopesPutInnerDeserializerEnabledActionsEnum {
    if ((<any>Object).values(CommonModelScopesPutInnerDeserializerEnabledActionsEnum).includes(json)) {
        return json as CommonModelScopesPutInnerDeserializerEnabledActionsEnum;
    }
    return CommonModelScopesPutInnerDeserializerEnabledActionsEnum.MERGE_NONSTANDARD_VALUE;
}

export function CommonModelScopesPutInnerDeserializerEnabledActionsEnumToJSON(value?: CommonModelScopesPutInnerDeserializerEnabledActionsEnum | null): JSONValue {
    return value ? value as string : null;
}

