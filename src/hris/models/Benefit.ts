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
import {
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Benefit Object
 * ### Description
 * The `Benefit` object is used to represent a benefit that an employee has enrolled in.
 * 
 * ### Usage Example
 * Fetch from the `LIST Benefits` endpoint and filter by `ID` to show all benefits.
 * @export
 * @interface Benefit
 */
export interface Benefit {
    /**
     * 
     * @type {string}
     * @memberof Benefit
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Benefit
     */
    remote_id?: string | null;
    /**
     * The employee on the plan.
     * @type {string}
     * @memberof Benefit
     */
    employee?: string | JSONValue | null;
    /**
     * The name of the benefit provider.
     * @type {string}
     * @memberof Benefit
     */
    provider_name?: string | null;
    /**
     * The type of benefit plan
     * @type {string}
     * @memberof Benefit
     */
    benefit_plan_type?: string | null;
    /**
     * The employee's contribution.
     * @type {number}
     * @memberof Benefit
     */
    employee_contribution?: number | null;
    /**
     * The company's contribution.
     * @type {number}
     * @memberof Benefit
     */
    company_contribution?: number | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Benefit
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Benefit
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Benefit
     */
    readonly field_mappings?: { [key: string]: any; } | null;
}

export function BenefitFromJSON(json: JSONValue): Benefit | undefined {
    return BenefitFromJSONTyped(json);
}

export function BenefitFromJSONTyped(json: JSONValue): Benefit | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'provider_name': !exists(json, 'provider_name') ? undefined : json['provider_name'],
        'benefit_plan_type': !exists(json, 'benefit_plan_type') ? undefined : json['benefit_plan_type'],
        'employee_contribution': !exists(json, 'employee_contribution') ? undefined : json['employee_contribution'],
        'company_contribution': !exists(json, 'company_contribution') ? undefined : json['company_contribution'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
    };
}

export function BenefitToJSON(value?: Benefit): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'provider_name': value.provider_name,
        'benefit_plan_type': value.benefit_plan_type,
        'employee_contribution': value.employee_contribution,
        'company_contribution': value.company_contribution,
    };
}

