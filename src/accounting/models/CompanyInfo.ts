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
    AccountingPhoneNumber,
    AccountingPhoneNumberFromJSON,
    AccountingPhoneNumberFromJSONTyped,
    AccountingPhoneNumberToJSON,
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
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
 * # The CompanyInfo Object
 * ### Description
 * The `CompanyInfo` object is used to represent a company's information.
 * 
 * ### Usage Example
 * Fetch from the `GET CompanyInfo` endpoint and view a company's information.
 * @export
 * @interface CompanyInfo
 */
export interface CompanyInfo {
    /**
     * 
     * @type {string}
     * @memberof CompanyInfo
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CompanyInfo
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof CompanyInfo
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The company's name.
     * @type {string}
     * @memberof CompanyInfo
     */
    name?: string | null;
    /**
     * The company's legal name.
     * @type {string}
     * @memberof CompanyInfo
     */
    legal_name?: string | null;
    /**
     * The company's tax number.
     * @type {string}
     * @memberof CompanyInfo
     */
    tax_number?: string | null;
    /**
     * The company's fiscal year end month.
     * @type {number}
     * @memberof CompanyInfo
     */
    fiscal_year_end_month?: number | null;
    /**
     * The company's fiscal year end day.
     * @type {number}
     * @memberof CompanyInfo
     */
    fiscal_year_end_day?: number | null;
    /**
     * The currency set in the company's accounting platform.
     * @type {CurrencyEnum}
     * @memberof CompanyInfo
     */
    currency?: CurrencyEnum | null;
    /**
     * When the third party's company was created.
     * @type {Date}
     * @memberof CompanyInfo
     */
    remote_created_at?: Date | null;
    /**
     * The company's urls.
     * @type {Array<string>}
     * @memberof CompanyInfo
     */
    urls?: Array<string> | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof CompanyInfo
     */
    addresses?: Array<Address>;
    /**
     * 
     * @type {Array<AccountingPhoneNumber>}
     * @memberof CompanyInfo
     */
    phone_numbers?: Array<AccountingPhoneNumber>;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof CompanyInfo
     */
    readonly remote_was_deleted?: boolean;
}

export function CompanyInfoFromJSON(json: JSONValue): CompanyInfo | undefined {
    return CompanyInfoFromJSONTyped(json);
}

export function CompanyInfoFromJSONTyped(json: JSONValue): CompanyInfo | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'name': !exists(json, 'name') ? undefined : json['name'],
        'legal_name': !exists(json, 'legal_name') ? undefined : json['legal_name'],
        'tax_number': !exists(json, 'tax_number') ? undefined : json['tax_number'],
        'fiscal_year_end_month': !exists(json, 'fiscal_year_end_month') ? undefined : json['fiscal_year_end_month'],
        'fiscal_year_end_day': !exists(json, 'fiscal_year_end_day') ? undefined : json['fiscal_year_end_day'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'urls': !exists(json, 'urls') ? undefined : json['urls'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<JSONValue>).map(AddressFromJSON)) as Array<Address>,
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(AccountingPhoneNumberFromJSON)) as Array<AccountingPhoneNumber>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function CompanyInfoToJSON(value?: CompanyInfo): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'legal_name': value.legal_name,
        'tax_number': value.tax_number,
        'fiscal_year_end_month': value.fiscal_year_end_month,
        'fiscal_year_end_day': value.fiscal_year_end_day,
        'currency': CurrencyEnumToJSON(value.currency),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'urls': value.urls,
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressToJSON)),
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(AccountingPhoneNumberToJSON)),
    };
}

