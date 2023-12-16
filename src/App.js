import './App.css';
import Signup from './components/Singup/Signup';
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
      </Routes>
    </Router>
    </>
  );
}

export default App;
