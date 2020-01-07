import { combineReducers } from 'redux'
import { rateQuoteReducer, IRateQuoteReducer } from './RateQuoteReducer';
import { serviceReducer, IServiceReducer } from './ServiceReducer';

export interface IRootReducer {
    rateQuoteReducer: IRateQuoteReducer,
    serviceReducer: IServiceReducer
}

const rootReducer = combineReducers({
    rateQuoteReducer,
    serviceReducer
});

export default rootReducer;