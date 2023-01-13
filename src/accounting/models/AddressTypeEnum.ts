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
export enum AddressTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Billing = 'BILLING',
    Shipping = 'SHIPPING'
}

export interface AddressTypeEnum {
    value: AddressTypeEnumValues,
    rawValue: string
}


export function AddressTypeEnumFromJSON(json: any): AddressTypeEnum {
    return AddressTypeEnumFromJSONTyped(json, false);
}

export function AddressTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressTypeEnum {
    if ((<any>Object).values(AddressTypeEnumValues).includes(json)) {
        return {
            value: json as AddressTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: AddressTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function AddressTypeEnumToJSON(value?: AddressTypeEnum | null): JSONValue {
    return value && value.value != AddressTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

