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
    AccountStatusEnum,
    AccountStatusEnumFromJSON,
    AccountStatusEnumFromJSONTyped,
    AccountStatusEnumToJSON,
    ClassificationEnum,
    ClassificationEnumFromJSON,
    ClassificationEnumFromJSONTyped,
    ClassificationEnumToJSON,
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
} from './';


/**
 * # The Account Object
 * ### Description
 * The `Account` object is what businesses use to track transactions. Accountants often call accounts "ledgers".
 * 
 * ### Usage Example
 * Fetch from the `LIST Accounts` endpoint and view a company's accounts.
 * @export
 * @interface AccountRequest
 */
export interface AccountRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof AccountRequest
     */
    remote_id?: string | null;
    /**
     * The account's name.
     * @type {string}
     * @memberof AccountRequest
     */
    name?: string | null;
    /**
     * The account's description.
     * @type {string}
     * @memberof AccountRequest
     */
    description?: string | null;
    /**
     * The account's classification.
     * @type {ClassificationEnum}
     * @memberof AccountRequest
     */
    classification?: ClassificationEnum | null;
    /**
     * The account's type.
     * @type {string}
     * @memberof AccountRequest
     */
    type?: string | null;
    /**
     * The account's status.
     * @type {AccountStatusEnum}
     * @memberof AccountRequest
     */
    status?: AccountStatusEnum | null;
    /**
     * The account's current balance.
     * @type {number}
     * @memberof AccountRequest
     */
    current_balance?: number | null;
    /**
     * The account's currency.
     * @type {CurrencyEnum}
     * @memberof AccountRequest
     */
    currency?: CurrencyEnum | null;
    /**
     * The account's number.
     * @type {string}
     * @memberof AccountRequest
     */
    account_number?: string | null;
    /**
     * ID of the parent account.
     * @type {string}
     * @memberof AccountRequest
     */
    parent_account?: string | null;
    /**
     * The company the account belongs to.
     * @type {string}
     * @memberof AccountRequest
     */
    company?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AccountRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AccountRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function AccountRequestFromJSON(json: JSONValue): AccountRequest | undefined {
    return AccountRequestFromJSONTyped(json);
}

export function AccountRequestFromJSONTyped(json: JSONValue): AccountRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'classification': !exists(json, 'classification') ? undefined : ClassificationEnumFromJSON(json['classification']) as ClassificationEnum,
        'type': !exists(json, 'type') ? undefined : json['type'],
        'status': !exists(json, 'status') ? undefined : AccountStatusEnumFromJSON(json['status']) as AccountStatusEnum,
        'current_balance': !exists(json, 'current_balance') ? undefined : json['current_balance'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'account_number': !exists(json, 'account_number') ? undefined : json['account_number'],
        'parent_account': !exists(json, 'parent_account') ? undefined : json['parent_account'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function AccountRequestToJSON(value?: AccountRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'description': value.description,
        'classification': ClassificationEnumToJSON(value.classification),
        'type': value.type,
        'status': AccountStatusEnumToJSON(value.status),
        'current_balance': value.current_balance,
        'currency': CurrencyEnumToJSON(value.currency),
        'account_number': value.account_number,
        'parent_account': value.parent_account,
        'company': value.company,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

