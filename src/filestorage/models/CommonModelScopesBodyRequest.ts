/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    EnabledActionsEnum,
    EnabledActionsEnumFromJSON,
    EnabledActionsEnumFromJSONTyped,
    EnabledActionsEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesBodyRequest
 */
export interface CommonModelScopesBodyRequest {
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesBodyRequest
     */
    model_id: string;
    /**
     * 
     * @type {Array<EnabledActionsEnum>}
     * @memberof CommonModelScopesBodyRequest
     */
    enabled_actions: Array<EnabledActionsEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonModelScopesBodyRequest
     */
    disabled_fields: Array<string>;
}

export function CommonModelScopesBodyRequestFromJSON(json: JSONValue): CommonModelScopesBodyRequest | undefined {
    return CommonModelScopesBodyRequestFromJSONTyped(json);
}

export function CommonModelScopesBodyRequestFromJSONTyped(json: JSONValue): CommonModelScopesBodyRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model_id': json['model_id'],
        'enabled_actions': ((json['enabled_actions'] as Array<JSONValue>).map(EnabledActionsEnumFromJSON)) as Array<EnabledActionsEnum>,
        'disabled_fields': json['disabled_fields'],
    };
}

export function CommonModelScopesBodyRequestToJSON(value?: CommonModelScopesBodyRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model_id': value.model_id,
        'enabled_actions': ((value.enabled_actions as Array<any>).map(EnabledActionsEnumToJSON)),
        'disabled_fields': value.disabled_fields,
    };
}

