import { IServiceRequestMetaData, IReduxAction } from "../../common";
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
interface IServiceReducerAction extends IReduxAction<EActionTypes, { id: string, content: IRateQuoteServiceQuery | IRateQuoteServiceResponse }> {}



export interface IServiceReducer {
    requests: Array<IAppServiceMetadata>
}

const initialState: IServiceReducer = {
    requests: []
}

export const serviceReducer = ( state: IServiceReducer = initialState, action: IServiceReducerAction ): IServiceReducer => {
    switch ( action.type ) {
        default: 
            return state;
    }
}