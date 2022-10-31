import React from 'react'
import './Wdashboard.css'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'


const Wdashboard = () => {
  return (
    <>
      <Navbar />
      

 <div className="col-md-4 col-10 mx-auto"  >
      <div className="card" >
      <p className="card-text" id='card-text' >
            London
          </p>
        <img src='https://freepngimg.com/thumb/categories/2275.png' className="card-img-top" id='card-img-top'  />
        <div className="card-body">
          <h5 className="card-title" id='card-title' >30 ℃</h5>
         
          <NavLink to="/forcast" className="btn btn-primary">
            Forcast
          </NavLink>
        </div>
      </div>
    </div>



      
    </>
  )
}

export default Wdashboard