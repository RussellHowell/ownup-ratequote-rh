import { combineReducers } from 'redux'
import { rateQuoteReducer, IRateQuoteReducer } from './RateQuoteReducer';

export interface IRootReducer {
    rateQuoteReducer: IRateQuoteReducer
}

const rootReducer = combineReducers({
    rateQuoteReducer
});

export default rootReducer;