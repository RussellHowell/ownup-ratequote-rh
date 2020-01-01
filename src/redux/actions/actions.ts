/**
 * @author Russell Howell    
 * 
 * @description Application action type enums and corresponding action creators 
 * 
 */

import { IRateQuoteServiceQuery, IRateQuoteServiceResponse } from "../../rate-quote";
import { IReduxAction } from "../../common";
import * as _ from 'lodash'; 

const shortid = require( 'shortid' );

 export enum EActionTypes {
     RATE_QUOTE_REQUEST = "RATE_QUOTE_REQUEST",
     RATE_QUOTE_REQUEST_SUCCESS = "RATE_QUOTE_REQUEST_SUCCESS",
     RATE_QUOTE_REQUEST_FAILURE = "RATE_QUOTE_REQUEST_FAILURE",
     RATE_QUOTE_RESULTS_UPDATE_ALL = "RATE_QUOTE_RESULTS_UPDATE",
     RATE_QUOTE_RESULTS_ADD_SINGLE = "RATE_QUOTE_RESULTS_ADD_SINGLE",
     RATE_QUOTE_RESULTS_UPDATE_SINGLE = "RATE_QUOTE_RESULTS_UPDATE_SINGLE",
     RATE_QUOTE_RESULTS_REMOVE_SINGLE = "RATE_QUOTE_RESULTS_REMOVE_SINGLE"
}

/** 
 * Returns action that when dispatched should trigger a request to a rate quote REST service
 * 
 * @payloadId optional param, this id will be assigned to corresponding output 
 * useful for cases wherein it would be useful to assign an id to the request so that
 * the result can mapped back to the request. This action creator will assign an id if 
 * none is provided  
 * 
 *  */
export const onRateQuoteRequest = ( query: IRateQuoteServiceQuery, payloadId?: string  ): 
    IReduxAction<EActionTypes, {id:string, content: IRateQuoteServiceQuery}>  => {
        return {
            action: EActionTypes.RATE_QUOTE_REQUEST,
            payload: {
                id: _.isUndefined( payloadId ) ? shortid.generate() : payloadId,
                content: query
            }
        }
}

/** Action creator that should be utilized when a list of rate quotes is successfully retrieved from a service endpoint */
export const onRateQuoteRequestSuccess = ( result: {id: string, content: IRateQuoteServiceResponse} ): 
    IReduxAction<EActionTypes, {id: string, content: IRateQuoteServiceResponse}> => {
        return {
            action: EActionTypes.RATE_QUOTE_REQUEST_SUCCESS,
            payload: result
        }
} 