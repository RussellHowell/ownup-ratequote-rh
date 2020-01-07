import { EServiceRequestProgress } from "../enum";

export interface IBaseProps { 
    /** classname that will appended to root element of component */
    style?: React.CSSProperties;
    /** Css styling that will be applied to root element of component */
    className?: string
}

/** Interface to ensure similar base api for different DataTable implementations */
export interface IDataTableProps {
    /** 
     * array of objects describing how to display and query data from each entry in props.rowData
     * 
     * header - the column heading 
     * path - path to query on the data entry, utilizes lodash _.get(), for example _.get( { a: [{ b: 'foo' }], ['a', '0', 'b'] )  => foo  
     * 
     *  */
    columns: Array<{ header: string, path: Array<string> | string }>
    /**
     *  Array of table rows
     */
    rowData: Array<object>
}

export interface IReduxAction<T, P> {
    type: T,
    payload: P
}

/** Interface used to keep track of service request related information */
export interface IServiceRequestMetaData<T> {
    id: string,
    queryData: T
    requestType: string,
    errors: Array<string>,
    /** whether the error has been seen/acknowledged by user  */
    errorsAcknowledged: boolean
    requestProgress: EServiceRequestProgress
}