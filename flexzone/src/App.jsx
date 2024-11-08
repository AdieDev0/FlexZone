import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Meet from './Components/Meet';
import HoverCards from './Components/HoverCards';
import AnotherCards from './Components/AnotherCards';
import Works from './Components/Works';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
      <Meet/>
      <HoverCards/>
      <AnotherCards/>
      <Works/>
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
