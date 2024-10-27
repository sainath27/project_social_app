import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as  Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Events from './components/Events';
import NavLayout from './components/NavbarLayout';
//import OpenMap from './components/OpenMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<NavLayout><Home /></NavLayout>} />
        <Route path="/events" element={<NavLayout><Events /></NavLayout>} />
        {/*<Route path="/map" element={<NavLayout><OpenMap /></NavLayout>} />*/}
      </Routes>
    </Router>
  );
}

export default App;
