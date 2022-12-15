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
    LinkedAccountConditionRequest,
    LinkedAccountConditionRequestFromJSON,
    LinkedAccountConditionRequestFromJSONTyped,
    LinkedAccountConditionRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface LinkedAccountSelectiveSyncConfigurationRequest
 */
export interface LinkedAccountSelectiveSyncConfigurationRequest {
    /**
     * The conditions belonging to a selective sync.
     * @type {Array<LinkedAccountConditionRequest>}
     * @memberof LinkedAccountSelectiveSyncConfigurationRequest
     */
    linked_account_conditions: Array<LinkedAccountConditionRequest>;
}

export function LinkedAccountSelectiveSyncConfigurationRequestFromJSON(json: JSONValue): LinkedAccountSelectiveSyncConfigurationRequest | undefined {
    return LinkedAccountSelectiveSyncConfigurationRequestFromJSONTyped(json);
}

export function LinkedAccountSelectiveSyncConfigurationRequestFromJSONTyped(json: JSONValue): LinkedAccountSelectiveSyncConfigurationRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'linked_account_conditions': ((json['linked_account_conditions'] as Array<JSONValue>).map(LinkedAccountConditionRequestFromJSON)) as Array<LinkedAccountConditionRequest>,
    };
}

export function LinkedAccountSelectiveSyncConfigurationRequestToJSON(value?: LinkedAccountSelectiveSyncConfigurationRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'linked_account_conditions': ((value.linked_account_conditions as Array<any>).map(LinkedAccountConditionRequestToJSON)),
    };
}
