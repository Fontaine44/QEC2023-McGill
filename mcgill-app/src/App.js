import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/page2' element={< Page2 />}></Route>
      </Routes>
    </div>

  );
}

export default App;
