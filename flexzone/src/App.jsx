import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className='font-Comfortaa'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
