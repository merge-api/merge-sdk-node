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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    CommonModelScopesPutInnerDeserializerEnabledActionsEnum,
    CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSON,
    CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSONTyped,
    CommonModelScopesPutInnerDeserializerEnabledActionsEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesPutInnerDeserializerRequest
 */
export interface CommonModelScopesPutInnerDeserializerRequest {
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesPutInnerDeserializerRequest
     */
    model_id: string;
    /**
     * 
     * @type {Array<CommonModelScopesPutInnerDeserializerEnabledActionsEnum>}
     * @memberof CommonModelScopesPutInnerDeserializerRequest
     */
    enabled_actions: Array<CommonModelScopesPutInnerDeserializerEnabledActionsEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonModelScopesPutInnerDeserializerRequest
     */
    disabled_fields: Array<string>;
}

export function CommonModelScopesPutInnerDeserializerRequestFromJSON(json: JSONValue): CommonModelScopesPutInnerDeserializerRequest | undefined {
    return CommonModelScopesPutInnerDeserializerRequestFromJSONTyped(json);
}

export function CommonModelScopesPutInnerDeserializerRequestFromJSONTyped(json: JSONValue): CommonModelScopesPutInnerDeserializerRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model_id': json['model_id'],
        'enabled_actions': ((json['enabled_actions'] as Array<JSONValue>).map(CommonModelScopesPutInnerDeserializerEnabledActionsEnumFromJSON)) as Array<CommonModelScopesPutInnerDeserializerEnabledActionsEnum>,
        'disabled_fields': json['disabled_fields'],
    };
}

export function CommonModelScopesPutInnerDeserializerRequestToJSON(value?: CommonModelScopesPutInnerDeserializerRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model_id': value.model_id,
        'enabled_actions': ((value.enabled_actions as Array<any>).map(CommonModelScopesPutInnerDeserializerEnabledActionsEnumToJSON)),
        'disabled_fields': value.disabled_fields,
    };
}
