import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import APPractice from './pages/APPractice';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/tutoring' element={<Tutoring />} />
          <Route path='/self-study' element={<SelfStudy />} />
          <Route path='/ap-practice' element={<APPractice />} />
        </Routes>
      </NavBar>
    </Router>
  );
}

export default App;
