import React, {useState} from 'react';
const LostFoundOrganizer = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const {name, description, datefound, datelost} = e.target.elements
    let conFom = {
      name: name.value,
      description: description.value,
      datefound: datefound.value,
      datelost: datelost.value,
    }
    console.log(conFom)
    
  }
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Lost and Found</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3" onChange={handleOnChange}>
          <label className="form-label" htmlFor="name">
            Do you want to log a lost or found item?
          </label>
          <div className="lost-found">
            <input type="radio" value="Lost" name="gender" /> Lost
            <input type="radio" value="Found" name="gender" /> Found
          </div> 
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name of the event
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea className="form-control" id="description" required />
        </div>
        <div className="mb-3" onChange={handleOnChange}>
          <label className="form-label" htmlFor="message">  
            Date the Item was Found          
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <div className="mb-3" >
          <label className="form-label" htmlFor="message">
            Date the Item was Lost
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default LostFoundOrganizer