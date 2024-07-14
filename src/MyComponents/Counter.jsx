import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [num, setnum] = useState(0);
    const add = () => {
        setnum(num + 1);
    };
    const sub = () => {
        if (num > 0) {
            setnum(num - 1);
        } else {
            setnum(0);
        }
    };
    return (
        <div className="addtocard mb-2">
            <button className='minus' onClick={sub}><i className=" fa-solid fa-minus"></i></button>
            <p className=' m-0'>{num}</p>
            <button className='plus' onClick={add}><i className=" fa-solid fa-plus"></i></button>
        </div>
    )
}


// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Counter = ({ itemId }) => {
//     const { cart, updateQuantity } = useContext(CartContext);
//     const item = cart.find(cartItem => cartItem.id === itemId);

//     return (
//         <div className="counter">
//             <button onClick={() => updateQuantity(itemId, -1)}>-</button>
//             <span>{item ? item.quantity : 0}</span>
//             <button onClick={() => updateQuantity(itemId, 1)}>+</button>
//         </div>
//     );
// };

// export default Counter;


// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Counter = ({ itemId }) => {
//     const { cart, updateQuantity } = useContext(CartContext);
//     const item = cart.find(cartItem => cartItem.id === itemId);

//     return (
//         <div className="counter">
//             <button onClick={() => updateQuantity(itemId, 0)}>-</button>
//             <span>{item ? item.quantity : 0}</span>
//             <button onClick={() => updateQuantity(itemId, 1)}>+</button>
//         </div>
//     );
// };

// export default Counter;
