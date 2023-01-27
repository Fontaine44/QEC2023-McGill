import './App.css';
import React, { Suspense, useRef } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Page2 from './pages/Page2'
import NavBar from './components/Navbar'
import NavBarOrganizer from './components/NavbarOrganizer'
import ReportProblems from './pages/ReportProblems'
//ORGANIZER
import HomeOrganizer from './pages/Organizer/HomeOrganizer'
import LostFoundOrganizer from './pages/Organizer/LostFoundOrganizer'
import VolunteersAccount from './pages/Organizer/VolunteersAccount'
//VOLUNTEERS
import HomeVolunteer from './pages/Volunteer/HomeVolunteer'
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

        <Route path="/" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <Page2 />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/page2" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <Page2 />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/volunteers" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <VolunteersAccount />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/report-problems" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <ReportProblems />
                </RolesAuthRoute>
            </Suspense>
            } />
        <Route path="/lost-found-org" element={
            <Suspense fallback={<Login />}>
                <RolesAuthRoute role={"VOLUNTEER"}>
                    <LostFoundOrganizer />
                </RolesAuthRoute>
            </Suspense>
            } />

        {/* <Route path='/' element={< HomeOrganizer />}></Route> */}
        <Route path='/login' element={< Login />}></Route>
        {/* <Route path='/page2' element={< Page2 />}></Route>
        <Route path='/volunteers' element={< VolunteersAccount/>}></Route>
        <Route path='/report-problems' element={< ReportProblems/>}></Route>
        <Route path='/lost-found-org' element={< LostFoundOrganizer/>}></Route> */}
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

  if (userRole === role) {
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
        <h1>Login</h1>
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
    setRole(response.data.type);
    window.location.href = '/'
  }


}

export function setRole(role) {
  localStorage.setItem("role", role);
}
  
