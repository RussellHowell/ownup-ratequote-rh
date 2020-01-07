import { EPropertyType, EOccupancyType } from '../../common';

/** 
 *  @author Russell Howell
 * 
 * Interfaces specific to the rate-quote ui module
 * 
 */

 /** A query to request a mortgage rate quote */
 export interface IRateQuoteServiceQuery { 
    loanSize: number,
    creditScore:number
    propertyType: EPropertyType,
    occupancy: EOccupancyType
}

/** Root response object from the rate quote service */
export interface IRateQuoteServiceResponse {
    rateQuotes: IRateQuote[];
  }
  
/** A single mortgage rate quote */
export interface IRateQuote {
    lenderName: string;
    loanType: string;
    interestRate: number;
    closingCosts: number;
    monthlyPayment: number;
    apr: number;
  }