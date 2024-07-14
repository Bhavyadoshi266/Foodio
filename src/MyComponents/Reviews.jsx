import React from 'react';
import reviewerimg from './Images/img_reviewer.png'

export default function Reviews() {
    return (
        <div className='Reviews_section'>
            <div className="common">
                <div className="wrapper">
                    <h1 className="review_header" style={{ textAlign: 'center', fontSize: '52px', fontWeight: '700', marginBottom: '43px', fontFamily: 'open sans' }}>What Our Customers Say</h1>
                    <div className="reviews_main">
                        <div className="arrow_left_reviews"><i class="fa-solid fa-angle-left"></i></div>
                        <div className="reviews_text">
                            {/* <span style={{ fontWeight: '700', fontSize: '50px', alignItems: 'end' }}>''</span><br /> */}
                            <h3 className="reviews_main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </h3>
                            {/* <br /><span style={{ fontWeight: '700', fontSize: '50px', textAlign: 'end' }}>,,</span> */}
                            <div className="profileofreviewer">
                                <img src={reviewerimg} alt="" className='profileofreviewer_photo' />
                                <div className="profileofreviewer_names">
                                    <h3 style={{ fontSize: '24px', fontFamily: 'poppins', fontWeight: '600', }}>Starla Virgoun</h3>
                                    <h6 style={{ fontSize: '16px', fontFamily: 'poppins', color: '#5c4529', fontWeight: '400', textAlign: 'center' }}>Financial advisor</h6>
                                </div>
                            </div>
                        </div>
                        <div className="arrow_right_reviews"><i class="fa-solid fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
