import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = ({ findCity }) => {
    const [city, setCity] = useState();
    const [searchCity, setSearchCity] = useState()
    const navigate = useNavigate()
    const onClickHandler = (e) => {
        e.preventDefault()
        // console.log(city);
        setSearchCity(city)
    }
    findCity(searchCity)
    const logoutHandler = () => {
        // localStorage.removeItem("userDetails")
        alert("Log-Out Successfully")

        navigate('/signin')
    }

    return (
        <>
            <nav className="navbar  fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <img src='https://a2d.co.in/wp-content/uploads/2022/01/cropped-SQ-Black-512x512-1.jpg' alt='avatar' className='avatar' style={{ height: '70px', width: '70px' }} />

                            <form className="d-flex mt-2 navForm" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="city" style={{width:'80%' ,borderRadius:'30px'}} onChange={(e) => { setCity(e.target.value) }} />
                                <button className="btnn btn-outline-success "  style={{width:'20%' ,borderRadius:'30px'}} type="submit" onClick={onClickHandler}><i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to='/dashboard' style={{ color: "#36abf3", fontSize: "1.5em" }} >Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to='/forcast' style={{ color: "#36abf3", fontSize: "1.5em" }} >Forcast report</NavLink>
                                </li>

                            </ul>
                            <button className="btnn btn-outline-success" type="submit" onClick={logoutHandler} >Logout</button>
                            <p style={{ textAlign: "center" }}> A2D Technology <br />Copyright © 2022 All Right Reserved</p>


                        </div>
                    </div>
                </div>
            </nav>




        </>

    )
}

export default Navbar