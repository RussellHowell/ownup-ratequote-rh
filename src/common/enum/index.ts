/**
 * @author Russell Howell
 * @created Dec 15
 *
 * @description This file indexes enums used in the application 
 * 
 */

export enum EPropertyType {
     SINGLE_FAMILY = "SingleFamily",
     CONDO = "Condo",
     TOWNHOUSE = "Townhouse",
     MULTI_FAMILY = "MultiFamily"
 } 

export enum EOccupancyType {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    INVESTMENT = "Investment"
}

export enum EServiceRequestProgress { 
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCESSFUL = "SUCCESSFUL",
    FAILURE = "FAILURE"
}