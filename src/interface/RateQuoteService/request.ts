import { EPropertyType, EOccupancyType } from "../../enum";

/**
 * @author Russell Howell
 * @created Dec 15
 *
 * @description Interfaces describing query data for rate quote services 
 * 
 */

 /** 
  * @description data required to make a rate quote service request 
  */
 
 export interface IRateQuoteQuery { 
    loanSize: number,
    creditScore:number
    propertyType: EPropertyType,
    occupancy: EOccupancyType
}