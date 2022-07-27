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
 * # The InvoiceLineItem Object
 * ### Description
 * The `InvoiceLineItem` object is used to represent an invoice's line items.
 * 
 * ### Usage Example
 * Fetch from the `GET Invoice` endpoint and view the invoice's line items.
 * @export
 * @interface InvoiceLineItem
 */
export interface InvoiceLineItem {
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof InvoiceLineItem
     */
    remote_id?: string | null;
    /**
     * The line item's description.
     * @type {string}
     * @memberof InvoiceLineItem
     */
    description?: string | null;
    /**
     * The line item's unit price.
     * @type {number}
     * @memberof InvoiceLineItem
     */
    unit_price?: number | null;
    /**
     * The line item's quantity.
     * @type {number}
     * @memberof InvoiceLineItem
     */
    quantity?: number | null;
    /**
     * The line item's total amount.
     * @type {number}
     * @memberof InvoiceLineItem
     */
    total_amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    item?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    account?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    tracking_category?: string | null;
}

export function InvoiceLineItemFromJSON(json: JSONValue): InvoiceLineItem | null {
    return InvoiceLineItemFromJSONTyped(json);
}

export function InvoiceLineItemFromJSONTyped(json: JSONValue): InvoiceLineItem | null {
    if ((json === undefined) || (json === null)) {
        return null;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'unit_price': !exists(json, 'unit_price') ? undefined : json['unit_price'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'item': !exists(json, 'item') ? undefined : json['item'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'tracking_category': !exists(json, 'tracking_category') ? undefined : json['tracking_category'],
    };
}

export function InvoiceLineItemToJSON(value?: InvoiceLineItem): JSONValue {
    if (value === undefined || value === null) {
        return null;
    }

    return {
        
        'remote_id': value.remote_id,
        'description': value.description,
        'unit_price': value.unit_price,
        'quantity': value.quantity,
        'total_amount': value.total_amount,
        'item': value.item,
        'account': value.account,
        'tracking_category': value.tracking_category,
    };
}

