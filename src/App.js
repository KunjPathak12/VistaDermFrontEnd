import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import Home from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
      </Routes>
      {/* <Home /> */}
    </Router>
  );
}

export default App;