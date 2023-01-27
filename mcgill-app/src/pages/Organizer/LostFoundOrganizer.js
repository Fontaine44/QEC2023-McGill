import React, {useState} from 'react';
import LFGrid from '../../components/LFGrid';
const LostFoundOrganizer = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [find_hour, setHour] = useState('');
  const [formStatus, setFormStatus] = React.useState('Submit')
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        name,
        description,
        find_hour,
        type
      })
    };
    fetch('http://127.0.0.1:5000/objects/create', requestOptions)
  }
    

  return (
    <div className="container h-100 mt-5">
    <div class="row h-100">
    <div class="col-5 ">
      <h2 className="mb-3">Lost And Found</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label className="form-label" htmlFor="type">
            Object Lost or Found
          <select className="form-control" required value={type} onChange={(e)=> setType(e.target.value)}>
            <option selected value="">Select an option</option>
            <option value="LOST">Lost</option>
            <option value="FOUND">Found</option>
          </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Object Name
          </label>
          <input className="form-control" required value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Description
          </label>
          <input className="form-control" type="text" required value={description} onChange={(e)=> setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Time
          </label>
          <input className="form-control" type="text" required placeholder='HH:MM' pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$" value={find_hour} onChange={(e)=> setHour(e.target.value)} />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
      </div>
      <div class="col-7 h-100">
      <LFGrid />
      </div>
      </div>
    </div>
  )
}
export default LostFoundOrganizer