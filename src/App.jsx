import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Koti.jsx';
import Kissakorttipeli from './Korttipeli.jsx'

export default function App() {
  return (
    
    <Router>
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/kissakorttipeli">Kissakorttipeli</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/kissakorttipeli" element={<Kissakorttipeli />}>
        </Route>
      </Routes>
      
      

    </Router>
    


  );
};

//export default App;

