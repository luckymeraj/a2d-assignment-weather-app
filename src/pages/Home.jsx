import React from 'react'
import './Home.css'
import { useState } from 'react'
// import ava from '../images/avatar.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [storageData, setStorageData] = useState([])
  const navigate = useNavigate()
  const inputEvent = (event) => {
    const { name, value } = event.target;



    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });


  };

  // const {email,password}=data
  const formSubmit = (e) => {
    e.preventDefault();
    if (data.password.length < 8||data.password.length >20) {
      alert("Password must be in this manner: min length=8, max length=20")
    }
    
    else {

      localStorage.setItem("userDetails", JSON.stringify([...storageData, data]))
      alert("Sign Up successfully. Please sign In")
      navigate('/signin')
    }


  };


  return (
    <>
      <form onSubmit={formSubmit}>
        <p className='welcome'>Welcome to A2D Weather</p>

        <div className="imgContainer">
          <img src='https://a2d.co.in/wp-content/uploads/2022/01/cropped-SQ-Black-512x512-1.jpg' alt='avatar' className='avatar' />
        </div>
        <div className="container">
          <input type='email' className='inp' name='email' onChange={inputEvent} required placeholder='email' autoComplete='off' />
          <input type='password' className='inp' name='password' onChange={inputEvent} required placeholder='Password' autoComplete='off' />
          <button type='submit' className='btn'>Sign Up</button>
          <br />
          <p className='already'>Already have account? <span><NavLink to='/signin'>Sign In</NavLink></span></p>

        </div>

      </form>

    </>
  )
}

export default Home