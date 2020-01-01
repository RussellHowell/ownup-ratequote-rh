import { IRateQuoteServiceQuery, IRateQuoteServiceResponse } from "../interface";

/** 
 * @author Russell Howell
 * 
 * @description Ownup rate quote related service queries 
 */

const rateQuoteRequest = ( query: IRateQuoteServiceQuery ): Promise<IRateQuoteServiceResponse> => {
    return new Promise( ( resolve, reject ) => {
        fetch(process.env.OWNUP_SERVICE_URL as string, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': process.env.OWNUP_AUTH_TOKEN as string,
                'Content-Type': 'application/json'
            }
        }).then( ( response ) => {
            resolve( response.json() as unknown as IRateQuoteServiceResponse );
        } )
    })
}

