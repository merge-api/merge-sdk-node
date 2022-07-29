/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    DisabilityStatusEnum,
    DisabilityStatusEnumFromJSON,
    DisabilityStatusEnumFromJSONTyped,
    DisabilityStatusEnumToJSON,
    GenderEnum,
    GenderEnumFromJSON,
    GenderEnumFromJSONTyped,
    GenderEnumToJSON,
    RaceEnum,
    RaceEnumFromJSON,
    RaceEnumFromJSONTyped,
    RaceEnumToJSON,
    
    VeteranStatusEnum,
    VeteranStatusEnumFromJSON,
    VeteranStatusEnumFromJSONTyped,
    VeteranStatusEnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The EEOC Object
 * ### Description
 * The `EEOC` object is used to represent the Equal Employment Opportunity Commission information for a candidate.
 * ### Usage Example
 * Fetch from the `LIST EEOCs` endpoint and filter by `candidate` to show all EEOC information for a candidate.
 * @export
 * @interface EEOC
 */
export interface EEOC {
    /**
     * 
     * @type {string}
     * @memberof EEOC
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof EEOC
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EEOC
     */
    candidate?: string | null;
    /**
     * When the information was submitted.
     * @type {Date}
     * @memberof EEOC
     */
    submitted_at?: Date | null;
    /**
     * The candidate's race.
     * @type {RaceEnum}
     * @memberof EEOC
     */
    race?: RaceEnum | null;
    /**
     * The candidate's gender.
     * @type {GenderEnum}
     * @memberof EEOC
     */
    gender?: GenderEnum | null;
    /**
     * The candidate's veteran status.
     * @type {VeteranStatusEnum}
     * @memberof EEOC
     */
    veteran_status?: VeteranStatusEnum | null;
    /**
     * The candidate's disability status.
     * @type {DisabilityStatusEnum}
     * @memberof EEOC
     */
    disability_status?: DisabilityStatusEnum | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof EEOC
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof EEOC
     */
    readonly remote_was_deleted?: boolean;
}

export function EEOCFromJSON(json: JSONValue): EEOC | undefined {
    return EEOCFromJSONTyped(json);
}

export function EEOCFromJSONTyped(json: JSONValue): EEOC | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'candidate': !exists(json, 'candidate') ? undefined : json['candidate'],
        'submitted_at': !exists(json, 'submitted_at') ? undefined : (json['submitted_at'] === null ? null : new Date(json['submitted_at'])),
        'race': !exists(json, 'race') ? undefined : RaceEnumFromJSON(json['race']) as RaceEnum,
        'gender': !exists(json, 'gender') ? undefined : GenderEnumFromJSON(json['gender']) as GenderEnum,
        'veteran_status': !exists(json, 'veteran_status') ? undefined : VeteranStatusEnumFromJSON(json['veteran_status']) as VeteranStatusEnum,
        'disability_status': !exists(json, 'disability_status') ? undefined : DisabilityStatusEnumFromJSON(json['disability_status']) as DisabilityStatusEnum,
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function EEOCToJSON(value?: EEOC): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'candidate': value.candidate,
        'submitted_at': value.submitted_at === undefined ? undefined : (value.submitted_at === null ? null : value.submitted_at.toISOString()),
        'race': RaceEnumToJSON(value.race),
        'gender': GenderEnumToJSON(value.gender),
        'veteran_status': VeteranStatusEnumToJSON(value.veteran_status),
        'disability_status': DisabilityStatusEnumToJSON(value.disability_status),
    };
}

