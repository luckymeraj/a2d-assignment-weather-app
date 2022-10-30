import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Wdashboard from './pages/Wdashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Wdashboard/>} />

        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
