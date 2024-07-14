
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import trash from './Images/trash.svg';
import { CartContext } from './CartContext';


export default function Cart() {
  const { cart, addToCart, onDelete } = useContext(CartContext);


  // const onDelete = (id) => {
  //   setCart(cart.filter(item => item.id !== id));
  // };

  // const [cart, setCart] = useState([]);

  const [voucherApplied, setVoucherApplied] = useState(false);

  const applyVoucher = () => {
    setVoucherApplied(!voucherApplied);
  };

  return (

    <div>
      <div className="common">
        <div className="wrapper">
          <p className='headerfor_o_o pb-5'>Order List</p>
          <div className="cartfor_o_o_continer">
            {cart.length > 0 ? (
              <div className="container">
                <div className="cartfor_o_o row">
                  {cart.map((cartItem) => (
                    <div className="container" key={cartItem.id}>
                      <div className="cartfor_o_o  row">
                        <div className="col-9 pt-4">
                          <p className="m-0" style={{ fontWeight: '600' }}>
                            {cartItem.dishname}
                          </p>
                        </div>

                        <div className="col-3 pt-4 ">
                          <img className="delete" src={trash} alt="" height='24px' style={{ cursor: 'pointer' }} onClick={() => onDelete(cartItem.id)} />
                        </div>

                        <div className="col-9 py-3 pb-2 px-0">
                          <p className='my-0' style={{ fontWeight: '500', color: '#311f09' }}>{cartItem.price}</p>
                        </div>

                        {/* <div className="col-3 py-3 pb-2 px-0" style={{ fontWeight: '500', color: '#311f09' }}>
                           Total
                        </div> */}
                      </div>
                    </div>
                  ))}
                  {cart.length > 0 && (
                    <div className="total_card">
                      <div className="row">
                        <div className="col-12 py-4 pb-3" style={{ borderTop: '1px dashed rgb(209 204 204)', width: '100%' }}>
                          <p className="m-0" style={{ fontWeight: '600' }}>Voucher Code</p>
                        </div>
                        <div className="col-9 py-4 pt-0">
                          <p className='coupon_code m-0' style={{backgroundColor:"#53a5e0",color:"#ffffff"}}>FREETOEAT</p>
                        </div>
                        <div className="col-3 px-0 py-4 pt-0" onClick={() => applyVoucher()} style={{ cursor: 'pointer' }}>
                          <i className="add fa-solid fa-plus"></i>
                        </div>
                        <div className="col-12 py-3" style={{ borderTop: '1px dashed rgb(209 204 204)', width: '100%' }}>
                        </div>
                        <div className="col-9 py-2 ">
                          <p className="m-0" style={{ fontWeight: '600' }}>Subtotal</p>
                        </div>
                        <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                          $78.30
                        </div>
                        <div className="col-9 py-2" >
                          <p className="m-0" style={{ fontWeight: '600' }}>Tax fee</p>
                        </div>
                        <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                          $3.50
                        </div>
                        <div className="col-9 py-2">
                          <p className="m-0" style={{ fontWeight: '600' }}>Voucher</p>
                        </div>
                        <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                          {voucherApplied ? "-$5.00" : ""}
                        </div>
                        <div className="col-9 py-2">
                          <p className="m-0" style={{ fontWeight: '600' }}>Total</p>
                        </div>
                        <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                          $76.8
                        </div>

                        <div className="col-10 px-0 pt-5 pb-0">
                          <Link to="/checkout"> <button className="btn_checkout">Checkout</button></Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="empty-cart-message">Order list is empty.</p>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
