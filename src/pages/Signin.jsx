import React from 'react'
import './Signin.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" })
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
  const formSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data
    const getUserArr = localStorage.getItem('userDetails')
    if (getUserArr && getUserArr.length) {
      const userData = JSON.parse(getUserArr)
      const userLogin = userData.filter((el, idx) => {
        return (el.email === email && el.password === password)
      });
      if (userLogin.length === 0) {
        alert("invalid email or password")
      }
      else {
        alert("Sign-In Successfully");
        navigate('/dashboard')

      }
    }
    else {
      alert("Please Sign-Up first")
      navigate('/home')
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
          <input type='email' className='inp' name='email' onChange={inputEvent} placeholder='email' required autoComplete='off' />
          <input type='password' className='inp' name='password' onChange={inputEvent} placeholder='Password' required autoComplete='off' />
          <button type='submit' className='btn'>Sign In</button>
          <br />
          <p className='already'>Don't have account? <span><NavLink to='/home'>Sign Up</NavLink></span><br /><span><NavLink to='/confirmEmail'>Forgot password?</NavLink></span></p>
        </div>

      </form>

    </>
  )
}

export default Signin