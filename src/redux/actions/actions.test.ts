import { onRateQuoteRequest, EActionTypes, onRateQuoteRequestSuccess } from './actions';
import { EPropertyType, EOccupancyType } from '../../common/enum/index';
import { IRateQuoteServiceQuery, IRateQuoteServiceResponse } from '../../rate-quote/interface/index';
import { IReduxAction } from '../../common/interface/index';


const testQuery: IRateQuoteServiceQuery = { 
    loanSize: 150000,
    creditScore: 700,
    propertyType: EPropertyType.TOWNHOUSE,
    occupancy: EOccupancyType.PRIMARY
};

const testResponse: IRateQuoteServiceResponse = {
    rateQuotes: [
        {
            lenderName: 'adskjla',
            loanType: 'adsioj',
            interestRate: 123,
            closingCosts: 13091832,
            monthlyPayment: 13098,
            apr: 13901
        },
        {
            lenderName: 'aaiop[',
            loanType: '9adslkj',
            interestRate: 41243,
            closingCosts: 91300,
            monthlyPayment: 91001,
            apr: 120
        }
    ]
}

it( 'onRateQuoteRequest returns correctly formatted action with id specified', () => {
    expect( onRateQuoteRequest( testQuery, 'test' ) ).toMatchObject( {
        action: EActionTypes.RATE_QUOTE_REQUEST,
        payload: {
            id: 'test',
            content: testQuery
        }
    }  );
});

it( 'onRateQuoteRequest returns correctly formatted response when a payloadId is not provided', () => {
    //create action without specifying id
    const action: IReduxAction<EActionTypes, {id: string, content: IRateQuoteServiceQuery}> = onRateQuoteRequest( testQuery );
    expect( action.payload.content ).toMatchObject( testQuery );
    expect( action.action ).toMatch( EActionTypes.RATE_QUOTE_REQUEST );
    expect( action.payload ).toHaveProperty( 'id' );
    expect( typeof(action.payload.id) ).toMatch( 'string' );
});

it( 'onRateQuoteRequestSuccess returns correctly formatted action', () => {
    const action: IReduxAction<EActionTypes, {id:string, content: IRateQuoteServiceResponse}> = onRateQuoteRequestSuccess( {
        id: 'test',
        content: testResponse
    } );
    expect( action.action ).toMatch( EActionTypes.RATE_QUOTE_REQUEST_SUCCESS );
    expect( action.payload ).toMatchObject( {
        id: 'test',
        content: testResponse
    } );
} )