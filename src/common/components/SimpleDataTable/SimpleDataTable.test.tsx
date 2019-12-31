import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import SimpleDataTable from './SimpleDataTable';


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

 it('renders correctly', () => {
    const tree = TestRenderer.create(
    <SimpleDataTable
        columns={ testColumns }
        rowData={ testRowData }
    />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
 
