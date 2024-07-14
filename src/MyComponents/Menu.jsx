import React from 'react';
import './Style.css';
import Card from './Card';
import menu_dish1 from './Images/menu_dish1.png'
import menu_dish2 from './Images/menu_dish2.png'
import menu_dish3 from './Images/menu_dish3.png'
import menu_dish4 from './Images/menu_dish4.png'
import menu_dish5 from './Images/menu_dish5.png'
import menu_dish6 from './Images/menu_dish6.png'
import { Outlet, Link } from "react-router-dom";
// import Navbar from './MyComponents/Navbar';

import Footer from './Footer';
import Navbar from './Navbar';



export default function Menu(props) {
  const data = [
    {
      id: '1',
      imgsrc: menu_dish1,
      dishname: 'Spaghetti',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
    {
      id: '2',
      imgsrc: menu_dish2,
      dishname: 'Gnocchi',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
    {
      id: '3',
      imgsrc: menu_dish3,
      dishname: 'Rovioli',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
    {
      id: '4',
      imgsrc: menu_dish4,
      dishname: 'Penne Alla Vodak',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
    {
      id: '5',
      imgsrc: menu_dish5,
      dishname: 'Risoto',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
    {
      id: '6',
      imgsrc: menu_dish6,
      dishname: 'Splitza Signature',
      price: '$12.05',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'
    },
  ]

  function ncard(val) {
    console.log("000000000000000" + val.imgsrc)
    return (

      <Card key={val.id} imgsrc={val.imgsrc} dishname={val.dishname} price={val.price} Description={val.Description} />
    )
  }



  return (
    <>
      {/* {props.navbar_header ? <Navbar/> : ""} */}

      <div className='menu' style={{}}>
        <div className="common">
          <div className="wrapper">
            <h1 className='menu_header' style={{ textAlign: 'center', fontSize: '52px', fontWeight: '700', marginBottom: '30px', fontFamily: 'open sans' }}>Our Popular Menu</h1>
            <ul class="catagories">
              <Link to="#" class="nav-link px-2 link-dark">All Catagory</Link>
              <Link to="#" class="nav-link px-2 link-dark">Dinner</Link>
              <Link to="#" class="nav-link px-2 link-dark">Lunch</Link>
              <Link to="#" class="nav-link px-2 link-dark">Dessert</Link>
              <Link to="#" class="nav-link px-2 link-dark">Drink</Link>
            </ul>

            {/* <div className="card_section" >
            <div className="card_section_top" >

              <div className="main_card" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card src={menu_dish1} dishname='Spaghetti' />
                <Card src={menu_dish2} dishname='Gnocchi' />
                <Card src={menu_dish3} dishname='Rovioli' />
              </div>

            </div>
            <div className="card_section_bottom" >

              <div className="main_card" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card src={menu_dish4} dishname='Penne Alla Vodak' />
                <Card src={menu_dish5} dishname='Risoto' />
                <Card src={menu_dish6} dishname='Splitza Signature' />

              </div>

            </div>
          </div> */}

            <div className="menu_card">
              <div className="wrapper">
                {data.map(ncard)}
              </div>
            </div>


            <div className="slider pt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link"> <i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-angle-left"></i> </a>
                  </li>
                  <li class="page-item disabled"><a class="page-link " href="#">1</a></li>
                  <li class="page-item disabled"><a class="page-link" href="#">2</a></li>
                  <li class="page-item disabled"><a class="page-link" href="#">3</a></li>
                  <li class="page-item disabled">
                    <a class="page-link"> <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i> </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>


      <Outlet />

    </>
  )
}
