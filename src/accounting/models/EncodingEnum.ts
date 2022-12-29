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
export enum EncodingEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Raw = 'RAW',
    Base64 = 'BASE64',
    GzipBase64 = 'GZIP_BASE64'
}


export function EncodingEnumFromJSON(json: any): EncodingEnum {
    return EncodingEnumFromJSONTyped(json, false);
}

export function EncodingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncodingEnum {
    if ((<any>Object).values(EncodingEnum).includes(json)) {
        return json as EncodingEnum;
    }
    return EncodingEnum.MERGE_NONSTANDARD_VALUE;
}

export function EncodingEnumToJSON(value?: EncodingEnum | null): JSONValue {
    return value ? value as string : null;
}

