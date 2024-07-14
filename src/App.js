import './App.css';
import Homepage from './MyComponents/Homepage';
import Navbar from './MyComponents/Navbar';
import Menu from './MyComponents/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About_Us from './MyComponents/About_Us';
import Order_Online from './MyComponents/Order_Online';
import Reservation from './MyComponents/Reservation';
import Contact from './MyComponents/Contact';
import Footer from './MyComponents/Footer';
import Enter_detail_reser from './MyComponents/Enter_detail_reser';
import Checkout from './MyComponents/Checkout';
import Confirm_resr from './MyComponents/Confirm_resr';
import Card_O_O from './MyComponents/Card_O_O';
import order_online1 from './MyComponents/Images/Order_Online1.png'
import React, { useState } from 'react';
// import Xyz from './MyComponents/Xyz';
import Cart from './MyComponents/Cart';


function App() {

  return (
    <>
      {/* <Enter_detail_reser/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="aboutus" element={<About_Us />} />
          <Route path="orderonline" element={<Order_Online/>} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="orderres" element={<Enter_detail_reser />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmresr" element={<Confirm_resr />} />
          <Route path="orderonline" element={<Card_O_O />} />
          <Route path="cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Homepage/> */}
      {/* <Menu/> */}
    </>
  );
}

export default App;
