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
    AccountingAttachment,
    AccountingAttachmentFromJSON,
    AccountingAttachmentFromJSONTyped,
    AccountingAttachmentToJSON,
    DebugModeLog,
    DebugModeLogFromJSON,
    DebugModeLogFromJSONTyped,
    DebugModeLogToJSON,
    ErrorValidationProblem,
    ErrorValidationProblemFromJSON,
    ErrorValidationProblemFromJSONTyped,
    ErrorValidationProblemToJSON,
    WarningValidationProblem,
    WarningValidationProblemFromJSON,
    WarningValidationProblemFromJSONTyped,
    WarningValidationProblemToJSON,
} from './';


/**
 * 
 * @export
 * @interface AccountingAttachmentResponse
 */
export interface AccountingAttachmentResponse {
    /**
     * 
     * @type {AccountingAttachment}
     * @memberof AccountingAttachmentResponse
     */
    model: AccountingAttachment;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof AccountingAttachmentResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof AccountingAttachmentResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof AccountingAttachmentResponse
     */
    logs?: Array<DebugModeLog>;
}

export function AccountingAttachmentResponseFromJSON(json: JSONValue): AccountingAttachmentResponse | undefined {
    return AccountingAttachmentResponseFromJSONTyped(json);
}

export function AccountingAttachmentResponseFromJSONTyped(json: JSONValue): AccountingAttachmentResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': AccountingAttachmentFromJSON(json['model']) as AccountingAttachment,
        'warnings': ((json['warnings'] as Array<JSONValue>).map(WarningValidationProblemFromJSON)) as Array<WarningValidationProblem>,
        'errors': ((json['errors'] as Array<JSONValue>).map(ErrorValidationProblemFromJSON)) as Array<ErrorValidationProblem>,
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<JSONValue>).map(DebugModeLogFromJSON)) as Array<DebugModeLog>,
    };
}

export function AccountingAttachmentResponseToJSON(value?: AccountingAttachmentResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': AccountingAttachmentToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}
