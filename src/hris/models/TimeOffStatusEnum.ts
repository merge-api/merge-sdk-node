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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TimeOffStatusEnum {
    Requested = 'REQUESTED',
    Approved = 'APPROVED',
    Declined = 'DECLINED',
    Cancelled = 'CANCELLED',
    Deleted = 'DELETED'
}

export function TimeOffStatusEnumFromJSON(json: any): TimeOffStatusEnum {
    return TimeOffStatusEnumFromJSONTyped(json, false);
}

export function TimeOffStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeOffStatusEnum {
    return json as TimeOffStatusEnum;
}

export function TimeOffStatusEnumToJSON(value?: TimeOffStatusEnum | null): any {
    return value as any;
}
