import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home'
import Page2 from './pages/Page2'

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page2" >Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/page2' element={< Page2 />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
