import './App.css';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="app">
      <NavBarOrganizer />
      <div className="app-container">
      <Routes>
        <Route>
          <Route path='/' element={< HomeOrganizer />}></Route>
          <Route path='/page2' element={< Page2 />}></Route>
          <Route path='/volunteers' element={< VolunteersAccount/>}></Route>
          <Route path='/report-problems' element={< ReportProblems/>}></Route>
          <Route path='/lost-found-org' element={< LostFoundOrganizer/>}></Route>
        </Route>
      </Routes>
      </div>
    </div>

  );
}

export default App;
