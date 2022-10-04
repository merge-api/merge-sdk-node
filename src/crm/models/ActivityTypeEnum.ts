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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ActivityTypeEnum {
    Call = 'CALL',
    Meeting = 'MEETING',
    Email = 'EMAIL'
}

export function ActivityTypeEnumFromJSON(json: any): ActivityTypeEnum {
    return ActivityTypeEnumFromJSONTyped(json, false);
}

export function ActivityTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityTypeEnum {
    return json as ActivityTypeEnum;
}

export function ActivityTypeEnumToJSON(value?: ActivityTypeEnum | null): any {
    return value as any;
}

