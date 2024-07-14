import React from 'react';
import img1 from './Images/img_illustration.png';


export default function Corosel_one() {
    return (
        <div className='Corosel_one'>
            <div className="wrapper">
                <div className="corosel_one">
                    <div class="row featurette">
                        <div className="corosel_text col-md-7">
                            <h1 className="featurette-heading">Best Restaurant <br /> In <span style={{ color: '#F54748',fontWeight:'600',fontFamily:'Open Sans' }}>Town.</span></h1>
                            <p className='text'>We provide best food in town, we provide home <br /> delivery and dine in services.</p>
                            <div className="btn_main">
                                <button className='btn_order'>Order now</button>
                                <button className='btn_reservation'>Reservation</button>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <img src={img1} alt="img1" width='595' height='505' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
