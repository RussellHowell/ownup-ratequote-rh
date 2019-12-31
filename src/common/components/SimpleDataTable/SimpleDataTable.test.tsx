const testColumns: Array<{ header: string, accessor: Array<string> | string }> = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: [ 'stats', '0' ] },
    { header: 'Height', accessor: ['stats', '1' ] }
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
