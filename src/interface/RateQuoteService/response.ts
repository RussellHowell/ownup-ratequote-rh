/**
 * @author Russell Howell
 * @created Dec 15
 *
 * @description Interfaces describing the shape of data returned from rate quote services 
 * 
 */

export interface IRateQuoteResponse {
    rateQuotes: ISingleRateQuote[];
  }
  
export interface ISingleRateQuote {
    lenderName: string;
    loanType: string;
    interestRate: number;
    closingCosts: number;
    monthlyPayment: number;
    apr: number;
  }