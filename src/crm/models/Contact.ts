/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    EmailAddress,
    EmailAddressFromJSON,
    EmailAddressFromJSONTyped,
    EmailAddressToJSON,
    PhoneNumber,
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent a contact in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Contact
     */
    remote_id?: string | null;
    /**
     * The contact's first name.
     * @type {string}
     * @memberof Contact
     */
    first_name?: string | null;
    /**
     * The contact's last name.
     * @type {string}
     * @memberof Contact
     */
    last_name?: string | null;
    /**
     * The contact's account.
     * @type {string}
     * @memberof Contact
     */
    account?: string | JSONValue | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof Contact
     */
    addresses?: Array<Address>;
    /**
     * 
     * @type {Array<EmailAddress>}
     * @memberof Contact
     */
    email_addresses?: Array<EmailAddress>;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof Contact
     */
    phone_numbers?: Array<PhoneNumber>;
    /**
     * When the contact's last activity occurred.
     * @type {Date}
     * @memberof Contact
     */
    last_activity_at?: Date | null;
    /**
     * When the third party's contact was created.
     * @type {Date}
     * @memberof Contact
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Contact
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Contact
     */
    readonly remote_was_deleted?: boolean;
}

export function ContactFromJSON(json: JSONValue): Contact | undefined {
    return ContactFromJSONTyped(json);
}

export function ContactFromJSONTyped(json: JSONValue): Contact | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<JSONValue>).map(AddressFromJSON)) as Array<Address>,
        'email_addresses': !exists(json, 'email_addresses') ? undefined : ((json['email_addresses'] as Array<JSONValue>).map(EmailAddressFromJSON)) as Array<EmailAddress>,
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberFromJSON)) as Array<PhoneNumber>,
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function ContactToJSON(value?: Contact): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'account': value.account,
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressToJSON)),
        'email_addresses': value.email_addresses === undefined ? undefined : ((value.email_addresses as Array<any>).map(EmailAddressToJSON)),
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(PhoneNumberToJSON)),
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
    };
}

