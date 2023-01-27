import React from 'react';
import TasksGrid from '../components/TasksGrid';
import AlertsGrid from '../components/AlertsGrid'
  
function Home (){
  return (
    <div className='h-100 w-100 d-flex flex-column'>
      <div className='row w-100'>
      
        <div className="col-7 pe-3 ps-3">
          <h4>Tasks</h4>
        </div>

        <div className="col-5 ps-3 pe-2">
          <h4>Alerts</h4>
        </div>

      </div>


      <div className='row w-100 h-100'>

      <div className="col-7 pe-3 ps-3">
        <TasksGrid />
      </div>

      <div className="col-5 ps-3 pe-2">
        <AlertsGrid />
      </div>
        
        </div>
    
      
    </div>
  )
}
  
export default Home;