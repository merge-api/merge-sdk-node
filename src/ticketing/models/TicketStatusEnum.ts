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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TicketStatusEnum {
    Open = 'OPEN',
    Closed = 'CLOSED',
    InProgress = 'IN_PROGRESS',
    OnHold = 'ON_HOLD'
}

export function TicketStatusEnumFromJSON(json: any): TicketStatusEnum {
    return TicketStatusEnumFromJSONTyped(json, false);
}

export function TicketStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketStatusEnum {
    return json as TicketStatusEnum;
}

export function TicketStatusEnumToJSON(value?: TicketStatusEnum | null): any {
    return value as any;
}

