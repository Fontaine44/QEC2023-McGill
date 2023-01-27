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
  const options = [
    {value: "Organiser", label: "organiser"},
    {value: "Volunteer", label: "volunteer"},
    {value: "Security", label: "security"},
    {value: "First Aids", label: "firstaids"}
  ]
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Report Problems</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
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
          <input className="form-control" type="text" id="type" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="level">
            Level of Emergency
          </label>
          
          <input className="form-control" type="text" id="level" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default LostFoundOrganizer