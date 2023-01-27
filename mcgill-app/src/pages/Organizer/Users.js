import React from 'react';
import {useState} from "react";
  
function Users (){
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [formStatus, setFormStatus] = React.useState('Create')
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        firstname,
        lastname,
        address,
        phone,
        type
      })
    };
    fetch('http://3.22.17.77:3000/users/create', requestOptions)
    e.target.reset();
  }
    

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Create Users</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            First Name
          </label>
          <input className="form-control" type="text" required value={firstname} onChange={(e)=> setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Last Name
          </label>
          <input className="form-control" required value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Email Address
          </label>
          <input className="form-control" type="text" required value={address} onChange={(e)=> setAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Phone Number
          </label>
          <input className="form-control" type="text" required pattern="^\d{10}$" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="assistance_type">
            Type of User
          </label>
          <select className="form-control" required value={type} onChange={(e)=> setType(e.target.value)}>
            <option selected value="">Select an option</option>
            <option value="ORGANIZER">Organizer</option>
            <option value="VOLUNTEER">Volunteer</option>
          </select>
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
  
export default Users;