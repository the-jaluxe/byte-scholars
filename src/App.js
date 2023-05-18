import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import MultipleChoice from './pages/MultipleChoice';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
    };
  }

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
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
