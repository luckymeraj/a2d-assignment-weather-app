import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,BrowserRouter,Routes} from "react-router-dom";

  import Signin from './pages/Signin';
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}  />
    <Route path='/home'element={<Home/>}  />

    <Route path='/signin'element={<Signin/>}  />

   </Routes>
   </BrowserRouter>
      

    </>

  );
}

export default App;
