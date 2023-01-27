import React, {useState} from 'react';
import TaskGrid from '../../components/TaskGrid.js'
const Tasks2 = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userId, setUserId] = useState('');
  const [formStatus, setFormStatus] = React.useState('Submit')
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        name,
        description,
        date,
        startTime,
        endTime,
        userId
      })
    };
    fetch('http://3.22.17.77:3000/tasks/create', requestOptions)
    e.target.reset();
  }
    

  return (
    <div className="container h-100 mt-5">
    <div class="row h-100">
    <div class="col-6 ">
    <h2>Add a Task</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="form-control mb-3 mt-3"
          type="text"
          name="name"
          required="required"
          placeholder="Enter a Task Name..."
          onChange={(e)=> setName(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="description"
          required="required"
          placeholder="Enter a Description of the Task..."
          onChange={(e)=> setDescription(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="date"
          required="required"
          pattern= "([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
          placeholder="Enter Date of the Task (YYYY-MM-DD)..."
          onChange={(e)=> setDate(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="startTime"
          required="required"
          pattern= "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
          placeholder="Enter the Start Time (HH:MM)..."
          onChange={(e)=> setStartTime(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="endTime"
          required="required"
          pattern= "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
          placeholder="Enter the End Time (HH:MM)..."
          onChange={(e)=> setEndTime(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          name="userId"
          required="required"
          placeholder="Enter a Valid UserId"
          onChange={(e)=> setUserId(e.target.value)}
        />
        <button className="btn btn-danger" type="submit">Add</button>
        
      </form>
      </div>
      <div class="col-1 h-100">
      </div>
      <div class="col-5 h-100">
      <TaskGrid />
      </div>
      </div>
    </div>
  )
}
export default Tasks2