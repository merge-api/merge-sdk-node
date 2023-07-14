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
    EmailAddressRequest,
    EmailAddressRequestFromJSON,
    EmailAddressRequestFromJSONTyped,
    EmailAddressRequestToJSON,
    PhoneNumberRequest,
    PhoneNumberRequestFromJSON,
    PhoneNumberRequestFromJSONTyped,
    PhoneNumberRequestToJSON,
    UrlRequest,
    UrlRequestFromJSON,
    UrlRequestFromJSONTyped,
    UrlRequestToJSON,
} from './';


/**
 * # The Candidate Object
 * ### Description
 * The `Candidate` object is used to represent profile information about a given Candidate. Because it is specific to a Candidate, this information stays constant across applications.
 * ### Usage Example
 * Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates.
 * @export
 * @interface PatchedCandidateRequest
 */
export interface PatchedCandidateRequest {
    /**
     * The candidate's first name.
     * @type {string}
     * @memberof PatchedCandidateRequest
     */
    first_name?: string | null;
    /**
     * The candidate's last name.
     * @type {string}
     * @memberof PatchedCandidateRequest
     */
    last_name?: string | null;
    /**
     * The candidate's current company.
     * @type {string}
     * @memberof PatchedCandidateRequest
     */
    company?: string | null;
    /**
     * The candidate's current title.
     * @type {string}
     * @memberof PatchedCandidateRequest
     */
    title?: string | null;
    /**
     * When the most recent interaction with the candidate occurred.
     * @type {Date}
     * @memberof PatchedCandidateRequest
     */
    last_interaction_at?: Date | null;
    /**
     * Whether or not the candidate is private.
     * @type {boolean}
     * @memberof PatchedCandidateRequest
     */
    is_private?: boolean | null;
    /**
     * Whether or not the candidate can be emailed.
     * @type {boolean}
     * @memberof PatchedCandidateRequest
     */
    can_email?: boolean | null;
    /**
     * The candidate's locations.
     * @type {Array<string>}
     * @memberof PatchedCandidateRequest
     */
    locations?: Array<string> | null;
    /**
     * 
     * @type {Array<PhoneNumberRequest>}
     * @memberof PatchedCandidateRequest
     */
    phone_numbers?: Array<PhoneNumberRequest>;
    /**
     * 
     * @type {Array<EmailAddressRequest>}
     * @memberof PatchedCandidateRequest
     */
    email_addresses?: Array<EmailAddressRequest>;
    /**
     * 
     * @type {Array<UrlRequest>}
     * @memberof PatchedCandidateRequest
     */
    urls?: Array<UrlRequest>;
    /**
     * Array of `Tag` names as strings.
     * @type {Array<string>}
     * @memberof PatchedCandidateRequest
     */
    tags?: Array<string>;
    /**
     * Array of `Application` object IDs.
     * @type {Array<string>}
     * @memberof PatchedCandidateRequest
     */
    applications?: Array<string>;
    /**
     * Array of `Attachment` object IDs.
     * @type {Array<string>}
     * @memberof PatchedCandidateRequest
     */
    attachments?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PatchedCandidateRequest
     */
    remote_template_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedCandidateRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedCandidateRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function PatchedCandidateRequestFromJSON(json: JSONValue): PatchedCandidateRequest | undefined {
    return PatchedCandidateRequestFromJSONTyped(json);
}

export function PatchedCandidateRequestFromJSONTyped(json: JSONValue): PatchedCandidateRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'last_interaction_at': !exists(json, 'last_interaction_at') ? undefined : (json['last_interaction_at'] === null ? null : new Date(json['last_interaction_at'])),
        'is_private': !exists(json, 'is_private') ? undefined : json['is_private'],
        'can_email': !exists(json, 'can_email') ? undefined : json['can_email'],
        'locations': !exists(json, 'locations') ? undefined : json['locations'],
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberRequestFromJSON)) as Array<PhoneNumberRequest>,
        'email_addresses': !exists(json, 'email_addresses') ? undefined : ((json['email_addresses'] as Array<JSONValue>).map(EmailAddressRequestFromJSON)) as Array<EmailAddressRequest>,
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<JSONValue>).map(UrlRequestFromJSON)) as Array<UrlRequest>,
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'applications': !exists(json, 'applications') ? undefined : json['applications'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'remote_template_id': !exists(json, 'remote_template_id') ? undefined : json['remote_template_id'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function PatchedCandidateRequestToJSON(value?: PatchedCandidateRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'first_name': value.first_name,
        'last_name': value.last_name,
        'company': value.company,
        'title': value.title,
        'last_interaction_at': value.last_interaction_at === undefined ? undefined : (value.last_interaction_at === null ? null : value.last_interaction_at.toISOString()),
        'is_private': value.is_private,
        'can_email': value.can_email,
        'locations': value.locations,
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(PhoneNumberRequestToJSON)),
        'email_addresses': value.email_addresses === undefined ? undefined : ((value.email_addresses as Array<any>).map(EmailAddressRequestToJSON)),
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(UrlRequestToJSON)),
        'tags': value.tags,
        'applications': value.applications,
        'attachments': value.attachments,
        'remote_template_id': value.remote_template_id,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

