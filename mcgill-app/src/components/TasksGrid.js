import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { apiPOST } from '../_services/api';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const TasksGrid = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   {field: 'name', filter: true, minWidth: 150},
   {field: 'description', minWidth: 200},
   {field: 'userId', headerName:"username"},
   {field: 'date'},
   {field: 'startTime'},
   {field: 'endTime'}
 ]);

 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);


// Example load data from sever
useEffect(() => {
  const body = {
    "id": JSON.parse(localStorage.getItem("user")).id,
    "role": localStorage.getItem("role")
  }
  fetch('http://3.22.17.77:3000/tasks', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
    })
  .then(result => result.json())
  .then(rowData => setRowData(rowData))
}, []);

const onFirstDataRendered = useCallback((params) => {
  gridRef.current.api.sizeColumnsToFit();
}, []);

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 return (
   <div className='h-100 w-100'>
     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine h-100 w-100">

       <AgGridReact
          style={{ width: '100%', height: '100%;' }}
           ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows
           onFirstDataRendered={onFirstDataRendered}

           onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           />
     </div>
   </div>
 );
};

export default TasksGrid;