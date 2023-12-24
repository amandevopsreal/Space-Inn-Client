import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
