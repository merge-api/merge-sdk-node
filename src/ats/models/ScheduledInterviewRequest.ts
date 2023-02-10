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
    ScheduledInterviewStatusEnum,
    ScheduledInterviewStatusEnumFromJSON,
    ScheduledInterviewStatusEnumFromJSONTyped,
    ScheduledInterviewStatusEnumToJSON,
} from './';


/**
 * # The ScheduledInterview Object
 * ### Description
 * The `ScheduledInterview` object is used to represent a scheduled interview for a given candidate’s application to a job. An `Application` can have multiple `ScheduledInterview`s depending on the particular hiring process.
 * ### Usage Example
 * Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations.
 * @export
 * @interface ScheduledInterviewRequest
 */
export interface ScheduledInterviewRequest {
    /**
     * The application being interviewed.
     * @type {string}
     * @memberof ScheduledInterviewRequest
     */
    application?: string | JSONValue | null;
    /**
     * The stage of the interview.
     * @type {string}
     * @memberof ScheduledInterviewRequest
     */
    job_interview_stage?: string | JSONValue | null;
    /**
     * The user organizing the interview.
     * @type {string}
     * @memberof ScheduledInterviewRequest
     */
    organizer?: string | JSONValue | null;
    /**
     * Array of `RemoteUser` IDs.
     * @type {Array<string>}
     * @memberof ScheduledInterviewRequest
     */
    interviewers?: Array<string> | JSONValue;
    /**
     * The interview's location.
     * @type {string}
     * @memberof ScheduledInterviewRequest
     */
    location?: string | null;
    /**
     * When the interview was started.
     * @type {Date}
     * @memberof ScheduledInterviewRequest
     */
    start_at?: Date | null;
    /**
     * When the interview was ended.
     * @type {Date}
     * @memberof ScheduledInterviewRequest
     */
    end_at?: Date | null;
    /**
     * The interview's status.
     * @type {ScheduledInterviewStatusEnum}
     * @memberof ScheduledInterviewRequest
     */
    status?: ScheduledInterviewStatusEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ScheduledInterviewRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ScheduledInterviewRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function ScheduledInterviewRequestFromJSON(json: JSONValue): ScheduledInterviewRequest | undefined {
    return ScheduledInterviewRequestFromJSONTyped(json);
}

export function ScheduledInterviewRequestFromJSONTyped(json: JSONValue): ScheduledInterviewRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'application': !exists(json, 'application') ? undefined : json['application'],
        'job_interview_stage': !exists(json, 'job_interview_stage') ? undefined : json['job_interview_stage'],
        'organizer': !exists(json, 'organizer') ? undefined : json['organizer'],
        'interviewers': !exists(json, 'interviewers') ? undefined : json['interviewers'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'start_at': !exists(json, 'start_at') ? undefined : (json['start_at'] === null ? null : new Date(json['start_at'])),
        'end_at': !exists(json, 'end_at') ? undefined : (json['end_at'] === null ? null : new Date(json['end_at'])),
        'status': !exists(json, 'status') ? undefined : ScheduledInterviewStatusEnumFromJSON(json['status']) as ScheduledInterviewStatusEnum,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ScheduledInterviewRequestToJSON(value?: ScheduledInterviewRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'application': value.application,
        'job_interview_stage': value.job_interview_stage,
        'organizer': value.organizer,
        'interviewers': value.interviewers,
        'location': value.location,
        'start_at': value.start_at === undefined ? undefined : (value.start_at === null ? null : value.start_at.toISOString()),
        'end_at': value.end_at === undefined ? undefined : (value.end_at === null ? null : value.end_at.toISOString()),
        'status': ScheduledInterviewStatusEnumToJSON(value.status),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}
