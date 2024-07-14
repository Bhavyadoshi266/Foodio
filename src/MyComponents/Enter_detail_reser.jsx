import React from 'react'
import { Link } from 'react-router-dom'

export default function Enter_detail_reser() {
    return (
        <>
            <div className="enter_detail_reser">

                <p className="enter_detail_reser_header">Reservation</p>
                <p className="enter_detail_reser_text">Due to limited avaliability,we can hold this table for you for <span>5:00 minutes</span></p>

                <div className="enter_detail_reser_container">
                    <div className="enter_detail_reser_container_left" style={{ display: 'grid', gap: '10px' }}>
                        <p className='enter_detail_reser_container_left_header' style={{ fontSize: '25px', fontWeight: '700' }}>Data Order</p>
                        <div className="row" style={{ display: 'grid', gap: '25px' }}>
                            <div className="col-12">
                                <input type="text" placeholder='First name' className='enter_detail_input' />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder='Last name' className='enter_detail_input' />
                            </div>
                            <div className="col-12">
                                <input type="number" placeholder='Phone number' className='enter_detail_input' />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder='Email address' className='enter_detail_input' />
                            </div>
                            <div className="col-12">
                                <div class="dropdown">
                                    <select class="form-select" aria-label="Default select example" className='enter_detail_input'>
                                        <option selected>Select an occasion</option>
                                        <option value="1">Option1</option>
                                        <option value="2">Option2</option>
                                        <option value="3">Option3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <textarea name="" id="" rows='5' cols='100' placeholder='Add special request' className='enter_detail_input'></textarea>
                            </div>

                            <div className="col-12">
                                <Link to="/confirmresr"><button className='btn_res_right'>Confirm reservation</button></Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="enter_detail_reser_container_right">
                        <div className="reservation_detail">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <p style={{ fontSize: '25px' }} className='enter_detail_rese_icon'>Reservation detail</p>
                                    </div>
                                    <div className="col-5  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-regular fa-calendar-days"></i>
                                    </div>
                                    <div className="col-7  py-2">
                                        <p className='enter_detail_rese_time'>Saturday, 28 february 2022</p>
                                    </div>
                                    <div className="col-5  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-regular fa-clock"></i>
                                    </div>
                                    <div className="col-7  py-2">
                                        <p className='enter_detail_rese_time'>04:30 pm</p>
                                    </div>
                                    <div className="col-5  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-solid fa-person"></i>
                                    </div>
                                    <div className="col-7  py-2">
                                        <p className='enter_detail_rese_time'>2 people (Standar seating)</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="restaurant_info">
                            <p className="restaurant_info_header">Restaurant informations</p>
                            <p className="restaurant_info_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
