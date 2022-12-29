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
export enum RequestFormatEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Json = 'JSON',
    Xml = 'XML',
    Multipart = 'MULTIPART'
}


export function RequestFormatEnumFromJSON(json: any): RequestFormatEnum {
    return RequestFormatEnumFromJSONTyped(json, false);
}

export function RequestFormatEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestFormatEnum {
    if ((<any>Object).values(RequestFormatEnum).includes(json)) {
        return json as RequestFormatEnum;
    }
    return RequestFormatEnum.MERGE_NONSTANDARD_VALUE;
}

export function RequestFormatEnumToJSON(value?: RequestFormatEnum | null): JSONValue {
    return value ? value as string : null;
}

