import { IRateQuote, IRateQuoteServiceQuery } from '../../rate-quote';
import { EPropertyType, EOccupancyType, EServiceRequestProgress } from '../../common';
import { IServiceReducer, serviceReducer } from './ServiceReducer';
import { EActionTypes, onServiceErrorAcknowledge, onRateQuoteRequestSuccess, onRateQuoteRequestFailure } from '../actions/actions';
import { IServiceRequestMetaData } from '../../common/interface/index';

const initState: IServiceReducer = {
    requests: []
}

const testRateQuoteQuery: IRateQuoteServiceQuery = {
    loanSize: 250000,
    propertyType: EPropertyType.TOWNHOUSE,
    occupancy: EOccupancyType.PRIMARY,
    creditScore: 600
}

const populatedState: IServiceReducer = {
    requests: [
        {
            id: '1',
            queryData: testRateQuoteQuery,
            requestType: EActionTypes.RATE_QUOTE_REQUEST,
            errors: [],
            errorsAcknowledged: false,
            requestProgress: EServiceRequestProgress.IN_PROGRESS
        },
        {
            id: '2',
            queryData: testRateQuoteQuery,
            requestType: EActionTypes.RATE_QUOTE_REQUEST,
            errors: [ 'foo error', 'another error' ],
            errorsAcknowledged: false,
            requestProgress: EServiceRequestProgress.FAILURE
        },
        {
            id: '3',
            queryData: testRateQuoteQuery,
            requestType: EActionTypes.RATE_QUOTE_REQUEST,
            errors: [ ],
            errorsAcknowledged: false,
            requestProgress: EServiceRequestProgress.SUCCESSFUL
        }
    ]
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

it( 'returns initState when passed state is undefined and an unactionable action type is passed', ( ) => {
    expect( serviceReducer( undefined, { 
        type: EActionTypes.RATE_QUOTE_RESULTS_UPDATE_ALL,
        payload:  { id: 'foo', content: { rateQuotes: testRateQuoteArray } }
    }  )).toMatchObject( initState );
} );

it( `adds new entry to requests array with new request after ${EActionTypes.RATE_QUOTE_REQUEST} action`, () => {
    const newState_1: IServiceReducer = serviceReducer( undefined, {
        type: EActionTypes.RATE_QUOTE_REQUEST,
        payload: { id: '4', content: testRateQuoteQuery }
    } )

    expect( newState_1.requests[0] ).toMatchObject( {
        id: '4',
        requestType: EActionTypes.RATE_QUOTE_REQUEST,
        requestProgress: EServiceRequestProgress.IN_PROGRESS,
        errors: [],
        errorsAcknowledged: false,
        queryData: testRateQuoteQuery 
    } as IServiceRequestMetaData<IRateQuoteServiceQuery> )

});

it( `sets errorAcknowleged key to "true" for correct request object n ${EActionTypes.SERVICE_ERROR_ACKNOWLEDGE} action`, () => {
    const newState: IServiceReducer = serviceReducer( populatedState, onServiceErrorAcknowledge( '2' ) );
    expect( newState.requests.length ).toBe( testRateQuoteArray.length );
    newState.requests.map( requestData => requestData.id === '2' ? expect( requestData.errorsAcknowledged ).toBe( true ) : undefined );
} )

it( `correctly updates status of corresponding request after ${EActionTypes.RATE_QUOTE_REQUEST_SUCCESS} action`, () => {
    const newState: IServiceReducer = serviceReducer( populatedState, onRateQuoteRequestSuccess( {
        id: '1',
        content: { rateQuotes: testRateQuoteArray } 
    } ));

    expect( newState.requests.length ).toBe( testRateQuoteArray.length );
    newState.requests.map( requestData => requestData.id === '1' ? expect( requestData.requestProgress ).toBe( EServiceRequestProgress.SUCCESSFUL  ) : undefined );
} )

it( `correctly updates status of corresponding request after ${EActionTypes.RATE_QUOTE_REQUEST_FAILURE} action`, () => {
    const newState: IServiceReducer = serviceReducer( populatedState, onRateQuoteRequestFailure( {
        id: '1',
        content: { rateQuotes: testRateQuoteArray } 
    } ));

    expect( newState.requests.length ).toBe( testRateQuoteArray.length );
    newState.requests.map( requestData => requestData.id === '1' ? expect( requestData.requestProgress ).toBe( EServiceRequestProgress.FAILURE  ) : undefined );
} )