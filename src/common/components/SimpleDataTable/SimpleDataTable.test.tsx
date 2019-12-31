import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import SimpleDataTable from './SimpleDataTable';
import { shallow, ShallowWrapper } from 'enzyme';


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
