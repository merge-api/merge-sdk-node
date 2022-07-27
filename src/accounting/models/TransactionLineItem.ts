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

/**
 * 
 * @export
 * @interface TransactionLineItem
 */
export interface TransactionLineItem {
    /**
     * A memo attached to the line item.
     * @type {string}
     * @memberof TransactionLineItem
     */
    memo?: string | null;
    /**
     * The line item's unit price.
     * @type {string}
     * @memberof TransactionLineItem
     */
    unit_price?: string | null;
    /**
     * The line item's quantity.
     * @type {string}
     * @memberof TransactionLineItem
     */
    quantity?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionLineItem
     */
    item?: string | null;
    /**
     * The line item's account.
     * @type {string}
     * @memberof TransactionLineItem
     */
    account?: string | null;
    /**
     * The line's associated tracking category.
     * @type {string}
     * @memberof TransactionLineItem
     */
    tracking_category?: string | null;
    /**
     * The line item's total.
     * @type {string}
     * @memberof TransactionLineItem
     */
    total_line_amount?: string | null;
    /**
     * The line item's tax rate.
     * @type {string}
     * @memberof TransactionLineItem
     */
    tax_rate?: string | null;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TransactionLineItem
     */
    remote_id?: string | null;
}

export function TransactionLineItemFromJSON(json: JSONValue): TransactionLineItem | null {
    return TransactionLineItemFromJSONTyped(json);
}

export function TransactionLineItemFromJSONTyped(json: JSONValue): TransactionLineItem | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'unit_price': !exists(json, 'unit_price') ? undefined : json['unit_price'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'item': !exists(json, 'item') ? undefined : json['item'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'tracking_category': !exists(json, 'tracking_category') ? undefined : json['tracking_category'],
        'total_line_amount': !exists(json, 'total_line_amount') ? undefined : json['total_line_amount'],
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
    };
}

export function TransactionLineItemToJSON(value?: TransactionLineItem): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'memo': value.memo,
        'unit_price': value.unit_price,
        'quantity': value.quantity,
        'item': value.item,
        'account': value.account,
        'tracking_category': value.tracking_category,
        'total_line_amount': value.total_line_amount,
        'tax_rate': value.tax_rate,
        'remote_id': value.remote_id,
    };
}

