import React from 'react';
import logo from './Images/logo.svg';
import cart from './Images/cart.svg';
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <div className='navbar main_page ' style={{ backgroundImage: "linear-gradient(180deg, #f447482b, #f5474800)" }}>

                <div className="wrapper">
                    <div class="container">
                        <header class="main_bar ">
                            <img src={logo} alt="logo" />
                            <ul class="nav">
                                <li><Link to="homepage" class="nav-link px-2 link-dark">Home</Link></li>
                                <li><Link to="/menu" class="nav-link px-2 link-dark">Menu</Link></li>
                                <li><Link to="/aboutus" class="nav-link px-2 link-dark">About Us</Link></li>
                                <li><Link to="/orderonline" class="nav-link px-2 link-dark">Order Online</Link></li>
                                <li><Link to="/reservation" class="nav-link px-2 link-dark">Reservation</Link></li>
                                <li><Link to="/contact" class="nav-link px-2 link-dark">Contact Us</Link></li>
                            </ul>

                            <div class="col-md-2 text-end">
                                <Link to="/cart">
                                    <div className="cart">
                                        <img src={cart} alt="logo" />
                                    </div>
                                </Link>

                                <button className="login">Login in</button>

                            </div>
                        </header>
                    </div>
                </div>

            </div>

            <Outlet />
        </>
    )
}
