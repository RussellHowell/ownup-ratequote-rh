import { IServiceRequestMetaData, IReduxAction, EServiceRequestProgress } from "../../common";
import { IRateQuoteServiceQuery, IRateQuoteServiceResponse } from '../../rate-quote';
import { EActionTypes } from '../actions/actions';

/** 
 * @author Russell Howell
 * 
 * @description Reducer to manage service request related metadata and errors
 */

interface IAppServiceMetadata extends IServiceRequestMetaData<
    IRateQuoteServiceQuery //support more query types here using "|" operator
> {} 

/* helper interface: collates all possible action types & action content */
interface IServiceReducerAction extends IReduxAction<EActionTypes, { id: string, content: IRateQuoteServiceQuery & IRateQuoteServiceResponse } & string> {}



export interface IServiceReducer {
    requests: Array<IAppServiceMetadata>
}

const initialState: IServiceReducer = {
    requests: []
}

export const serviceReducer = ( state: IServiceReducer = initialState, action: IServiceReducerAction ): IServiceReducer => {
    switch ( action.type ) {
        /** @note add additional service reqeust action types to this case to support them  */
        case EActionTypes.RATE_QUOTE_REQUEST:  
            return {
                ...state,
                requests: [
                    ...state.requests,
                    {
                        id: action.payload.id,
                        queryData: action.payload.content,
                        requestType: action.type,
                        requestProgress: EServiceRequestProgress.IN_PROGRESS,
                        errors: [],
                        errorsAcknowledged: false,
                    }
                ]
            }
        case EActionTypes.RATE_QUOTE_REQUEST_SUCCESS: 
            return {
                ...state,
                requests: state.requests.map( requestData => {
                    return {
                        ...requestData,
                        requestProgress: action.payload.id.toString() === requestData.id.toString()  ? EServiceRequestProgress.SUCCESSFUL : requestData.requestProgress
                    }
                })
            }
        /** @todo add failure errors  */
        case EActionTypes.RATE_QUOTE_REQUEST_FAILURE: 
            return {
                ...state,
                requests: state.requests.map( requestData => {
                    return {
                        ...requestData,
                        requestProgress: action.payload.id.toString() === requestData.id.toString()  ? EServiceRequestProgress.FAILURE : requestData.requestProgress
                    }
                })
            }
        case EActionTypes.SERVICE_ERROR_ACKNOWLEDGE: 
            return {
                ...state,
                requests: state.requests.map( requestData => {
                    return {
                        ...requestData,
                        errorsAcknowledged: requestData.id.toString() === action.payload.toString() ? true : requestData.errorsAcknowledged
                    }
                })
            }
        default: 
            return state;
    }
}