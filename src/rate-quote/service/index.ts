import { IRateQuoteServiceQuery, IRateQuoteServiceResponse } from "../interface";
const queryString = require( 'query-string' );

/** 
 * @author Russell Howell
 * 
 * @description Ownup rate quote related service queries 
 */

export const fetchRateQuotes = ( query: IRateQuoteServiceQuery ): Promise<IRateQuoteServiceResponse> => {
    return new Promise( ( resolve, reject ) => {
        // fetch( `${process.env.REACT_APP_SERVICE_URL}?${queryString.stringify( query ) }` , {
        fetch( `http://localhost:8011?${queryString.stringify( query ) }` , {
        }).then( ( response ) => {
            resolve( response.json() as unknown as IRateQuoteServiceResponse );
        } )
    })
}

