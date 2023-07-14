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
    AccessLevelEnum,
    AccessLevelEnumFromJSON,
    AccessLevelEnumFromJSONTyped,
    AccessLevelEnumToJSON,
    CollectionTypeEnum,
    CollectionTypeEnumFromJSON,
    CollectionTypeEnumFromJSONTyped,
    CollectionTypeEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Collection Object
 * ### Description
 * The `Collection` object is used to represent collections of tickets. Collections may include other collections as
 * sub collections.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Collection
     */
    remote_id?: string | null;
    /**
     * The collection's name.
     * @type {string}
     * @memberof Collection
     */
    name?: string | null;
    /**
     * The collection's description.
     * @type {string}
     * @memberof Collection
     */
    description?: string | null;
    /**
     * The collection's type.
     * 
     * * `LIST` - LIST
     * * `PROJECT` - PROJECT
     * @type {CollectionTypeEnum}
     * @memberof Collection
     */
    collection_type?: CollectionTypeEnum | null;
    /**
     * The parent collection for this collection.
     * @type {string}
     * @memberof Collection
     */
    parent_collection?: string | JSONValue | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Collection
     */
    remote_was_deleted?: boolean;
    /**
     * The level of access a User has to the Collection and its sub-objects.
     * 
     * * `PRIVATE` - PRIVATE
     * * `COMPANY` - COMPANY
     * * `PUBLIC` - PUBLIC
     * @type {AccessLevelEnum}
     * @memberof Collection
     */
    access_level?: AccessLevelEnum | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Collection
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Collection
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Collection
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function CollectionFromJSON(json: JSONValue): Collection | undefined {
    return CollectionFromJSONTyped(json);
}

export function CollectionFromJSONTyped(json: JSONValue): Collection | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'collection_type': !exists(json, 'collection_type') ? undefined : CollectionTypeEnumFromJSON(json['collection_type']) as CollectionTypeEnum,
        'parent_collection': !exists(json, 'parent_collection') ? undefined : json['parent_collection'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'access_level': !exists(json, 'access_level') ? undefined : AccessLevelEnumFromJSON(json['access_level']) as AccessLevelEnum,
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function CollectionToJSON(value?: Collection): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'description': value.description,
        'collection_type': CollectionTypeEnumToJSON(value.collection_type),
        'parent_collection': value.parent_collection,
        'remote_was_deleted': value.remote_was_deleted,
        'access_level': AccessLevelEnumToJSON(value.access_level),
    };
}

