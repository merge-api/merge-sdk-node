/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    
    RequestTypeEnum,
    RequestTypeEnumFromJSON,
    RequestTypeEnumFromJSONTyped,
    RequestTypeEnumToJSON,
    TimeOffStatusEnum,
    TimeOffStatusEnumFromJSON,
    TimeOffStatusEnumFromJSONTyped,
    TimeOffStatusEnumToJSON,
    UnitsEnum,
    UnitsEnumFromJSON,
    UnitsEnumFromJSONTyped,
    UnitsEnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The TimeOff Object
 * ### Description
 * The `TimeOff` object is used to represent all employees' Time Off entries.
 * 
 * ### Usage Example
 * Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests.
 * @export
 * @interface TimeOff
 */
export interface TimeOff {
    /**
     * 
     * @type {string}
     * @memberof TimeOff
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TimeOff
     */
    remote_id?: string | null;
    /**
     * The employee requesting time off.
     * @type {string}
     * @memberof TimeOff
     */
    employee?: string | JSONValue | null;
    /**
     * The Merge ID of the employee with the ability to approve the time off request.
     * @type {string}
     * @memberof TimeOff
     */
    approver?: string | JSONValue | null;
    /**
     * The status of this time off request.
     * 
     * * `REQUESTED` - REQUESTED
     * * `APPROVED` - APPROVED
     * * `DECLINED` - DECLINED
     * * `CANCELLED` - CANCELLED
     * * `DELETED` - DELETED
     * @type {TimeOffStatusEnum}
     * @memberof TimeOff
     */
    status?: TimeOffStatusEnum | null;
    /**
     * The employee note for this time off request.
     * @type {string}
     * @memberof TimeOff
     */
    employee_note?: string | null;
    /**
     * The measurement that the third-party integration uses to count time requested.
     * 
     * * `HOURS` - HOURS
     * * `DAYS` - DAYS
     * @type {UnitsEnum}
     * @memberof TimeOff
     */
    units?: UnitsEnum | null;
    /**
     * The time off quantity measured by the prescribed “units”.
     * @type {number}
     * @memberof TimeOff
     */
    amount?: number | null;
    /**
     * The type of time off request.
     * 
     * * `VACATION` - VACATION
     * * `SICK` - SICK
     * * `PERSONAL` - PERSONAL
     * * `JURY_DUTY` - JURY_DUTY
     * * `VOLUNTEER` - VOLUNTEER
     * * `BEREAVEMENT` - BEREAVEMENT
     * @type {RequestTypeEnum}
     * @memberof TimeOff
     */
    request_type?: RequestTypeEnum | null;
    /**
     * The day and time of the start of the time requested off.
     * @type {Date}
     * @memberof TimeOff
     */
    start_time?: Date | null;
    /**
     * The day and time of the end of the time requested off.
     * @type {Date}
     * @memberof TimeOff
     */
    end_time?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOff
     */
    readonly remote_was_deleted?: boolean;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof TimeOff
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimeOff
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof TimeOff
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function TimeOffFromJSON(json: JSONValue): TimeOff | undefined {
    return TimeOffFromJSONTyped(json);
}

export function TimeOffFromJSONTyped(json: JSONValue): TimeOff | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'approver': !exists(json, 'approver') ? undefined : json['approver'],
        'status': !exists(json, 'status') ? undefined : TimeOffStatusEnumFromJSON(json['status']) as TimeOffStatusEnum,
        'employee_note': !exists(json, 'employee_note') ? undefined : json['employee_note'],
        'units': !exists(json, 'units') ? undefined : UnitsEnumFromJSON(json['units']) as UnitsEnum,
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'request_type': !exists(json, 'request_type') ? undefined : RequestTypeEnumFromJSON(json['request_type']) as RequestTypeEnum,
        'start_time': !exists(json, 'start_time') ? undefined : (json['start_time'] === null ? null : new Date(json['start_time'])),
        'end_time': !exists(json, 'end_time') ? undefined : (json['end_time'] === null ? null : new Date(json['end_time'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function TimeOffToJSON(value?: TimeOff): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'approver': value.approver,
        'status': TimeOffStatusEnumToJSON(value.status),
        'employee_note': value.employee_note,
        'units': UnitsEnumToJSON(value.units),
        'amount': value.amount,
        'request_type': RequestTypeEnumToJSON(value.request_type),
        'start_time': value.start_time === undefined ? undefined : (value.start_time === null ? null : value.start_time.toISOString()),
        'end_time': value.end_time === undefined ? undefined : (value.end_time === null ? null : value.end_time.toISOString()),
    };
}

