import React from 'react';
import './Style.css';

export default function Card(props) {
    // console.log(props.src);
    return (
        <>
            {/* <div className="card_main" style={{ width: '100%', margin:'15px' }}>
                <div className='wrapper'>
                    <div class="card" style={{padding: '25px', }}>
                        <img src={props.src} class="card-img-top" alt="menu_dishs" width='272' height='270' style={{objectFit:'cover'}} />
                        <div class="card-body">
                            <h1 class="card-title" style={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', fontFamily: 'poppins', }}>{props.dishname}</h1>
                            <p class="card-text" style={{ textAlign: 'center', fontSize: '13px', fontWeight: '400', lineHeight: '2',fontFamily: 'poppins' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
                            <div className="rating_star" style={{ color: '#F54748', fontSize: '24px' }}>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className="bottom_card">
                                <p className='price'>$12.05</p>
                                <a href="#" class="btn_order_card">Order now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="card_section">
                <div className="wrapper">
                    <div class="card">
                        <img src={props.imgsrc} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title"style={{ fontSize: '30px', fontWeight: '600',  }}>{props.dishname}</h5>
                            <p class="card-text"style={{  fontSize: '14px', fontWeight: '400', lineHeight: '2',color:'#59442b'}}>{props.Description}</p>
                            <div className="rating_star" style={{ color: '#F54748', fontSize: '24px', textAlign: 'start' }}>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className="bottom_card">
                                <p className='price'>{props.price}</p>
                                <a href="#" class="btn_order_card">Order now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
