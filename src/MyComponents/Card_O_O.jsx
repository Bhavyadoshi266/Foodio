// import React, { createContext, useContext, useState } from 'react'

// export default function Card_O_O(props)  {

//     const [num, setnum] = useState(0);

//     const add = () => {
//         // console.log("bhavya");
//         setnum(num + 1);
//     }
//     const sub = () => {
//         // console.log("ba");
//         if (num > 0) {
//             setnum(num - 1);
//         } else {
//             setnum(0);
//         }
//     }

//     const handleClick = () => {
//         props.onButtonClick(props.dishname); // Passes the value of the item to the parent's callback function
//     };

//     const {addToCart} = useContext(addToCart);


//     return (
//         <>

//             <div className="contanier" >
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <img src={props.imgsrc} alt=".." width={'196px'} height={'196px'} />
//                             <h5 className="card-title py-4 pb-1" style={{ fontSize: '20px', fontWeight: '600', }}>{props.dishname}</h5>

//                             <div className="rating_star" style={{ color: '#F54748', fontSize: '10px', textAlign: 'start' }}>
//                                 <i className="fa-solid fa-star"></i>
//                                 <i className="fa-solid fa-star"></i>
//                                 <i className="fa-solid fa-star"></i>
//                                 <i className="fa-solid fa-star"></i>
//                                 <i className="fa-solid fa-star"></i>
//                             </div>

//                             <p className="card-text" style={{ fontSize: '12px', fontWeight: '400', lineHeight: '2', color: '#59442b' }}>{props.Description}</p>
//                             <p className='price' style={{ fontSize: '18px' }}>{props.price}</p>

//                             <div className="addtocard mb-4">
//                                 <button className='minus' onClick={sub}><i className=" fa-solid fa-minus"></i></button>
//                                 <p className=' m-0'>{num}</p>
//                                 <button className='plus' onClick={add}><i className=" fa-solid fa-plus"></i></button>
//                             </div>

//                             {/* <button className='card_o_o_add py-1' onClick={() => handleClick(props.id, props.dishname, props.price)}>Add</button> */}
//                             <button className='card_o_o_add py-1' onClick={() => addToCart()}>Add</button>

//                         </div>

//                     </div>

//                 </div>

//             </div>
          

//         </>

//     );

// };
