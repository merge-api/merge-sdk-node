/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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

/**
 * # The List Object
 * ### Description
 * The `List` object is used to represent a list of contacts in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/lists` endpoint and view their names.
 * @export
 * @interface ListRequest
 */
export interface ListRequest {
    /**
     * The list's name.
     * @type {string}
     * @memberof ListRequest
     */
    name?: string | null;
    /**
     * The list's type.
     * @type {string}
     * @memberof ListRequest
     */
    type?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ListRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ListRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function ListRequestFromJSON(json: JSONValue): ListRequest | undefined {
    return ListRequestFromJSONTyped(json);
}

export function ListRequestFromJSONTyped(json: JSONValue): ListRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ListRequestToJSON(value?: ListRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'type': value.type,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}
