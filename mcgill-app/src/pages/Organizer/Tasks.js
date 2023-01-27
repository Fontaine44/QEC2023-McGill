import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import data from "../../mock-data.json";
import ReadOnlyRow from "../../components/ReadOnlyRow.js";
import EditableRow from "../../components/EditableRow";
import Select from 'react-select';
const Tasks = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/options')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Task</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="form-control"
          type="text"
          name="taskName"
          required="required"
          placeholder="Enter a Task Name..."
          onChange={handleAddFormChange}
        />
        <input
          className="form-control"
          type="text"
          name="description"
          required="required"
          placeholder="Enter a Description of the Task..."
          onChange={handleAddFormChange}
        />
        <input
          className="form-control"
          type="text"
          name="date"
          required="required"
          pattern= "([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
          placeholder="Enter Date of the Task (YYYY-MM-DD)..."
          onChange={handleAddFormChange}
        />
        <input
          className="form-control"
          type="text"
          name="startTime"
          required="required"
          pattern= "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
          placeholder="Enter the Start Time (HH:MM)..."
          onChange={handleAddFormChange}
        />
        <input
          className="form-control"
          type="text"
          name="endTime"
          required="required"
          pattern= "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
          placeholder="Enter the End Time (HH:MM)..."
          onChange={handleAddFormChange}
        />
        <Select
          isMulti
          name="users"
          options={users}
          className="basic-multi-select"
          placeholder="Select the Volunteers Needed"
          classNamePrefix="select"
        />
        <button type="submit">Add</button>
        
      </form>
    </div>
  );
};

export default Tasks;