import { IRateQuoteReducer, rateQuoteReducer,  } from './RateQuoteReducer';
import { EActionTypes } from '../actions';
import { IRateQuote, IRateQuoteServiceQuery } from '../../rate-quote';
import { EPropertyType, EOccupancyType } from '../../common';

const initState: IRateQuoteReducer = {
    rateQuotes: []
}

const testRateQuoteArray: Array<IRateQuote> = [        
    {
        "lenderName": "TFB Federal Credit Union",
        "loanType": "7/1 ARM",
        "interestRate": 4.375,
        "closingCosts": 3500,
        "monthlyPayment": 1248.2131443379562,
        "apr": 4.493097330564522
    },
    {
        "lenderName": "TFB Federal Credit Union",
        "loanType": "10/1 ARM",
        "interestRate": 4.5,
        "closingCosts": 3500,
        "monthlyPayment": 1266.713274564714,
        "apr": 4.618973581073078
    },
    {
        "lenderName": "TFB Federal Credit Union",
        "loanType": "30YR Fixed",
        "interestRate": 4.75,
        "closingCosts": 3500,
        "monthlyPayment": 1304.1183412577934,
        "apr": 4.870751829896106
    }
]

const testRateQuoteQuery: IRateQuoteServiceQuery = {
    loanSize: 250000,
    propertyType: EPropertyType.TOWNHOUSE,
    occupancy: EOccupancyType.PRIMARY,
    creditScore: 600
}

it( 'reducer function returns initState when passed state is undefined and an unactionable action type is passed', ( ) => {
    expect( rateQuoteReducer( undefined, { 
        type: EActionTypes.RATE_QUOTE_REQUEST_FAILURE,
        payload:  { id: 'foo', content: { rateQuotes: testRateQuoteArray } }
    }  )).toMatchObject( initState );
} );

it( `${EActionTypes.RATE_QUOTE_REQUEST_SUCCESS} updates state with new rate quote array `, ( ) => {
    const newState: IRateQuoteReducer  = rateQuoteReducer( initState, { 
        type: EActionTypes.RATE_QUOTE_REQUEST_SUCCESS,
        payload:  { id: 'foo', content: { rateQuotes: testRateQuoteArray } }
    } );

    newState.rateQuotes.map( ( rateQuote, index ) => {
        expect( rateQuote ).toMatchObject( testRateQuoteArray[index] );
    })
} );

it( `${EActionTypes.RATE_QUOTE_REQUEST} clears the reducer state`, () => {
    expect( rateQuoteReducer( { rateQuotes: testRateQuoteArray }, {
        type: EActionTypes.RATE_QUOTE_REQUEST, 
        //disabling tslint on following line because content of payload is incorrect type for this reducer
        /* tslint:disable */  
        payload: { id: 'foo', content: testRateQuoteQuery }
        /* tslint: enable */
    }) ).toMatchObject( initState );
} );    
