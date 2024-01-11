import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@mui/material';
import Hero from './components/Hero/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<><Navbar /><Hero /></>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
