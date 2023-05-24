import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import MultipleChoice from './pages/MultipleChoice';
import Quiz from './pages/Quiz';
import APCSPQuiz1 from './pages/APCSPQuiz1';
import Result from './components/Result';
import { Component } from 'react';
import update from 'react-addons-update';

class App extends Component {
  // Add path * for 404 page
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tutoring' element={<Tutoring />} />
            <Route path='/self-study' element={<SelfStudy />} />
            <Route path='/multiple-choice' element={<MultipleChoice />} />
            <Route
              path='/multiple-choice/apcsp/quiz1'
              element={<APCSPQuiz1 />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
