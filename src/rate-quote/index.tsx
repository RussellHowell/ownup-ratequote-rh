import * as React from 'react';
import { connect } from 'react-redux';
import { IRootReducer, onRateQuoteRequest } from '../redux';
import { Dispatch } from 'redux';
import { IRateQuoteServiceQuery, IRateQuote } from './interface';
import { EOccupancyType, EPropertyType } from '../common/enum/index';
import { RateQuoteForm } from './components';
import SimpleDataTable from '../common/components/SimpleDataTable/SimpleDataTable';
import { Divider, NonIdealState, IconName } from '@blueprintjs/core';
import * as _ from 'lodash';

interface IRateQuoteAppProps {
    rateQuotes: Array<IRateQuote>
    onRateQuoteFormSubmit: ( formValue: IRateQuoteServiceQuery ) => void
}

const RateQuoteApp: React.FunctionComponent<IRateQuoteAppProps> = (props) => {
    const [ formValues, updateFormValues ] = React.useState( {
        loanSize: 100000,
        creditScore: 700,
        propertyType: EPropertyType.SINGLE_FAMILY,
        occupancy: EOccupancyType.PRIMARY
    } as IRateQuoteServiceQuery )


    /** helper function to make rate quote data more human readable */
    const formatRateQuote = ( rateQuote: IRateQuote )  => {
        const { interestRate, monthlyPayment, apr, closingCosts } = rateQuote;
        return {
            ...rateQuote,
            closingCosts: '$' + closingCosts,
            interestRate: interestRate + '%',
            monthlyPayment: '$' + monthlyPayment.toPrecision(3),
            apr: apr.toPrecision(3) + '%'
        }
    } 
    return ( 
    <div>
        <RateQuoteForm 
            formValues={ formValues }
            onFormValuesChange={ ( formValues: IRateQuoteServiceQuery ) => updateFormValues( formValues ) }
            onFormSubmit={ () => props.onRateQuoteFormSubmit( formValues ) }
        />
        <br/>
        <Divider /> 
        <br/>
        {
            _.isEmpty( props.rateQuotes ) ? (
                <NonIdealState 
                    icon={ "home" }
                    title="No Data"
                    description="Retrieve rate quotes using the form above"
                />
            ) : (
            <SimpleDataTable 
                style={{ width: "100vw" }}
                rowData={ props.rateQuotes.map( rateQuote => { return formatRateQuote( rateQuote ) } )  }
                columns={ [
                    { header: "Lender", path: ["lenderName"] },
                    { header: "Loan Type", path: ["loanType"] },
                    { header: "Interest Rate", path: ["interestRate"] },
                    { header: "Closing Costs", path: ["closingCosts"] },
                    { header: "Monthly Payment", path: ["monthlyPayment"] },
                    { header: "APR", path: ["apr"] }
                ] }
            />
            )
        }
    </div>
    );
};

const mapStateToProps = ( state: IRootReducer ) => {
    return {
        rateQuotes: state.rateQuoteReducer.rateQuotes
    }
}

const mapDispatchToProps = ( dispatch: Dispatch ) => {
    return {
        onRateQuoteFormSubmit: ( formValues: IRateQuoteServiceQuery ) => {
            dispatch( onRateQuoteRequest( formValues ) );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( RateQuoteApp );
export * from './interface';
export * from './service';
