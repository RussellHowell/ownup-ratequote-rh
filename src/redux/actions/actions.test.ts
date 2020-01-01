import { onRateQuoteRequest, EActionTypes, onRateQuoteRequestSuccess } from './actions';
import { EPropertyType, EOccupancyType } from '../../common/enum/index';
import { IRateQuoteServiceQuery } from '../../rate-quote/interface/index';
import { IReduxAction } from '../../common/interface/index';


const testQuery: IRateQuoteServiceQuery = { 
    loanSize: 150000,
    creditScore: 700,
    propertyType: EPropertyType.TOWNHOUSE,
    occupancy: EOccupancyType.PRIMARY
};

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