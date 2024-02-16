import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
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
      
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<><Navbar /><Hero /><Featured /><Trending /><Footer /></>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
