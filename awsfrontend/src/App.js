import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login';
import SignupForm from './Components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
