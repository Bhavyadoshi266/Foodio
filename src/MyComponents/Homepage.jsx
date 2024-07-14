import React from 'react';
import './Style.css';
import Navbar from './Navbar';
import Corosel_one from './Corosel_one';
import Corosel_two from './Corosel_two';
import Menu from './Menu';
import Chef from './Chef';
import chef1 from './Images/chef1.png';
import chef2 from './Images/chef2.png';
import chef3 from './Images/chef3.png';
import Reviews from './Reviews';
import Order_Reser from './Order_Reser';
import Footer from './Footer';
import About_Us from './About_Us';



export default function Header() {
    return (
        <>
            <div className="">
                {/* <Navbar/> */}
                <Corosel_one />
            </div>
            <Corosel_two />

            <Menu />

            <div className="chef_section">
                <div className="common">
                    <div className="wrapper">
                        <h1 className='chef_header'>Our Popular Chef</h1>
                        <div className="chef">
                            <Chef src={chef1} chefname='Betran Komar' chefpos='Head Chef' color1="rgb(27 22 29)"/>
                            <Chef src={chef2} chefname='Ferry Sauwi' chefpos='Chef' color1="#ff8900"/>
                            <Chef src={chef3} chefname='Iswan Dracho' chefpos='Chef' color1="rgb(157 101 66 )" />
                        </div>
                        <div className="chef_viewall">
                            <button className="viewall">View all</button>
                        </div>
                    </div>
                </div>
            </div>

            <Reviews />

            <Order_Reser />

         
        </>
    )
};