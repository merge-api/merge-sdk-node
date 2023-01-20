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
    InvoiceLineItemRequest,
    InvoiceLineItemRequestFromJSON,
    InvoiceLineItemRequestFromJSONTyped,
    InvoiceLineItemRequestToJSON,
    InvoiceTypeEnum,
    InvoiceTypeEnumFromJSON,
    InvoiceTypeEnumFromJSONTyped,
    InvoiceTypeEnumToJSON,
} from './';


/**
 * # The Invoice Object
 *     ### Description
 *     The `Invoice` object represents an itemized record of goods and/or services sold to a customer.
 * If type = accounts_payable `Invoice` is a bill, if type = accounts_receivable it's an invoice.
 * 
 *     ### Usage Example
 *     Fetch from the `LIST Invoices` endpoint and view a company's invoices.
 * @export
 * @interface InvoiceRequest
 */
export interface InvoiceRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof InvoiceRequest
     */
    remote_id?: string | null;
    /**
     * Whether the invoice is an accounts receivable or accounts payable. Accounts payable invoices are commonly referred to as Bills.
     * @type {InvoiceTypeEnum}
     * @memberof InvoiceRequest
     */
    type?: InvoiceTypeEnum | null;
    /**
     * The invoice's contact.
     * @type {string}
     * @memberof InvoiceRequest
     */
    contact?: string | JSONValue | null;
    /**
     * The invoice's number.
     * @type {string}
     * @memberof InvoiceRequest
     */
    number?: string | null;
    /**
     * The invoice's issue date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    issue_date?: Date | null;
    /**
     * The invoice's due date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    due_date?: Date | null;
    /**
     * The invoice's paid date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    paid_on_date?: Date | null;
    /**
     * The invoice's private note.
     * @type {string}
     * @memberof InvoiceRequest
     */
    memo?: string | null;
    /**
     * The company the invoice belongs to.
     * @type {string}
     * @memberof InvoiceRequest
     */
    company?: string | JSONValue | null;
    /**
     * The invoice's currency.
     * @type {CurrencyEnum}
     * @memberof InvoiceRequest
     */
    currency?: CurrencyEnum | null;
    /**
     * The invoice's exchange rate.
     * @type {string}
     * @memberof InvoiceRequest
     */
    exchange_rate?: string | null;
    /**
     * The total discounts applied to the total cost.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_discount?: number | null;
    /**
     * The total amount being paid before taxes.
     * @type {number}
     * @memberof InvoiceRequest
     */
    sub_total?: number | null;
    /**
     * The total amount being paid in taxes.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_tax_amount?: number | null;
    /**
     * The invoice's total amount.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_amount?: number | null;
    /**
     * The invoice's remaining balance.
     * @type {number}
     * @memberof InvoiceRequest
     */
    balance?: number | null;
    /**
     * When the third party's invoice entry was updated.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    remote_updated_at?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof InvoiceRequest
     */
    payments?: Array<string> | JSONValue;
    /**
     * 
     * @type {Array<InvoiceLineItemRequest>}
     * @memberof InvoiceRequest
     */
    line_items?: Array<InvoiceLineItemRequest> | JSONValue;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof InvoiceRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof InvoiceRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function InvoiceRequestFromJSON(json: JSONValue): InvoiceRequest | undefined {
    return InvoiceRequestFromJSONTyped(json);
}

export function InvoiceRequestFromJSONTyped(json: JSONValue): InvoiceRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
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
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(InvoiceLineItemRequestFromJSON)) as Array<InvoiceLineItemRequest>,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function InvoiceRequestToJSON(value?: InvoiceRequest): JSONValue {
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
        'line_items': value.line_items === undefined ? undefined : ((value.line_items as Array<any>).map(InvoiceLineItemRequestToJSON)),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

