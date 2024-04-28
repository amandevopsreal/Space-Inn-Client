import React, { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Featured from './components/Featured/Featured';
import Trending from './components/Trending/Trending';
import LocationState from './context/location/LocationState';
import Property from './components/Property/Property';
import Buy from './components/Buy/Buy';
import Rent from './components/Rent/Rent';
import Sell from './components/Sell/Sell';
import Dashboard from './components/Dashboard/Dashboard';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <LocationState>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<><Navbar /><Hero /><Featured /><Trending /><Articles/><Footer /></>} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/buy" element={<><Navbar /><Buy /><Footer /></>} />
            <Route exact path="/rent" element={<><Navbar /><Rent /><Footer /></>} />
            <Route exact path="/sell"
              element={localStorage.getItem("token")
                ? <><Navbar /><Sell /><Footer /></>
                : <Navigate to="/login" replace />
              } />
            <Route exact path="/property/:_id" element={<><Navbar /><Property /><Footer /></>} />
            <Route exact path="/dashboard" element={<><Navbar /><Dashboard /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </LocationState>
  );
}

export default App;
