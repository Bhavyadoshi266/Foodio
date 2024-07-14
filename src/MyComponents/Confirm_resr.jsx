import React from 'react';
import confirm_resr1 from './Images/confirm_resr1.png'
import confirm_resr2 from './Images/confirm_resr2.png'


export default function Confirm_resr() {
    return (
        <>
            <div className="confirm_reser">
                {/* <div className="common"> */}
                <div className="confirm_reser_wrapper">
                    <p className='confirm_reser_header m-0'>Reservation</p>
                    <div className="confirm_reser_conf pb-5">
                        <img src={confirm_resr1} alt="" width='1112px' height='232px' object-cover />
                        <div className="confirm_reser_conf_container">
                            <p className="pb-2" style={{ fontSize: '40px', fontWeight: '600' }}>Reservation has been confirmed</p>
                            <p className="" style={{ fontWeight: '400' }}>The confirmation result has been sent to your email</p>
                            <p className="" style={{ fontWeight: '400' }}>Booking ID : #123456</p>
                        </div>

                    </div>
                    <div className="confirm_reser_container pb-5">
                        <div className="row">
                            <div className="col-4">
                                <div class="col-12 " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'antiquewhite', padding: '52px', borderRadius: "50%" }}>
                                    <img src={confirm_resr2} class="img-fluid rounded-start" alt="" style={{ width: '346px', }} />
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="col-12 pb-2">
                                    <p style={{ fontSize: '25px' }} className='enter_detail_rese_icon'>Reservation detail</p>
                                </div>

                                <div className="confirm_reser_flex pb-3" >
                                    <div className="col-4  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-regular fa-calendar-days"></i>
                                    </div>
                                    <div className="col-8  py-2">
                                        <p className='enter_detail_rese_time'>Saturday, 28 february 2022</p>
                                    </div>
                                </div>

                                <div className="confirm_reser_flex pb-3">
                                    <div className="col-4  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-regular fa-clock"></i>
                                    </div>
                                    <div className="col-8  py-2">
                                        <p className='enter_detail_rese_time'>04:30 pm</p>
                                    </div>
                                </div>

                                <div className="confirm_reser_flex">
                                    <div className="col-4  py-2">
                                        <i style={{ fontSize: '30px' }} class="enter_detail_rese_icon fa-solid fa-person"></i>
                                    </div>
                                    <div className="col-8  py-2">
                                        <p className='enter_detail_rese_time'>2 people (Standar seating)</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-4" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="col-12 pb-3">
                                    <button className='modify'>Modify</button>
                                </div>

                                <div className="col-12">
                                    <button className='cancel'>Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}
