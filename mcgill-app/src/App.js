import './App.css';
import React, { Suspense, useRef } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/Navbar'
import ReportProblems from './pages/ReportProblems'
//ORGANIZER
import LostFoundOrganizer from './pages/Organizer/LostFoundOrganizer'
import Users from './pages/Organizer/Users'
import Tasks from './pages/Organizer/Tasks'
//VOLUNTEERS
import LostFoundVolunteer from './pages/Volunteer/LostFoundVolunteer'

import { apiPOST } from './_services/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="app-container">
      <Routes>
      <Route path="*" element={< Login />}/>
      <Route path="/home" element={
          <Suspense fallback={<Login />}>
              <RolesAuthRoute role={null}>
                    <Home />
              </RolesAuthRoute>
          </Suspense>
          } />
        <Route path="/users" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"ORGANIZER"}>
                    <Users />
                </RolesAuthRoute>
            </Suspense>
            } />
            <Route path="/tasks" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"ORGANIZER"}>
                    <Tasks />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/report-problems" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={null}>
                    <ReportProblems />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/lost-found-org" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"ORGANIZER"}>
                    <LostFoundOrganizer />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/lost-found-vol" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <LostFoundVolunteer />
                </RolesAuthRoute>
            </Suspense>
            } />

        <Route path='/login' element={< Login />}></Route>
      </Routes>
      </div>
    </div>

  );
}
export default App;


export function RolesAuthRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  const logged = localStorage.getItem("logged");

  if (logged == "false") {
    return (<Navigate to="/login" />);
  }

  if (userRole === role || role == null) {
    return (
      <>
          {children}
      </>
  );
  }


  return (<Navigate to="/login" />);
}




export function Login() {
  return (
    <div className="w-50">
        <h3>Login</h3>
        <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export async function login(event) {
  event.preventDefault();
  const body = {
    id: event.target[0].value,
    password: event.target[1].value
  }
  const response = await apiPOST("login", body)
  

  if (response.success) {
    localStorage.setItem("logged", true)
    localStorage.setItem("user", JSON.stringify(response.data))
    setRole(response.data.type);
    window.location.href = '/home'
  } else {
    alert("Wrong username or password. Please try again.");
  }

}

export function setRole(role) {
  localStorage.setItem("role", role);
}
  
