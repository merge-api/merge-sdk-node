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
    TypeEnum,
    TypeEnumFromJSON,
    TypeEnumFromJSONTyped,
    TypeEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesScope
 */
export interface CommonModelScopesScope {
    /**
     * 
     * @type {TypeEnum}
     * @memberof CommonModelScopesScope
     */
    type: TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesScope
     */
    value: string;
}

export function CommonModelScopesScopeFromJSON(json: JSONValue): CommonModelScopesScope | undefined {
    return CommonModelScopesScopeFromJSONTyped(json);
}

export function CommonModelScopesScopeFromJSONTyped(json: JSONValue): CommonModelScopesScope | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'type': TypeEnumFromJSON(json['type']) as TypeEnum,
        'value': json['value'],
    };
}

export function CommonModelScopesScopeToJSON(value?: CommonModelScopesScope): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'type': TypeEnumToJSON(value.type),
        'value': value.value,
    };
}

