import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SelfStudy from './pages/SelfStudy';
import MultipleChoice from './pages/MultipleChoice';
import APCSPQuiz1 from './pages/APCSPQuiz1';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/tutoring',
      element: <Tutoring />,
    },
    {
      path: '/self-study',
      element: <SelfStudy />,
    },
    {
      path: '/multiple-choice',
      element: <MultipleChoice />,
    },
    {
      path: '/multiple-choice/apcsp/quiz1',
      element: <APCSPQuiz1 />,
    },
  ]);

  // Add path * for 404 page
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
