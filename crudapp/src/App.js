
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Campuses from './components/Campuses';
import Students from './components/Students';
import AddCampus from './components/AddCampus';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div>
      <nav className='app--nav'>
        <Router>
          <Routes className='routes'>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Campuses' element={<Campuses/>} />
            <Route exact path='/Students' element={<Students/>} />
          </Routes>
        </Router>
      </nav>
    </div>
  );
}

export default App;
