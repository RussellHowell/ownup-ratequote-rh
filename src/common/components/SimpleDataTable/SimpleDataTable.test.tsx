import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import SimpleDataTable from './SimpleDataTable';
import { shallow, ShallowWrapper } from 'enzyme';
import * as _ from 'lodash';


const testColumns: Array<{ header: string, path: Array<string> | string }> = [
    { header: 'Name', path: 'name' },
    { header: 'Age', path: [ 'stats', '0' ] },
    { header: 'Height', path: ['stats', '1' ] }
]

const testRowData: Array<{
    name: string,
    stats: [ number, string ]
 }> = [
     {
         name: 'Russell',
         stats: [ 25, "5'7\""]
     },
     {
        name: 'Tommy',
        stats: [ 30, "6'3\""]
     },
     {
         name: 'Jennifer',
         stats: [ 46, "5'8\"" ]
     }
 ]

 //snapshot test
 it('renders correctly', () => {
    const tree = TestRenderer.create(
    <SimpleDataTable
        columns={ testColumns }
        rowData={ testRowData }
    />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

//render table 
const tableContainer: ShallowWrapper = shallow( 
    <SimpleDataTable
        columns={ testColumns }
        rowData={ testRowData }
    />
);

const table: ShallowWrapper = tableContainer.find( 'table' );
//only one table should be rendered 
expect( table ).toHaveLength( 1 );

const thead: ShallowWrapper = table.find( 'thead' );
//table should have one thead
expect( thead ).toHaveLength( 1 ); 

const thArr: ShallowWrapper = table.find( 'th' );
//number of <th> tags should match number of test columns
expect( thArr ).toHaveLength( testColumns.length ); 
//content of <th> tags should match content of columns prop 
thArr.map( ( th, index ) => {
    expect( th.text() ).toMatch( testColumns[index].header );
});

const tbody: ShallowWrapper = table.find( 'tbody' );
//table should render exactly 1 tbody 
expect( tbody ).toHaveLength( 1 ); 

const trArr: ShallowWrapper = tbody.find( 'tr' );
//table should render the same number as rows as entries in the testRowData array
expect( trArr ).toHaveLength( testRowData.length ); 
//each row's content should match its correspending entry in testRowData 
trArr.map( ( row, testRowIndex ) => {
    const tdArr: ShallowWrapper = row.find( 'td' );
    //make sure each row has the proper number of entries 
    expect( tdArr ).toHaveLength( testColumns.length ); 
    //make sure each cell contains the correct content
    tdArr.map( ( cell, columnIndex ) => expect( cell.text() ).toMatch( _.get( testRowData[testRowIndex], testColumns[columnIndex].path ).toString() ) ) 
} ) 
