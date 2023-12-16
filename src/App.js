import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
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
      <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
