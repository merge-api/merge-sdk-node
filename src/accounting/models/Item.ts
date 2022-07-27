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
    
    Status7d1Enum,
    Status7d1EnumFromJSON,
    Status7d1EnumFromJSONTyped,
    Status7d1EnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Item Object
 * ### Description
 * The `Item` object is used to represent an item that a company buys, sells, or resells, such as products and services.
 * 
 * ### Usage Example
 * Fetch from the `LIST Items` endpoint and view a company's items.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Item
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Item
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The item's name.
     * @type {string}
     * @memberof Item
     */
    name?: string | null;
    /**
     * The item's status.
     * @type {Status7d1Enum}
     * @memberof Item
     */
    status?: Status7d1Enum | null;
    /**
     * The item's unit price.
     * @type {number}
     * @memberof Item
     */
    unit_price?: number | null;
    /**
     * The item's purchase price.
     * @type {number}
     * @memberof Item
     */
    purchase_price?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    purchase_account?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    sales_account?: string | null;
    /**
     * When the third party's item note was updated.
     * @type {Date}
     * @memberof Item
     */
    remote_updated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Item
     */
    readonly remote_was_deleted?: boolean;
}

export function ItemFromJSON(json: JSONValue): Item | null {
    return ItemFromJSONTyped(json);
}

export function ItemFromJSONTyped(json: JSONValue): Item | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : Status7d1EnumFromJSON(json['status']),
        'unit_price': !exists(json, 'unit_price') ? undefined : json['unit_price'],
        'purchase_price': !exists(json, 'purchase_price') ? undefined : json['purchase_price'],
        'purchase_account': !exists(json, 'purchase_account') ? undefined : json['purchase_account'],
        'sales_account': !exists(json, 'sales_account') ? undefined : json['sales_account'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function ItemToJSON(value?: Item): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'status': Status7d1EnumToJSON(value.status),
        'unit_price': value.unit_price,
        'purchase_price': value.purchase_price,
        'purchase_account': value.purchase_account,
        'sales_account': value.sales_account,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
    };
}

