import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Plsdata from './components/Pls-data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Data from './components/Community-data';
import NFT from './components/NFT';





function App() {
  /**  */
  return (
    <div cla>
        <Navbar />
         <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Place-to-stay' element={<Plsdata />} />
            <Route path='/Community' element={<Data />} />
            <Route path='/Nfts' element={<NFT />} />
          </Routes>
         </Router>
         <Footer />
        
    </div>
  );
}

export default App;
