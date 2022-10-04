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
    OpportunityStatusEnum,
    OpportunityStatusEnumFromJSON,
    OpportunityStatusEnumFromJSONTyped,
    OpportunityStatusEnumToJSON,
} from './';


/**
 * # The Opportunity Object
 * ### Description
 * The `Opportunity` object is used to represent an opportunity in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface PatchedOpportunityRequest
 */
export interface PatchedOpportunityRequest {
    /**
     * The opportunity's name.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    name?: string | null;
    /**
     * The opportunity's description.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    description?: string | null;
    /**
     * The opportunity's amount.
     * @type {number}
     * @memberof PatchedOpportunityRequest
     */
    amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    owner?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    account?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    stage?: string | null;
    /**
     * The opportunity's status.
     * @type {OpportunityStatusEnum}
     * @memberof PatchedOpportunityRequest
     */
    status?: OpportunityStatusEnum | null;
    /**
     * When the opportunity's last activity occurred.
     * @type {Date}
     * @memberof PatchedOpportunityRequest
     */
    last_activity_at?: Date | null;
    /**
     * When the opportunity was closed.
     * @type {Date}
     * @memberof PatchedOpportunityRequest
     */
    close_date?: Date | null;
    /**
     * When the third party's opportunity was created.
     * @type {Date}
     * @memberof PatchedOpportunityRequest
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedOpportunityRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedOpportunityRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function PatchedOpportunityRequestFromJSON(json: JSONValue): PatchedOpportunityRequest | undefined {
    return PatchedOpportunityRequestFromJSONTyped(json);
}

export function PatchedOpportunityRequestFromJSONTyped(json: JSONValue): PatchedOpportunityRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'status': !exists(json, 'status') ? undefined : OpportunityStatusEnumFromJSON(json['status']) as OpportunityStatusEnum,
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'close_date': !exists(json, 'close_date') ? undefined : (json['close_date'] === null ? null : new Date(json['close_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function PatchedOpportunityRequestToJSON(value?: PatchedOpportunityRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'description': value.description,
        'amount': value.amount,
        'owner': value.owner,
        'account': value.account,
        'stage': value.stage,
        'status': OpportunityStatusEnumToJSON(value.status),
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'close_date': value.close_date === undefined ? undefined : (value.close_date === null ? null : value.close_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

