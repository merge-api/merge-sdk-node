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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    UrlTypeEnum,
    UrlTypeEnumFromJSON,
    UrlTypeEnumFromJSONTyped,
    UrlTypeEnumToJSON,
} from './';


/**
 * # The Url Object
 * ### Description
 * The `Url` object is used to represent a candidate's website.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their website urls.
 * @export
 * @interface UrlRequest
 */
export interface UrlRequest {
    /**
     * The site's url.
     * @type {string}
     * @memberof UrlRequest
     */
    value?: string | null;
    /**
     * The type of site.
     * @type {UrlTypeEnum}
     * @memberof UrlRequest
     */
    url_type?: UrlTypeEnum | null;
}

export function UrlRequestFromJSON(json: JSONValue): UrlRequest | null {
    return UrlRequestFromJSONTyped(json);
}

export function UrlRequestFromJSONTyped(json: JSONValue): UrlRequest | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'url_type': !exists(json, 'url_type') ? undefined : UrlTypeEnumFromJSON(json['url_type']),
    };
}

export function UrlRequestToJSON(value?: UrlRequest): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'value': value.value,
        'url_type': UrlTypeEnumToJSON(value.url_type),
    };
}

