import React from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    return (
        <>
            <div className="checkout">
                <div className="common">
                    <div className="checkout_wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="checkout_wrapper_mainheader">Checkout</p>
                                </div>
                                <div className="col-12">
                                    <p className="checkout_wrapper_header">Shipping address</p>
                                </div>
                                <div className="col-5 my-3  mb-4">
                                    <input className="checkout_wrapper_input" type="text" placeholder='8502 Preston Rd.Gurugul' />
                                </div>
                                <div className="col-3 my-3 mb-4">
                                    <button className="checkout_wrapper_btn">Change</button>
                                </div>
                                <div className="col-12">
                                    <p className="checkout_wrapper_header">Order data</p>
                                </div>
                                <div className="col-6  my-3">
                                    <input className="checkout_wrapper_input" type="text" placeholder='First name' />
                                </div>
                                <div className="col-6  my-3">
                                    <input className="checkout_wrapper_input" type="text" placeholder='Last name' />
                                </div>
                                <div className="col-6  my-3">
                                    <input className="checkout_wrapper_input" type="" placeholder='Phone number' />
                                </div>
                                <div className="col-6  my-3">
                                    <input className="checkout_wrapper_input" type="email" placeholder='Email Address' />
                                </div>
                                <div className="col-12  my-3 mb-4">
                                    <textarea className="checkout_wrapper_input" name="" id="" rows='5' cols='100' placeholder='message'></textarea>
                                </div>
                                <div className="col-12">
                                    <p className="checkout_wrapper_header">Payment Method</p>
                                </div>
                                <div className="col-6  my-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            BCA Virtual Account
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6  my-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6  my-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Credit Card
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6  my-2">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Transfer Bank
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Link to="">
                                        <button className='btn_res_right py-3' style={{fontSize:'20px'}}>Order now</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
