import './Style.css'
import React from 'react';

export default function Chef(props) {
    return (
        <>
            <div>
                <div className="chef">
                    <div className="wrapper">
                        <div className="chef_card" >
                            <div className="chef_img">
                                <img src={props.src} alt='chef_img' style={{ objectFit: 'cover',backgroundColor:props.color1 }} />
                            </div>
                            <div className="chef_detail">
                                <p className='chef_name'>{props.chefname}</p>
                                <p className='chef_pos'>{props.chefpos}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
