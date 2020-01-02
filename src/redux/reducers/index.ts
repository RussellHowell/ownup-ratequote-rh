import { combineReducers } from 'redux'
import { rateQuoteReducer, IRateQuoteReducer } from './RateQuoteReducer';

export interface IRootReducer {
    rateQuoteReducer: IRateQuoteReducer
}

export default combineReducers({
    rateQuoteReducer
});