import React from 'react'
import {useState} from "react"
//import Dropdown from "./Dropdown";
const LostFoundOrganizer = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assistance_type, setType] = useState('');
  const [priority, setPrio] = useState('');
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        name,
        description,
        assistance_type,
        priority
      })
    };
    fetch('http://127.0.0.1:5000/problems/create', requestOptions)
  }
    

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Report Problems</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name of the Problem
          </label>
          <input className="form-control" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <p>
            Optional: Add person to contact and their phone number/email
          </p>
          <textarea className="form-control" id="description" required value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="assistance_type">
            Type of Assistance
          </label>
          <select className="form-control" required value={assistance_type} onChange={(e)=> setType(e.target.value)}>
            <option selected value="">Select an option</option>
            <option value="organizer">Organizer</option>
            <option value="volunteer">Volunteer</option>
            <option value="security">Security</option>
            <option value="firstaids">First Aids</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="priority">
            Level of Emergency (1 is most important, 4 is least important)
          <select className="form-control" required value={priority} onChange={(e)=> setPrio(e.target.value)}>
            <option selected value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </label>
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default LostFoundOrganizer