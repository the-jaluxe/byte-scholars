import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import MultipleChoice from './pages/MultipleChoice';

// Add path * for 404 page
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tutoring' element={<Tutoring />} />
          <Route path='/self-study' element={<SelfStudy />} />
          <Route path='/multiple-choice' element={<MultipleChoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
