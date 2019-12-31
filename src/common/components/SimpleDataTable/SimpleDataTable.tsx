import * as React from 'react';
import { IBaseProps, IDataTableProps } from '../../interface';

export interface ISimpleDataTableProps extends IDataTableProps, IBaseProps {
}

/** Table component that renders an HTML table based on a passed array of column models and row data */
const DataTable: React.FC<ISimpleDataTableProps> = (props, context) => {
    return (<div>TODO</div>);
  };

export default DataTable;
