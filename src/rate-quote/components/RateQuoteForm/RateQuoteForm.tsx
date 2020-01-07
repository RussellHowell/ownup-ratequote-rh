import * as React from 'react';
import { NumericInput, Label, Position, HTMLSelect, Button, Intent } from '@blueprintjs/core';
import { Container, Row, Col } from 'react-grid-system';
import { IRateQuoteServiceQuery } from '../../interface';
import { EOccupancyType, EPropertyType, IBaseProps } from '../../../common';



export interface IRateQuoteFormProps extends IBaseProps {
    formValues: IRateQuoteServiceQuery
    onFormValuesChange: ( formValues: IRateQuoteServiceQuery ) => void
    onFormSubmit: () => void 
}

export const RateQuoteForm: React.FunctionComponent<IRateQuoteFormProps> = (props) => {
  return (
    <Container style={ props.style } className={ props.className }>
      <Row>
        <Col sm={ 6 } md={3} >
          <Label>
            Loan Size
            <NumericInput 
              fill
              buttonPosition={ "none" }
              value={ props.formValues.loanSize }
              onChange={ ( e: any ) =>  props.onFormValuesChange({ ...props.formValues, loanSize: Number.parseInt( e.target.value ) }) } />
          </Label>
        </Col>
        <Col sm={ 6 } md={3} >
          <Label>
            Credit Score 
            <NumericInput 
            fill
            buttonPosition={ "none" }
            value={ props.formValues.creditScore }
            onChange={ ( e: any ) => props.onFormValuesChange({ ...props.formValues, creditScore: Number.parseInt( e.target.value )}) } />
          </Label>
        </Col>
        <Col sm={ 6 } md={3} >
          <Label>
            Occupancy
            <HTMLSelect
              value={ props.formValues.occupancy }
              onChange={ ( e: any ) => props.onFormValuesChange( {...props.formValues, occupancy: e.target.value } ) }
              options={ [EOccupancyType.INVESTMENT, EOccupancyType.PRIMARY, EOccupancyType.SECONDARY ] }

            />
          </Label>
        </Col>
        <Col sm={ 6 } md={3} >        
          <Label>
            Property Type
            <HTMLSelect 
              value={ props.formValues.propertyType }
              onChange={ ( e: any ) => props.onFormValuesChange( { ...props.formValues, propertyType: e.target.value } ) }
              options={ [EPropertyType.CONDO, EPropertyType.MULTI_FAMILY, EPropertyType.SINGLE_FAMILY, EPropertyType.TOWNHOUSE ] }
            />
          </Label>
        </Col>
      </Row>
        <Button 
          text="Get Quote"
          intent={ Intent.PRIMARY }
          onClick={ props.onFormSubmit }
        />
    </Container>
  );
};

