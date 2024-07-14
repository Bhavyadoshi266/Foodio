import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="common">
                    <div className="wrapper">
                        <p className='contact_header' style={{ fontSize: '80px' }}>Contact us</p>
                        <p className='contact_text'>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>

                        <div className="contact_container" style={{padding:'25px 0'}}>
                            <div className="row">
                                <div className=" col-6">
                                    <div className='map'>

                                    </div>
                                </div>
                                <div className=" col-6">
                                    <div className="contact_user_detail">
                                        <form action="">
                                            <input className="contact_user_detail_input" type="text" placeholder='First name' />
                                            <input className="contact_user_detail_input" type="text" placeholder='Last name' />
                                            <input className="contact_user_detail_input" type="email" placeholder='Email address' />
                                            <input className="contact_user_detail_input" type="text" placeholder='Subject' />
                                            <textarea className="contact_user_detail_input" name="" col='10' rows='5' id=""></textarea>
                                        </form>
                                        <button className='btn_res_right'>Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
