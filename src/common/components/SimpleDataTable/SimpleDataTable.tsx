/**
 * @author Russell Howell
 * 
 */


import * as React from 'react';
import * as _ from 'lodash';
import { IBaseProps, IDataTableProps } from '../../interface';


export interface ISimpleDataTableProps extends IDataTableProps, IBaseProps {
}

/** Table component that renders an HTML table based on a passed array of column models and row data */
const SimpleDataTable: React.FC<ISimpleDataTableProps> = (props, context) => {
  const getRowStyle = ( rowIndex: number ): React.CSSProperties => {
    return { height: '2em', backgroundColor: rowIndex%2 === 0 ? '#f0f0f0' : '#FFFFF' }
  } 
    return (
        <table className={ props.className } style={ props.style }>
            <thead>
              <tr>
                { props.columns.map( ( columnModel, index ) => <th key={ 'col-'+index }>{ columnModel.header } </th> ) }
              </tr>
            </thead>
            <tbody>
                { props.rowData.map( ( row, rowIndex ) => ( 
                <tr key={ 'row-'+rowIndex } style={ getRowStyle( rowIndex ) } > 
                  {
                    props.columns.map( ( columnModel, columnIndex ) => ( 
                    <td key={ `${rowIndex}-${columnIndex}`}> 
                      { _.get( row, columnModel.path ) }
                    </td> ) )
                  } 
                </tr> 
                ) ) }
            </tbody>
        </table>
    );
  };

export default SimpleDataTable;
