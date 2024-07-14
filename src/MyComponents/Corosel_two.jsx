import React from 'react';
import dish2 from './Images/dish2.png'
import dish2_1 from './Images/dish2_1.png'
import dish2_2 from './Images/dish2_2.png'
import dish2_3 from './Images/dish2_3.png'

export default function Corosel_two() {
    return (
        <div>
            <div className=" corosel_two">
                <div className="wrapper">
                    <div class="row featurette w-100" >
                        <div class="col-md-5 order-md-1" style={{ maxWidth: '56%', width: '100%', lineHeight: '1.7' }}>
                            {/* <img src={dish2_1} alt="" height='200' width='175' style={{ bottom: '-588px', left: '124px', zIndex: '1', objectFit: 'cover', position: 'absolute' }} /> */}
                            <img src={dish2} alt="dish2" width='598' height='559' style={{ objectFit: 'cover', position: 'relative' }} />
                            {/* <img src={dish2_2} alt="" height='121' width='117' style={{ bottom: '-10px', left: '420px', zIndex: '1', objectFit: 'cover', position: 'absolute' }} /> */}
                            {/* <img className='def' src={dish2_2} alt="" /> */}
                            {/* <img src={dish2_3} alt="" height='172' width='158' style={{ bottom: '-320px', left: '680px', zIndex: '1', objectFit: 'cover', position: 'absolute' }} /> */}
                        </div>
                        <div class="corosel_text col-md-7 order-md-2 " style={{ maxWidth: '44%', width: '100%', lineHeight: '2', fontFamily: 'Open Sans' }}>
                            <h1 class="featurette-heading">Our Most <br />Popular <span class="text" style={{ color: '#F54748', fontSize: '80px', fontFamily: 'Open Sans' }}>Dish.</span></h1>
                            <p class="text">This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</p>
                            <div className="btn_main">
                                <button className='btn_order'>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
