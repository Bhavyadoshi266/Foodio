import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="common">
                    <div className="wrapper">
                        <p className='contact_header' style={{ fontSize: '80px' }}>Contact us</p>
                        <p className='contact_text'>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>

                        <div className="contact_container" style={{ padding: '25px 0' }}>
                            <div className="row">
                                <div className=" col-6">
                                    <div className='map'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.562201089913!2d72.55774217509237!3d23.03984157916174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84891be486ff%3A0xb8549fefd5a92406!2sExcel%20PTP!5e0!3m2!1sen!2sin!4v1721043506713!5m2!1sen!2sin"
                                            width="500" height="550" style={{ borderRadius: "15px", padding: "10px 0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
