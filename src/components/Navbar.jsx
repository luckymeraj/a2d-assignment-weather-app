import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav class="navbar  fixed-top">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Offcanvas navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">A2D Forcasting</h5>

                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <form class="d-flex mt-2" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success " type="submit">Search</button>
                            </form>
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <NavLink class="nav-link active" aria-current="page" to='/dashboard' >Dashboard</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active" aria-current="page" to='/forcast' >Forcast report</NavLink>
                                </li>

                            </ul>
                            <button class="btn btn-outline-success" type="submit">Logout</button>


                        </div>
                    </div>
                </div>
            </nav>



         
        </>

    )
}

export default Navbar