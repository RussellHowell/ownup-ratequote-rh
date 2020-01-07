import { IRateQuoteServiceResponse, IRateQuoteServiceQuery } from "../../rate-quote";
import { EActionTypes, onRateQuoteRequestSuccess, onRateQuoteRequestFailure } from "../actions";
import { IReduxAction } from "../../common";
import { call, put } from 'redux-saga/effects'
import { fetchRateQuotes } from "../../rate-quote";

export function* requestRateQuotes( action: IReduxAction<EActionTypes, { id: string, content: IRateQuoteServiceQuery}>  ){
    try {
        const response: IRateQuoteServiceResponse = yield call( fetchRateQuotes, action.payload.content );
        yield put( onRateQuoteRequestSuccess( { id: action.payload.id, content: response } ) );
    }catch( e ){
        console.error( e ); 
        yield put( onRateQuoteRequestFailure( { id: action.payload.id, errorMessages: e } ) )
    }
}