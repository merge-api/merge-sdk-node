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
 * # The CashFlowStatement Object
 * ### Description
 * The `CashFlowStatement` object is used to represent a company's cash flow statement.
 * 
 * ### Usage Example
 * Fetch from the `LIST CashFlowStatements` endpoint and view a company's cash flow statements.
 * @export
 * @interface CashFlowStatement
 */
export interface CashFlowStatement {
    /**
     * 
     * @type {string}
     * @memberof CashFlowStatement
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CashFlowStatement
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof CashFlowStatement
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The cash flow statement's name.
     * @type {string}
     * @memberof CashFlowStatement
     */
    name?: string | null;
    /**
     * The cash flow statement's start period.
     * @type {Date}
     * @memberof CashFlowStatement
     */
    start_period?: Date | null;
    /**
     * The cash flow statement's end period.
     * @type {Date}
     * @memberof CashFlowStatement
     */
    end_period?: Date | null;
    /**
     * Cash and cash equivalents at the beginning of the cash flow statement's period.
     * @type {number}
     * @memberof CashFlowStatement
     */
    cash_at_beginning_of_period?: number | null;
    /**
     * Cash and cash equivalents at the beginning of the cash flow statement's period.
     * @type {number}
     * @memberof CashFlowStatement
     */
    cash_at_end_of_period?: number | null;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof CashFlowStatement
     */
    readonly operating_activities?: Array<ReportItem>;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof CashFlowStatement
     */
    readonly investing_activities?: Array<ReportItem>;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof CashFlowStatement
     */
    readonly financing_activities?: Array<ReportItem>;
    /**
     * The time that cash flow statement was generated by the accounting system.
     * @type {Date}
     * @memberof CashFlowStatement
     */
    remote_generated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof CashFlowStatement
     */
    readonly remote_was_deleted?: boolean;
}

export function CashFlowStatementFromJSON(json: JSONValue): CashFlowStatement | undefined {
    return CashFlowStatementFromJSONTyped(json);
}

export function CashFlowStatementFromJSONTyped(json: JSONValue): CashFlowStatement | undefined {
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
        'cash_at_beginning_of_period': !exists(json, 'cash_at_beginning_of_period') ? undefined : json['cash_at_beginning_of_period'],
        'cash_at_end_of_period': !exists(json, 'cash_at_end_of_period') ? undefined : json['cash_at_end_of_period'],
        'operating_activities': !exists(json, 'operating_activities') ? undefined : ((json['operating_activities'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'investing_activities': !exists(json, 'investing_activities') ? undefined : ((json['investing_activities'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'financing_activities': !exists(json, 'financing_activities') ? undefined : ((json['financing_activities'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'remote_generated_at': !exists(json, 'remote_generated_at') ? undefined : (json['remote_generated_at'] === null ? null : new Date(json['remote_generated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function CashFlowStatementToJSON(value?: CashFlowStatement): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'start_period': value.start_period === undefined ? undefined : (value.start_period === null ? null : value.start_period.toISOString()),
        'end_period': value.end_period === undefined ? undefined : (value.end_period === null ? null : value.end_period.toISOString()),
        'cash_at_beginning_of_period': value.cash_at_beginning_of_period,
        'cash_at_end_of_period': value.cash_at_end_of_period,
        'remote_generated_at': value.remote_generated_at === undefined ? undefined : (value.remote_generated_at === null ? null : value.remote_generated_at.toISOString()),
    };
}
