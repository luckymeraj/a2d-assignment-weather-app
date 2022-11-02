import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const ConfirmPassword = () => {

    const [data, setData] = useState({ password: "",cPasswword:"" })
    const [storageData,setStorageData]=useState([])

  const navigate=useNavigate()
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
    }
      const formSubmit = (e) => {
        e.preventDefault();
        const {password,cPassword}=data
        const getUserArr = localStorage.getItem('userDetails')
        if (getUserArr && getUserArr.length) {
          const userData = JSON.parse(getUserArr)

            if(password!==cPassword){
                alert('New Password & Confirm Password should be same')
            }
         if(password===cPassword) {
                const newData={email:userData[0].email,password:password}
                localStorage.removeItem("userDetails")
                localStorage.setItem("userDetails",JSON.stringify([...storageData,newData]))
                alert("Password reset successfully")
                navigate('/signin')
    
        
              }





        //   else if(password.length===cPassword.length) {
        //     const newData={emai:userLogin.email,password:cPassword}
        //     //   alert("Login Successfully");
        //     //   navigate('/dashboard')
        //     localStorage.removeItem("userDetails")
        //     localStorage.setItem("userDetails",JSON.stringify([...storageData,newData]))

    
        //   }
        }
    
      };
    


  return (
<>

<form onSubmit={formSubmit}>
        <p className='welcome'>Welcome to A2D Weather</p>

            <div className="imgContainer">
                <img src='https://a2d.co.in/wp-content/uploads/2022/01/cropped-SQ-Black-512x512-1.jpg' alt='avatar' className='avatar'/>
            </div>
            <div className="container">
                <input type='password' className='inp' name='password' onChange={inputEvent} required placeholder='New Password' autoComplete='off'/>
                <input type='password' className='inp' name='cPassword' onChange={inputEvent} required placeholder='Confirm Password' autoComplete='off'/>
                <button type='submit' className='btn'>Submit</button>
                <br/>
                {/* <p className='already'>Already have account? <span><NavLink to='/signin'>Sign In</NavLink></span></p> */}

            </div>
            
        </form>
</>
  )
}

export default ConfirmPassword