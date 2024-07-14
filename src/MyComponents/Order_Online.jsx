import React, { useState, useContext } from 'react';
import trash from './Images/trash.svg';
import order_online1 from './Images/Order_Online1.png';
import menu_dish5 from './Images/menu_dish5.png'
import menu_dish6 from './Images/menu_dish6.png'
import menu_dish2 from './Images/menu_dish2.png'
import menu_dish4 from './Images/menu_dish4.png'
// import dark_choco from './Images/dark_choco.jpeg'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Counter from './Counter'

export default function Order_Online(props) {
    const [data, setdata] = useState([
        {
            id: '1',
            imgsrc: menu_dish5,
            dishname: 'Margerita',
            type: "Pizza",
            price: "$12.05",
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '2',
            imgsrc: order_online1,
            dishname: 'Dark chocolate',
            type: "Desert",
            price: '$10.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '3',
            imgsrc: menu_dish6,
            dishname: '7 seven cheesy',
            type: "Pizza",
            price: '$7.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '4',
            imgsrc: menu_dish2,
            dishname: 'Spaghetti',
            type: "Pasta",
            price: '$22.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '5',
            imgsrc: order_online1,
            dishname: 'Chikoo shake',
            type: "Drink",
            price: '$15.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '6',
            imgsrc: menu_dish4,
            dishname: 'Capellini',
            type: "Pasta",
            price: '$17.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '7',
            imgsrc: menu_dish2,
            dishname: 'Farfalle',
            type: "Pasta",
            price: '$13.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '8',
            imgsrc: order_online1,
            dishname: 'Brownie',
            type: "Desert",
            price: '$5.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        {
            id: '9',
            imgsrc: order_online1,
            dishname: 'Mint Mojito',
            type: "Drink",
            price: '$25.05',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.'
        },
        // Add more items as needed
    ]);

    const { cart, addToCart, onDelete } = useContext(CartContext);

    // const [cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     const updatedCart = [...cart, item];
    //     setCart(updatedCart);
    // };

    // const onDelete = (id) => {
    //     setCart(cart.filter(item => item.id !== id));
    // };

    const [selectBtn, setselectBtn] = useState();

    const handleFilterClick = (filter) => {
        setselectBtn(filter);
    };

    const [voucherApplied, setVoucherApplied] = useState(false);

    const applyVoucher = () => {
        setVoucherApplied(!voucherApplied);
    };

    const filteredDishes = selectBtn ? data.filter(item => item.type === selectBtn) : data;

    return (
        <div>
            <div className="order_online">
                <div className="common">
                    <div className="wrapper">
                        <div className="Order_Online_Contanier">
                            <p className='Order_online_header'>Menu</p>
                            <div className="Order_Online_menu">
                                <button className="Order_Online_btn" onClick={() => handleFilterClick(null)}>All Category</button>
                                <button className="Order_Online_btn" onClick={() => handleFilterClick("Pasta")}>Pasta</button>
                                <button className="Order_Online_btn" onClick={() => handleFilterClick("Pizza")}>Pizza</button>
                                <button className="Order_Online_btn" onClick={() => handleFilterClick("Desert")}>Desert</button>
                                <button className="Order_Online_btn" onClick={() => handleFilterClick("Drink")}>Drink</button>
                            </div>

                            <p className='Order_Onlline_Menu_itemname'>{selectBtn} </p>

                            <div className="Order_Onlline_Menu_Contanier_Cont">
                                <div className="Order_Onlline_Menu_Contanier_left">
                                    <div className="grid_class">
                                        {filteredDishes.map((item) => (
                                            <div className="contanier" key={item.id}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="card">
                                                            <img src={item.imgsrc} alt=".." width={'196px'} height={'196px'} />
                                                            <h5 className="card-title py-4 pb-1" style={{ fontSize: '20px', fontWeight: '600' }}>{item.dishname}</h5>
                                                            <p className="card-text" style={{ fontSize: '12px', fontWeight: '400', lineHeight: '2', color: '#59442b' }}>{item.Description}</p>
                                                            <p className='price' style={{ fontSize: '18px' }}>{item.price}</p>
                                                            {/* <Counter itemId={item.id} /> */}
                                                            <button className='card_o_o_add' onClick={() => addToCart(item)}>Add to Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="Order_Onlline_Menu_Contanier_right">
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
                                                                    <p className='coupon_code m-0'>FREETOEAT</p>
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
                                                                    $78.3
                                                                </div>
                                                                <div className="col-9 py-2" >
                                                                    <p className="m-0" style={{ fontWeight: '600' }}>Tax fee</p>
                                                                </div>
                                                                <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                                                                    $3.5
                                                                </div>
                                                                <div className="col-8 py-2">
                                                                    <p className="m-0" style={{ fontWeight: '600' }}>Voucher</p>
                                                                </div>
                                                                <div className="col-4 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                                                                    {voucherApplied ? "-$5.00" : ""}
                                                                </div>
                                                                <div className="col-9 py-2">
                                                                    <p className="m-0" style={{ fontWeight: '600' }}>Total</p>
                                                                </div>
                                                                <div className="col-3 p-0" style={{ fontWeight: '500', color: '#311f09' }}>
                                                                    $76.8
                                                                </div>

                                                                <div className="col-12 px-0 pt-5 pb-0">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
