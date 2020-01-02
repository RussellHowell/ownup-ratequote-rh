import { IRateQuoteServiceResponse } from "../../rate-quote";
import { IReduxAction } from '../../common';
import { EActionTypes } from "../actions";

/**
 * @author Russell Howell
 * 
 * @description reducer to help manage rate-quote related state
 */

 export interface IRateQuoteReducer extends IRateQuoteServiceResponse {
 }  

/* helper interface: collates all possible action types & action content */
 interface IRateQuoteReducerAction extends IReduxAction<EActionTypes, { id: string, content: IRateQuoteServiceResponse }> {
 }

 const initialState: IRateQuoteReducer = {
     rateQuotes: []
 }

 export const rateQuoteReducer = ( state: IRateQuoteReducer = initialState, action: IRateQuoteReducerAction ): IRateQuoteReducer => {
    switch( action.type ) {
        case EActionTypes.RATE_QUOTE_REQUEST_SUCCESS: 
            return {
                ...state,
                rateQuotes: action.payload.content.rateQuotes
            }
        case EActionTypes.RATE_QUOTE_REQUEST: 
            return {
                ...state,
                rateQuotes: []
            }
        default:
            return state;
    }
 }