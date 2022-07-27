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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';

/**
 * 
 * @export
 * @interface ValidationProblemSource
 */
export interface ValidationProblemSource {
    /**
     * 
     * @type {string}
     * @memberof ValidationProblemSource
     */
    pointer: string;
}

export function ValidationProblemSourceFromJSON(json: JSONValue): ValidationProblemSource | null {
    return ValidationProblemSourceFromJSONTyped(json);
}

export function ValidationProblemSourceFromJSONTyped(json: JSONValue): ValidationProblemSource | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'pointer': json['pointer'],
    };
}

export function ValidationProblemSourceToJSON(value?: ValidationProblemSource): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'pointer': value.pointer,
    };
}

