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
    EnabledActionsEnum,
    EnabledActionsEnumFromJSON,
    EnabledActionsEnumFromJSONTyped,
    EnabledActionsEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesPostInnerDeserializerRequest
 */
export interface CommonModelScopesPostInnerDeserializerRequest {
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesPostInnerDeserializerRequest
     */
    model_id: string;
    /**
     * 
     * @type {Array<EnabledActionsEnum>}
     * @memberof CommonModelScopesPostInnerDeserializerRequest
     */
    enabled_actions: Array<EnabledActionsEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonModelScopesPostInnerDeserializerRequest
     */
    disabled_fields: Array<string>;
}

export function CommonModelScopesPostInnerDeserializerRequestFromJSON(json: JSONValue): CommonModelScopesPostInnerDeserializerRequest | undefined {
    return CommonModelScopesPostInnerDeserializerRequestFromJSONTyped(json);
}

export function CommonModelScopesPostInnerDeserializerRequestFromJSONTyped(json: JSONValue): CommonModelScopesPostInnerDeserializerRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model_id': json['model_id'],
        'enabled_actions': ((json['enabled_actions'] as Array<JSONValue>).map(EnabledActionsEnumFromJSON)) as Array<EnabledActionsEnum>,
        'disabled_fields': json['disabled_fields'],
    };
}

export function CommonModelScopesPostInnerDeserializerRequestToJSON(value?: CommonModelScopesPostInnerDeserializerRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model_id': value.model_id,
        'enabled_actions': ((value.enabled_actions as Array<any>).map(EnabledActionsEnumToJSON)),
        'disabled_fields': value.disabled_fields,
    };
}
