import React from 'react';
import './Style.css';
import about_us1 from './Images/about_us1.png';
import about_us2 from './Images/about_us2.png';
import about_us3 from './Images/about_us3.png';
import Footer from './Footer';
import Navbar from './Navbar';


export default function About_Us(props) {
    return (
        <div>

            <div className="about_us">
                <div className="common">
                    <div className="wrapper">
                        <div class="mb-3">
                            <div class=" about_us_container row g-0 pb-5" >
                                <div class="col-md-6 " style={{ width: '49%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d0ccc7', padding: '52px', borderRadius: "50%" }}>
                                    <img src={about_us1} class="img-fluid rounded-start" alt="" style={{ width: '346px', margin: '45px' }} />
                                </div>
                                <div class="col-md-6" style={{ width: '39%', lineHeight: '2' }}>
                                    <div class=" card-body p-0">
                                        <h5 class="card-title pb-3" style={{ fontSize: '52px', fontFamily: 'Open Sans', fontWeight: '700' }}>About Our<br /><span style={{ color: '#F54748', fontWeight: '700', fontFamily: 'Open Sans' }}>Restaurant.</span></h5>
                                        <p class="text pb-3" >This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</p>
                                        <div className="btn_main">
                                            <button className='btn_order'>Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="about_us_container row g-0 py-5">

                                <div class="col-md-6" style={{ width: '39%', lineHeight: '2' }}>
                                    <div class="card-body p-0">
                                        {/* <h5 class="card-title pb-3" style={{fontSize:'52px', fontFamily:'Open Sans',fontWeight:'700'}}>About Our<br /><span style={{ color: '#F54748', fontWeight: '700', fontFamily: 'Open Sans' }}>Restaurant.</span></h5> */}
                                        <p class="text pb-3" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    </div>
                                </div>
                                <div class="col-md-6" style={{ width: '49%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d0ccc7', padding: '52px', borderRadius: "50%" }}>
                                    <img src={about_us2} class="img-fluid rounded-start" alt="" style={{ width: '346px', margin: '45px' }} />
                                </div>
                            </div>

                            <div class="about_us_container row g-0 pb-5" >
                                <div class="col-md-6 " style={{ width: '49%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                    <img src={about_us3} class="img-fluid rounded-start" alt="" style={{ width: '467.04px', margin: '45px', height: '629px', objectFit: 'cover' }} />
                                </div>
                                <div class="col-md-6" style={{ width: '50%', lineHeight: '2' }}>
                                    <div class=" card-body p-0">
                                        <h5 class="card-title pb-3" style={{ fontSize: '52px', fontFamily: 'Open Sans', fontWeight: '700' }}><span style={{ color: '#F54748', fontWeight: '700', fontFamily: 'Open Sans' }}>Owner</span> & Executive <br /> Chef</h5>
                                        <p class="text pb-3" style={{ fontSize: "40px" }}>Ismail Marzuki</p>
                                        <p class="text pb-3" style={{ fontSize: "30px", fontWeight: '300' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
