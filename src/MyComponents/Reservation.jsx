import React from 'react';
import reservation1 from './Images/reservation1.png';
import './Style.css';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";

import Enter_detail_reser from './Enter_detail_reser';


export default function Reservation(props) {

   

    return (
        <>
            <div className="reservation">
                <div className="common">
                    <div className="wrapper">
                        <div className="reservation_contanier">

                            <div className="reservation_left">
                                <img src={reservation1} alt='...' width={"556px"} height={'657px'}/>
                            </div>
                            <div className="reservation_right">
                                <p>Book a table</p>
                                <div className="reservation_times">
                                    <div class="dropdown">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Date</option>
                                            <option value="1">Option1</option>
                                            <option value="2">Option2</option>
                                            <option value="3">Option3</option>
                                        </select>
                                    </div>

                                    <div class="dropdown">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Time</option>
                                            <option value="1">Option1</option>
                                            <option value="2">Option2</option>
                                            <option value="3">Option3</option>
                                        </select>
                                    </div>

                                    <div class="dropdown">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Party size</option>
                                            <option value="1">Option1</option>
                                            <option value="2">Option2</option>
                                            <option value="3">Option3</option>
                                        </select>
                                    </div>

                                </div>
                                <Link to="/orderres">
                                <button className='btn_res_right'>Book now</button>
                                </Link>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {props.about_us_footer ? <Footer /> : ""}

            <Outlet/>

        </>
    )
}
