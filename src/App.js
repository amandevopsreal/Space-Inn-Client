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
import Featured from './components/Featured/Featured';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route exact path="/" element={<><Navbar /><Hero /><Featured/><Trending /></>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<><Navbar /><Hero /><Featured /></>} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
