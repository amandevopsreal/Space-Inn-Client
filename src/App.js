import './App.css';
import Signup from './components/Singup/Signup';
import Login from './components/Login/Login';
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
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
