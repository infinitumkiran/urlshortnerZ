import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
    <Router>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
    </Router>
  </>
  );
}

export default App; 