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
    JournalLine,
    JournalLineFromJSON,
    JournalLineFromJSONTyped,
    JournalLineToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The JournalEntry Object
 * ### Description
 * The `JournalEntry` object is used to represent a company's journey entries.
 * 
 * ### Usage Example
 * Fetch from the `GET JournalEntry` endpoint and view a company's journey entry.
 * @export
 * @interface JournalEntry
 */
export interface JournalEntry {
    /**
     * 
     * @type {string}
     * @memberof JournalEntry
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof JournalEntry
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof JournalEntry
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The journal entry's transaction date.
     * @type {Date}
     * @memberof JournalEntry
     */
    transaction_date?: Date | null;
    /**
     * When the third party's journal entry was created.
     * @type {Date}
     * @memberof JournalEntry
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's journal entry was updated.
     * @type {Date}
     * @memberof JournalEntry
     */
    remote_updated_at?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof JournalEntry
     */
    payments?: Array<string> | JSONValue;
    /**
     * The journal entry's private note.
     * @type {string}
     * @memberof JournalEntry
     */
    memo?: string | null;
    /**
     * The journal's currency.
     * @type {CurrencyEnum}
     * @memberof JournalEntry
     */
    currency?: CurrencyEnum | null;
    /**
     * The journal entry's exchange rate.
     * @type {string}
     * @memberof JournalEntry
     */
    exchange_rate?: string | null;
    /**
     * The company the journal entry belongs to.
     * @type {string}
     * @memberof JournalEntry
     */
    company?: string | null;
    /**
     * 
     * @type {Array<JournalLine>}
     * @memberof JournalEntry
     */
    readonly lines?: Array<JournalLine> | JSONValue;
    /**
     * 
     * @type {boolean}
     * @memberof JournalEntry
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof JournalEntry
     */
    readonly field_mappings?: { [key: string]: any; } | null;
}

export function JournalEntryFromJSON(json: JSONValue): JournalEntry | undefined {
    return JournalEntryFromJSONTyped(json);
}

export function JournalEntryFromJSONTyped(json: JSONValue): JournalEntry | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'lines': !exists(json, 'lines') ? undefined : ((json['lines'] as Array<JSONValue>).map(JournalLineFromJSON)) as Array<JournalLine>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
    };
}

export function JournalEntryToJSON(value?: JournalEntry): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'payments': value.payments,
        'memo': value.memo,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'company': value.company,
    };
}

