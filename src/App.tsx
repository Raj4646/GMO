import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/second-page" element={<SecondPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
