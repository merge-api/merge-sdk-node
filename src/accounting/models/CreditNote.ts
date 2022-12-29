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
    CreditNoteLineItem,
    CreditNoteLineItemFromJSON,
    CreditNoteLineItemFromJSONTyped,
    CreditNoteLineItemToJSON,
    CreditNoteStatusEnum,
    CreditNoteStatusEnumFromJSON,
    CreditNoteStatusEnumFromJSONTyped,
    CreditNoteStatusEnumToJSON,
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The CreditNote Object
 * ### Description
 * The `CreditNote` object is used to represent a refund or credit of payment.
 * 
 * ### Usage Example
 * Fetch from the `LIST CreditNotes` endpoint and view a company's credit notes.
 * @export
 * @interface CreditNote
 */
export interface CreditNote {
    /**
     * 
     * @type {string}
     * @memberof CreditNote
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CreditNote
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof CreditNote
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The credit note's transaction date.
     * @type {Date}
     * @memberof CreditNote
     */
    transaction_date?: Date | null;
    /**
     * The credit note's status.
     * @type {CreditNoteStatusEnum}
     * @memberof CreditNote
     */
    status?: CreditNoteStatusEnum | null;
    /**
     * The credit note's number.
     * @type {string}
     * @memberof CreditNote
     */
    number?: string | null;
    /**
     * The credit note's contact.
     * @type {string}
     * @memberof CreditNote
     */
    contact?: string | null;
    /**
     * The company the credit note belongs to.
     * @type {string}
     * @memberof CreditNote
     */
    company?: string | null;
    /**
     * The credit note's total amount.
     * @type {number}
     * @memberof CreditNote
     */
    total_amount?: number | null;
    /**
     * The credit note's remaining credit.
     * @type {number}
     * @memberof CreditNote
     */
    remaining_credit?: number | null;
    /**
     * 
     * @type {Array<CreditNoteLineItem>}
     * @memberof CreditNote
     */
    readonly line_items?: Array<CreditNoteLineItem>;
    /**
     * The credit note's currency.
     * @type {CurrencyEnum}
     * @memberof CreditNote
     */
    currency?: CurrencyEnum | null;
    /**
     * When the third party's credit note was created.
     * @type {Date}
     * @memberof CreditNote
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's credit note was updated.
     * @type {Date}
     * @memberof CreditNote
     */
    remote_updated_at?: Date | null;
    /**
     * Array of `Payment` object IDs
     * @type {Array<string>}
     * @memberof CreditNote
     */
    payments?: Array<string> | JSONValue;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof CreditNote
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CreditNote
     */
    readonly field_mappings?: { [key: string]: any; } | null;
}

export function CreditNoteFromJSON(json: JSONValue): CreditNote | undefined {
    return CreditNoteFromJSONTyped(json);
}

export function CreditNoteFromJSONTyped(json: JSONValue): CreditNote | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'status': !exists(json, 'status') ? undefined : CreditNoteStatusEnumFromJSON(json['status']) as CreditNoteStatusEnum,
        'number': !exists(json, 'number') ? undefined : json['number'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'remaining_credit': !exists(json, 'remaining_credit') ? undefined : json['remaining_credit'],
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(CreditNoteLineItemFromJSON)) as Array<CreditNoteLineItem>,
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
    };
}

export function CreditNoteToJSON(value?: CreditNote): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'status': CreditNoteStatusEnumToJSON(value.status),
        'number': value.number,
        'contact': value.contact,
        'company': value.company,
        'total_amount': value.total_amount,
        'remaining_credit': value.remaining_credit,
        'currency': CurrencyEnumToJSON(value.currency),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'payments': value.payments,
    };
}

