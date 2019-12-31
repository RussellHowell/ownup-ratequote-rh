import * as React from 'react';
import { IBaseProps, IDataTableProps } from '../../interface';

export interface ISimpleDataTableProps extends IDataTableProps, IBaseProps {
}

/** Table component that renders an HTML table based on a passed array of column models and row data */
const DataTable: React.FC<ISimpleDataTableProps> = (props, context) => {
    return (
      <div className={ props.className } style={ props.style }>
        <table>
            <thead>
              <tr>
                { props.columns.map( ( columnModel, index ) => <th key={ 'col-'+index }>{ columnModel.header } </th> ) }
              </tr>
            </thead>
        </table>
      </div>
    );
  };

export default DataTable;
