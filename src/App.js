import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
import Wdashboard from './pages/Wdashboard';
import Wforcast from './pages/Wforcast';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Wdashboard/>} />
          <Route path='/forcast' element={<Wforcast />} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
