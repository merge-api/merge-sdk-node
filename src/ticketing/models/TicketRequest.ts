/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    PriorityEnum,
    PriorityEnumFromJSON,
    PriorityEnumFromJSONTyped,
    PriorityEnumToJSON,
    TicketStatusEnum,
    TicketStatusEnumFromJSON,
    TicketStatusEnumFromJSONTyped,
    TicketStatusEnumToJSON,
} from './';


/**
 * # The Ticket Object
 * ### Description
 * The `Ticket` object is used to represent a ticket or a task within a system.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface TicketRequest
 */
export interface TicketRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TicketRequest
     */
    remote_id?: string | null;
    /**
     * The ticket's name.
     * @type {string}
     * @memberof TicketRequest
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TicketRequest
     */
    assignees?: Array<string> | JSONValue;
    /**
     * The user who created this ticket.
     * @type {string}
     * @memberof TicketRequest
     */
    creator?: string | JSONValue | null;
    /**
     * The ticket's due date.
     * @type {Date}
     * @memberof TicketRequest
     */
    due_date?: Date | null;
    /**
     * The current status of the ticket.
     * @type {TicketStatusEnum}
     * @memberof TicketRequest
     */
    status?: TicketStatusEnum | null;
    /**
     * The ticket’s description. HTML version of description is mapped if supported by the third-party platform.
     * @type {string}
     * @memberof TicketRequest
     */
    description?: string | null;
    /**
     * The project the ticket belongs to.
     * @type {string}
     * @memberof TicketRequest
     */
    project?: string | JSONValue | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TicketRequest
     */
    collections?: Array<string> | JSONValue;
    /**
     * The ticket's type.
     * @type {string}
     * @memberof TicketRequest
     */
    ticket_type?: string | null;
    /**
     * The account associated with the ticket.
     * @type {string}
     * @memberof TicketRequest
     */
    account?: string | JSONValue | null;
    /**
     * The contact associated with the ticket.
     * @type {string}
     * @memberof TicketRequest
     */
    contact?: string | JSONValue | null;
    /**
     * The ticket's parent ticket.
     * @type {string}
     * @memberof TicketRequest
     */
    parent_ticket?: string | JSONValue | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TicketRequest
     */
    attachments?: Array<string> | JSONValue;
    /**
     * 
     * @type {Array<string>}
     * @memberof TicketRequest
     */
    tags?: Array<string>;
    /**
     * When the third party's ticket was created.
     * @type {Date}
     * @memberof TicketRequest
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's ticket was updated.
     * @type {Date}
     * @memberof TicketRequest
     */
    remote_updated_at?: Date | null;
    /**
     * When the ticket was completed.
     * @type {Date}
     * @memberof TicketRequest
     */
    completed_at?: Date | null;
    /**
     * The 3rd party url of the Ticket.
     * @type {string}
     * @memberof TicketRequest
     */
    ticket_url?: string | null;
    /**
     * The priority or urgency of the Ticket. Possible values include: URGENT, HIGH, NORMAL, LOW - in cases where there is no clear mapping - the original value passed through.
     * @type {PriorityEnum}
     * @memberof TicketRequest
     */
    priority?: PriorityEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TicketRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TicketRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function TicketRequestFromJSON(json: JSONValue): TicketRequest | undefined {
    return TicketRequestFromJSONTyped(json);
}

export function TicketRequestFromJSONTyped(json: JSONValue): TicketRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'assignees': !exists(json, 'assignees') ? undefined : json['assignees'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'status': !exists(json, 'status') ? undefined : TicketStatusEnumFromJSON(json['status']) as TicketStatusEnum,
        'description': !exists(json, 'description') ? undefined : json['description'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'collections': !exists(json, 'collections') ? undefined : json['collections'],
        'ticket_type': !exists(json, 'ticket_type') ? undefined : json['ticket_type'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'parent_ticket': !exists(json, 'parent_ticket') ? undefined : json['parent_ticket'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'completed_at': !exists(json, 'completed_at') ? undefined : (json['completed_at'] === null ? null : new Date(json['completed_at'])),
        'ticket_url': !exists(json, 'ticket_url') ? undefined : json['ticket_url'],
        'priority': !exists(json, 'priority') ? undefined : PriorityEnumFromJSON(json['priority']) as PriorityEnum,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function TicketRequestToJSON(value?: TicketRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'assignees': value.assignees,
        'creator': value.creator,
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'status': TicketStatusEnumToJSON(value.status),
        'description': value.description,
        'project': value.project,
        'collections': value.collections,
        'ticket_type': value.ticket_type,
        'account': value.account,
        'contact': value.contact,
        'parent_ticket': value.parent_ticket,
        'attachments': value.attachments,
        'tags': value.tags,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'completed_at': value.completed_at === undefined ? undefined : (value.completed_at === null ? null : value.completed_at.toISOString()),
        'ticket_url': value.ticket_url,
        'priority': PriorityEnumToJSON(value.priority),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

