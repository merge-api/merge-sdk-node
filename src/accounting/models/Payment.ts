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
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Payment Object
 * ### Description
 * The `Payment` object represents general payments made towards a specific transaction.
 * 
 * ### Usage Example
 * Fetch from the `GET Payment` endpoint and view an invoice's payment.
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * 
     * @type {string}
     * @memberof Payment
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Payment
     */
    remote_id?: string | null;
    /**
     * The payment's transaction date.
     * @type {Date}
     * @memberof Payment
     */
    transaction_date?: Date | null;
    /**
     * The supplier, or customer involved in the payment.
     * @type {string}
     * @memberof Payment
     */
    contact?: string | JSONValue | null;
    /**
     * The supplier’s or customer’s account in which the payment is made.
     * @type {string}
     * @memberof Payment
     */
    account?: string | JSONValue | null;
    /**
     * The payment's currency.
     * @type {CurrencyEnum}
     * @memberof Payment
     */
    currency?: CurrencyEnum | null;
    /**
     * The payment's exchange rate.
     * @type {string}
     * @memberof Payment
     */
    exchange_rate?: string | null;
    /**
     * The company the payment belongs to.
     * @type {string}
     * @memberof Payment
     */
    company?: string | JSONValue | null;
    /**
     * The total amount of money being paid to the supplier, or customer, after taxes.
     * @type {number}
     * @memberof Payment
     */
    total_amount?: number | null;
    /**
     * When the third party's payment entry was updated.
     * @type {Date}
     * @memberof Payment
     */
    remote_updated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Payment
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Payment
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Payment
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function PaymentFromJSON(json: JSONValue): Payment | undefined {
    return PaymentFromJSONTyped(json);
}

export function PaymentFromJSONTyped(json: JSONValue): Payment | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function PaymentToJSON(value?: Payment): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'contact': value.contact,
        'account': value.account,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'company': value.company,
        'total_amount': value.total_amount,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
    };
}

