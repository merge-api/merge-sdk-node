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
import {
    TypeEnum,
    TypeEnumFromJSON,
    TypeEnumFromJSONTyped,
    TypeEnumToJSON,
} from './';


/**
 * # The Template Object
 * ### Description
 * The `Template` object is used to represent a template for a marketing asset in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/templates` endpoint and view their content properties.
 * @export
 * @interface TemplateRequest
 */
export interface TemplateRequest {
    /**
     * The template's name.
     * @type {string}
     * @memberof TemplateRequest
     */
    name?: string | null;
    /**
     * The template's type.
     * @type {TypeEnum}
     * @memberof TemplateRequest
     */
    type?: TypeEnum | null;
    /**
     * The template contents.
     * @type {string}
     * @memberof TemplateRequest
     */
    contents?: string | null;
    /**
     * The template's owner.
     * @type {string}
     * @memberof TemplateRequest
     */
    owner?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TemplateRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TemplateRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function TemplateRequestFromJSON(json: JSONValue): TemplateRequest | undefined {
    return TemplateRequestFromJSONTyped(json);
}

export function TemplateRequestFromJSONTyped(json: JSONValue): TemplateRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : TypeEnumFromJSON(json['type']) as TypeEnum,
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function TemplateRequestToJSON(value?: TemplateRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'type': TypeEnumToJSON(value.type),
        'contents': value.contents,
        'owner': value.owner,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}
