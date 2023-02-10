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
    CategoriesEnum,
    CategoriesEnumFromJSON,
    CategoriesEnumFromJSONTyped,
    CategoriesEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface EndUserDetailsRequest
 */
export interface EndUserDetailsRequest {
    /**
     * Your end user's email address. This is purely for identification purposes - setting this value will not cause any emails to be sent.
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_email_address: string;
    /**
     * Your end user's organization.
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_organization_name: string;
    /**
     * This unique identifier typically represents the ID for your end user in your product's database. This value must be distinct from other Linked Accounts' unique identifiers.
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_origin_id: string;
    /**
     * The integration categories to show in Merge Link.
     * @type {Array<CategoriesEnum>}
     * @memberof EndUserDetailsRequest
     */
    categories: Array<CategoriesEnum>;
    /**
     * The slug of a specific pre-selected integration for this linking flow token. For examples of slugs, see https://www.merge.dev/docs/basics/integration-metadata/.
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    integration?: string | null;
    /**
     * An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30.
     * @type {number}
     * @memberof EndUserDetailsRequest
     */
    link_expiry_mins?: number;
    /**
     * Whether to generate a Magic Link URL. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/product/integrations,-fast.-say-hello-to-magic-link/.
     * @type {boolean}
     * @memberof EndUserDetailsRequest
     */
    should_create_magic_link_url?: boolean | null;
    /**
     * An array of objects to specify the models and fields that will be disabled for a given Linked Account. Each object uses model_id, enabled_actions, and disabled_fields to specify the model, method, and fields that are scoped for a given Linked Account.
     * @type {{ [key: string]: any; }}
     * @memberof EndUserDetailsRequest
     */
    common_models?: { [key: string]: any; } | null;
}

export function EndUserDetailsRequestFromJSON(json: JSONValue): EndUserDetailsRequest | undefined {
    return EndUserDetailsRequestFromJSONTyped(json);
}

export function EndUserDetailsRequestFromJSONTyped(json: JSONValue): EndUserDetailsRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'end_user_email_address': json['end_user_email_address'],
        'end_user_organization_name': json['end_user_organization_name'],
        'end_user_origin_id': json['end_user_origin_id'],
        'categories': ((json['categories'] as Array<JSONValue>).map(CategoriesEnumFromJSON)) as Array<CategoriesEnum>,
        'integration': !exists(json, 'integration') ? undefined : json['integration'],
        'link_expiry_mins': !exists(json, 'link_expiry_mins') ? undefined : json['link_expiry_mins'],
        'should_create_magic_link_url': !exists(json, 'should_create_magic_link_url') ? undefined : json['should_create_magic_link_url'],
        'common_models': !exists(json, 'common_models') ? undefined : json['common_models'],
    };
}

export function EndUserDetailsRequestToJSON(value?: EndUserDetailsRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'end_user_email_address': value.end_user_email_address,
        'end_user_organization_name': value.end_user_organization_name,
        'end_user_origin_id': value.end_user_origin_id,
        'categories': ((value.categories as Array<any>).map(CategoriesEnumToJSON)),
        'integration': value.integration,
        'link_expiry_mins': value.link_expiry_mins,
        'should_create_magic_link_url': value.should_create_magic_link_url,
        'common_models': value.common_models,
    };
}

