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
 * # The Tax Object
 * ### Description
 * The `Tax` object is used to represent an array of the tax deductions for a given employee's payroll run.
 * 
 * ### Usage Example
 * Fetch from the `LIST Taxes` endpoint and filter by `ID` to show all taxes.
 * @export
 * @interface Tax
 */
export interface Tax {
    /**
     * 
     * @type {string}
     * @memberof Tax
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof Tax
     */
    employee_payroll_run?: string | null;
    /**
     * The tax's name.
     * @type {string}
     * @memberof Tax
     */
    name?: string | null;
    /**
     * The tax amount.
     * @type {number}
     * @memberof Tax
     */
    amount?: number | null;
    /**
     * Whether or not the employer is responsible for paying the tax.
     * @type {boolean}
     * @memberof Tax
     */
    employer_tax?: boolean | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Tax
     */
    remote_was_deleted?: boolean;
}

export function TaxFromJSON(json: JSONValue): Tax | undefined {
    return TaxFromJSONTyped(json);
}

export function TaxFromJSONTyped(json: JSONValue): Tax | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'employee_payroll_run': !exists(json, 'employee_payroll_run') ? undefined : json['employee_payroll_run'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'employer_tax': !exists(json, 'employer_tax') ? undefined : json['employer_tax'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TaxToJSON(value?: Tax): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'employee_payroll_run': value.employee_payroll_run,
        'name': value.name,
        'amount': value.amount,
        'employer_tax': value.employer_tax,
        'remote_was_deleted': value.remote_was_deleted,
    };
}

