// CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const onDelete = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, onDelete }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };




// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
//             if (existingItem) {
//                 return prevCart.map(cartItem =>
//                     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//                 );
//             }
//             return [...prevCart, { ...item, quantity: 1 }];
//         });
//     };

//     const onDelete = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const updateQuantity = (id, quantity) => {
//         setCart((prevCart) =>
//             prevCart.map(item =>
//                 item.id === id ? { ...item, quantity: Math.max(item.quantity + quantity, 0) } : item
//             ).filter(item => item.quantity > 0)
//         );
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, onDelete, updateQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
//             if (existingItem) {
//                 return prevCart.map(cartItem =>
//                     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//                 );
//             }
//             return [...prevCart, { ...item, quantity: 1 }];
//         });
//     };

//     const onDelete = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const updateQuantity = (id, quantity) => {
//         setCart((prevCart) =>
//             prevCart.map(item =>
//                 item.id === id ? { ...item, quantity: Math.max(item.quantity + quantity, 0) } : item
//             ).filter(item => item.quantity > 0)
//         );
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, onDelete, updateQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };



// CartContext.js
// import React, { createContext, useState } from 'react';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         const existingItem = cart.find(cartItem => cartItem.id === item.id);
//         if (existingItem) {
//             const updatedCart = cart.map(cartItem =>
//                 cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//             );
//             setCart(updatedCart);
//         } else {
//             setCart([...cart, { ...item, quantity: 1 }]);
//         }
//     };

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//     };

//     const updateQuantity = (id, newQuantity) => {
//         const updatedCart = cart.map(item =>
//             item.id === id ? { ...item, quantity: newQuantity } : item
//         );
//         setCart(updatedCart);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export { CartProvider, CartContext };
