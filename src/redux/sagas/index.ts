import { takeLatest } from 'redux-saga/effects';
import { EActionTypes } from '../actions';
import { requestRateQuotes } from './requestRateQuotes.saga';

/** 
 * @author Russell Howell
 * 
 * @description entrypoint for sagas middleware
 * 
 */

 /** Root saga that should be called to set up application at runtime */
 export default function* rootSaga(){
    takeLatest( EActionTypes.RATE_QUOTE_REQUEST, requestRateQuotes );
 }      