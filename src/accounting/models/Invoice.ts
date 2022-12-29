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
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
    InvoiceLineItem,
    InvoiceLineItemFromJSON,
    InvoiceLineItemFromJSONTyped,
    InvoiceLineItemToJSON,
    InvoiceTypeEnum,
    InvoiceTypeEnumFromJSON,
    InvoiceTypeEnumFromJSONTyped,
    InvoiceTypeEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Invoice Object
 * ### Description
 * The `Invoice` object is used to represent a company's invoices.
 * 
 * ### Usage Example
 * Fetch from the `LIST Invoices` endpoint and view a company's invoices.
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Invoice
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Invoice
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The invoice's type.
     * @type {InvoiceTypeEnum}
     * @memberof Invoice
     */
    type?: InvoiceTypeEnum | null;
    /**
     * The invoice's contact.
     * @type {string}
     * @memberof Invoice
     */
    contact?: string | JSONValue | null;
    /**
     * The invoice's number.
     * @type {string}
     * @memberof Invoice
     */
    number?: string | null;
    /**
     * The invoice's issue date.
     * @type {Date}
     * @memberof Invoice
     */
    issue_date?: Date | null;
    /**
     * The invoice's due date.
     * @type {Date}
     * @memberof Invoice
     */
    due_date?: Date | null;
    /**
     * The invoice's paid date.
     * @type {Date}
     * @memberof Invoice
     */
    paid_on_date?: Date | null;
    /**
     * The invoice's private note.
     * @type {string}
     * @memberof Invoice
     */
    memo?: string | null;
    /**
     * The company the invoice belongs to.
     * @type {string}
     * @memberof Invoice
     */
    company?: string | JSONValue | null;
    /**
     * The invoice's currency.
     * @type {CurrencyEnum}
     * @memberof Invoice
     */
    currency?: CurrencyEnum | null;
    /**
     * The invoice's exchange rate.
     * @type {string}
     * @memberof Invoice
     */
    exchange_rate?: string | null;
    /**
     * The invoice's total discount.
     * @type {number}
     * @memberof Invoice
     */
    total_discount?: number | null;
    /**
     * The invoice's sub-total.
     * @type {number}
     * @memberof Invoice
     */
    sub_total?: number | null;
    /**
     * The invoice's total tax amount.
     * @type {number}
     * @memberof Invoice
     */
    total_tax_amount?: number | null;
    /**
     * The invoice's total amount.
     * @type {number}
     * @memberof Invoice
     */
    total_amount?: number | null;
    /**
     * The invoice's remaining balance.
     * @type {number}
     * @memberof Invoice
     */
    balance?: number | null;
    /**
     * When the third party's invoice entry was updated.
     * @type {Date}
     * @memberof Invoice
     */
    remote_updated_at?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof Invoice
     */
    payments?: Array<string> | JSONValue;
    /**
     * 
     * @type {Array<InvoiceLineItem>}
     * @memberof Invoice
     */
    readonly line_items?: Array<InvoiceLineItem> | JSONValue;
    /**
     * 
     * @type {boolean}
     * @memberof Invoice
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Invoice
     */
    readonly field_mappings?: { [key: string]: any; } | null;
}

export function InvoiceFromJSON(json: JSONValue): Invoice | undefined {
    return InvoiceFromJSONTyped(json);
}

export function InvoiceFromJSONTyped(json: JSONValue): Invoice | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'type': !exists(json, 'type') ? undefined : InvoiceTypeEnumFromJSON(json['type']) as InvoiceTypeEnum,
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'issue_date': !exists(json, 'issue_date') ? undefined : (json['issue_date'] === null ? null : new Date(json['issue_date'])),
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'paid_on_date': !exists(json, 'paid_on_date') ? undefined : (json['paid_on_date'] === null ? null : new Date(json['paid_on_date'])),
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'total_discount': !exists(json, 'total_discount') ? undefined : json['total_discount'],
        'sub_total': !exists(json, 'sub_total') ? undefined : json['sub_total'],
        'total_tax_amount': !exists(json, 'total_tax_amount') ? undefined : json['total_tax_amount'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(InvoiceLineItemFromJSON)) as Array<InvoiceLineItem>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
    };
}

export function InvoiceToJSON(value?: Invoice): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'type': InvoiceTypeEnumToJSON(value.type),
        'contact': value.contact,
        'number': value.number,
        'issue_date': value.issue_date === undefined ? undefined : (value.issue_date === null ? null : value.issue_date.toISOString()),
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'paid_on_date': value.paid_on_date === undefined ? undefined : (value.paid_on_date === null ? null : value.paid_on_date.toISOString()),
        'memo': value.memo,
        'company': value.company,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'total_discount': value.total_discount,
        'sub_total': value.sub_total,
        'total_tax_amount': value.total_tax_amount,
        'total_amount': value.total_amount,
        'balance': value.balance,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'payments': value.payments,
    };
}

