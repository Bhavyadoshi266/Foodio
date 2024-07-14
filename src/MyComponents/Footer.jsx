import React from 'react';
import logo from './Images/logo.svg';


export default function Footer() {
  return (
    <div className='footer' style={{ padding: '70px 0 ', background: 'rgb(27 25 25)', color: '#ffffff' }}>
      <div className="wrapper">
        <div className="main_footer" style={{display:'flex',justifyContent:'space-between',fontSize:'20px'}}>
          <div className="logo_footer" style={{maxWidth:'32%',width:'100%',gap:'42px',display:'flex',alignItems:'start',flexDirection:'column'}}>
            <img src={logo} alt="logo" style={{ color: '#ffffff' ,width:'128px',height:'51px'}} />
            <p className="logo_footer_text">Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
            <div className="footer_social_media">
              <i class="fa-brands fa-skype"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>

          <div className="footer_pages" style={{maxWidth:'12%',width:'100%',gap:'31px',marginTop:'5px',display:'flex',alignItems:'start',flexDirection:'column'}}>
            <p className='footer_header'>Page</p>
            <a href="https://www.google.co.in/" className="footer_links" >Home</a>
            <a href="" className="footer_links">Menu</a>
            <a href="" className="footer_links">Order Online</a>
            <a href="" className="footer_links">Catering</a>
            <a href="" className="footer_links">Reservation</a>
          </div>

          <div className="footer_info" style={{maxWidth:'14%',width:'100%',gap:'31px',marginTop:'5px',display:'flex',alignItems:'start',flexDirection:'column'}}>
            <p className='footer_header'>Information</p>
            <a href="" className="footer_links">About Us</a>
            <a href="" className="footer_links">Testimonial</a>
            <a href="" className="footer_links">Event</a>
          </div>

          <div className="footer_address" style={{maxWidth:'26%',width:'100%',gap:'31px',marginTop:'5px',display:'flex',alignItems:'start',flexDirection:'column',}}>
            <p className='footer_header'>Get in touch</p>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p>bhavya@foodio.com</p>
            <p>9974373589</p>
          </div>
        </div>
      </div>
    </div>
  )
}
