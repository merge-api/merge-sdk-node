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
    PurchaseOrderLineItem,
    PurchaseOrderLineItemFromJSON,
    PurchaseOrderLineItemFromJSONTyped,
    PurchaseOrderLineItemToJSON,
    PurchaseOrderStatusEnum,
    PurchaseOrderStatusEnumFromJSON,
    PurchaseOrderStatusEnumFromJSONTyped,
    PurchaseOrderStatusEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The PurchaseOrder Object
 * ### Description
 * The `PurchaseOrder` object is used to represent a company's purchase orders.
 * 
 * ### Usage Example
 * Fetch from the `LIST PurchaseOrders` endpoint and view a company's purchase orders.
 * @export
 * @interface PurchaseOrder
 */
export interface PurchaseOrder {
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrder
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof PurchaseOrder
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof PurchaseOrder
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The purchase order's status.
     * @type {PurchaseOrderStatusEnum}
     * @memberof PurchaseOrder
     */
    status?: PurchaseOrderStatusEnum | null;
    /**
     * The purchase order's issue date.
     * @type {Date}
     * @memberof PurchaseOrder
     */
    issue_date?: Date | null;
    /**
     * The purchase order's delivery date.
     * @type {Date}
     * @memberof PurchaseOrder
     */
    delivery_date?: Date | null;
    /**
     * The purchase order's delivery address.
     * @type {string}
     * @memberof PurchaseOrder
     */
    delivery_address?: string | JSONValue | null;
    /**
     * The purchase order's customer.
     * @type {string}
     * @memberof PurchaseOrder
     */
    customer?: string | null;
    /**
     * The purchase_order's vendor.
     * @type {string}
     * @memberof PurchaseOrder
     */
    vendor?: string | null;
    /**
     * A memo attached to the purchase order.
     * @type {string}
     * @memberof PurchaseOrder
     */
    memo?: string | null;
    /**
     * The purchase order's total amount.
     * @type {number}
     * @memberof PurchaseOrder
     */
    total_amount?: number | null;
    /**
     * The purchase order's currency.
     * @type {CurrencyEnum}
     * @memberof PurchaseOrder
     */
    currency?: CurrencyEnum | null;
    /**
     * The purchase order's exchange rate.
     * @type {string}
     * @memberof PurchaseOrder
     */
    exchange_rate?: string | null;
    /**
     * 
     * @type {Array<PurchaseOrderLineItem>}
     * @memberof PurchaseOrder
     */
    readonly line_items?: Array<PurchaseOrderLineItem> | JSONValue;
    /**
     * When the third party's purchase order note was created.
     * @type {Date}
     * @memberof PurchaseOrder
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's purchase order note was updated.
     * @type {Date}
     * @memberof PurchaseOrder
     */
    remote_updated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof PurchaseOrder
     */
    readonly remote_was_deleted?: boolean;
}

export function PurchaseOrderFromJSON(json: JSONValue): PurchaseOrder | undefined {
    return PurchaseOrderFromJSONTyped(json);
}

export function PurchaseOrderFromJSONTyped(json: JSONValue): PurchaseOrder | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'status': !exists(json, 'status') ? undefined : PurchaseOrderStatusEnumFromJSON(json['status']) as PurchaseOrderStatusEnum,
        'issue_date': !exists(json, 'issue_date') ? undefined : (json['issue_date'] === null ? null : new Date(json['issue_date'])),
        'delivery_date': !exists(json, 'delivery_date') ? undefined : (json['delivery_date'] === null ? null : new Date(json['delivery_date'])),
        'delivery_address': !exists(json, 'delivery_address') ? undefined : json['delivery_address'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(PurchaseOrderLineItemFromJSON)) as Array<PurchaseOrderLineItem>,
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function PurchaseOrderToJSON(value?: PurchaseOrder): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'status': PurchaseOrderStatusEnumToJSON(value.status),
        'issue_date': value.issue_date === undefined ? undefined : (value.issue_date === null ? null : value.issue_date.toISOString()),
        'delivery_date': value.delivery_date === undefined ? undefined : (value.delivery_date === null ? null : value.delivery_date.toISOString()),
        'delivery_address': value.delivery_address,
        'customer': value.customer,
        'vendor': value.vendor,
        'memo': value.memo,
        'total_amount': value.total_amount,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
    };
}

