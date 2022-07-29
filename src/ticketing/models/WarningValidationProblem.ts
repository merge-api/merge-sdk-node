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
    ValidationProblemSource,
    ValidationProblemSourceFromJSON,
    ValidationProblemSourceFromJSONTyped,
    ValidationProblemSourceToJSON,
} from './';


/**
 * 
 * @export
 * @interface WarningValidationProblem
 */
export interface WarningValidationProblem {
    /**
     * 
     * @type {ValidationProblemSource}
     * @memberof WarningValidationProblem
     */
    source?: ValidationProblemSource;
    /**
     * 
     * @type {string}
     * @memberof WarningValidationProblem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof WarningValidationProblem
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof WarningValidationProblem
     */
    problem_type: string;
}

export function WarningValidationProblemFromJSON(json: JSONValue): WarningValidationProblem | undefined {
    return WarningValidationProblemFromJSONTyped(json);
}

export function WarningValidationProblemFromJSONTyped(json: JSONValue): WarningValidationProblem | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'source': !exists(json, 'source') ? undefined : ValidationProblemSourceFromJSON(json['source']) as ValidationProblemSource,
        'title': json['title'],
        'detail': json['detail'],
        'problem_type': json['problem_type'],
    };
}

export function WarningValidationProblemToJSON(value?: WarningValidationProblem): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'source': ValidationProblemSourceToJSON(value.source),
        'title': value.title,
        'detail': value.detail,
        'problem_type': value.problem_type,
    };
}

