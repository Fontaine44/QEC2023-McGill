import React from 'react'
//import Dropdown from "./Dropdown";
const LostFoundOrganizer = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, type, description, level} = e.target.elements
    let conFom = {
      name: name.value,
      type: type.value,
      description: description.value,
      level: level.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Report Problems</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name of the Problem
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <p>
            Optional: Add person to contact and their phone number/email
          </p>
          <textarea className="form-control" id="description" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="type">
            Type of Assistance
          </label>
          <select className="form-control" required>
            <option value="organizer">Organizer</option>
            <option value="volunteer">Volunteer</option>
            <option selected value="security">Security</option>
            <option value="firstaids">First Aids</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="level">
            Level of Emergency (1 is most important, 4 is least important)
          <select className="form-control">
            <option value="1">1</option>
            <option value="2">2</option>
            <option selected value="3">3</option>
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