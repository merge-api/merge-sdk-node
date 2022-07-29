/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    
    ReportItem,
    ReportItemFromJSON,
    ReportItemFromJSONTyped,
    ReportItemToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The IncomeStatement Object
 * ### Description
 * The `IncomeStatement` object is used to represent a company's income statements.
 * 
 * ### Usage Example
 * Fetch from the `GET IncomeStatement` endpoint and view a company's income statement for a given period.
 * @export
 * @interface IncomeStatement
 */
export interface IncomeStatement {
    /**
     * 
     * @type {string}
     * @memberof IncomeStatement
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof IncomeStatement
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof IncomeStatement
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The income statement's name.
     * @type {string}
     * @memberof IncomeStatement
     */
    name?: string | null;
    /**
     * The income statement's start period.
     * @type {Date}
     * @memberof IncomeStatement
     */
    start_period?: Date | null;
    /**
     * The income statement's end period.
     * @type {Date}
     * @memberof IncomeStatement
     */
    end_period?: Date | null;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof IncomeStatement
     */
    readonly income?: Array<ReportItem>;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof IncomeStatement
     */
    readonly cost_of_sales?: Array<ReportItem>;
    /**
     * The income statement's gross profit.
     * @type {number}
     * @memberof IncomeStatement
     */
    gross_profit?: number | null;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof IncomeStatement
     */
    readonly operating_expenses?: Array<ReportItem>;
    /**
     * The income statement's net operating profit.
     * @type {number}
     * @memberof IncomeStatement
     */
    net_operating_income?: number | null;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof IncomeStatement
     */
    readonly non_operating_expenses?: Array<ReportItem>;
    /**
     * The income statement's net income.
     * @type {number}
     * @memberof IncomeStatement
     */
    net_income?: number | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof IncomeStatement
     */
    readonly remote_was_deleted?: boolean;
}

export function IncomeStatementFromJSON(json: JSONValue): IncomeStatement | undefined {
    return IncomeStatementFromJSONTyped(json);
}

export function IncomeStatementFromJSONTyped(json: JSONValue): IncomeStatement | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'name': !exists(json, 'name') ? undefined : json['name'],
        'start_period': !exists(json, 'start_period') ? undefined : (json['start_period'] === null ? null : new Date(json['start_period'])),
        'end_period': !exists(json, 'end_period') ? undefined : (json['end_period'] === null ? null : new Date(json['end_period'])),
        'income': !exists(json, 'income') ? undefined : ((json['income'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'cost_of_sales': !exists(json, 'cost_of_sales') ? undefined : ((json['cost_of_sales'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'gross_profit': !exists(json, 'gross_profit') ? undefined : json['gross_profit'],
        'operating_expenses': !exists(json, 'operating_expenses') ? undefined : ((json['operating_expenses'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'net_operating_income': !exists(json, 'net_operating_income') ? undefined : json['net_operating_income'],
        'non_operating_expenses': !exists(json, 'non_operating_expenses') ? undefined : ((json['non_operating_expenses'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'net_income': !exists(json, 'net_income') ? undefined : json['net_income'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function IncomeStatementToJSON(value?: IncomeStatement): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'start_period': value.start_period === undefined ? undefined : (value.start_period === null ? null : value.start_period.toISOString()),
        'end_period': value.end_period === undefined ? undefined : (value.end_period === null ? null : value.end_period.toISOString()),
        'gross_profit': value.gross_profit,
        'net_operating_income': value.net_operating_income,
        'net_income': value.net_income,
    };
}
