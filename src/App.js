import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import APPractice from './pages/APPractice';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tutoring' element={<Tutoring />} />
          <Route path='/self-study' element={<SelfStudy />} />
          <Route path='/ap-practice' element={<APPractice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
