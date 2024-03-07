import React, { useState } from 'react'
import Logo from '../components/images/logo (2).png'
import MobileHeader from './MobileHeader'
import './css/Header.css'
import { Link } from 'react-router-dom'
import { FaStar, FaUser } from 'react-icons/fa'
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from '../CartContext'
const Header = () => {
const {cartCount}=useCart();
  return (
    <>
    <header>
      <div className='container'>
      <MobileHeader/>
        <nav className='OnlyDesktop'>
          <div className="flex_box">
            <div className="col_25">
               <div className="logo">
               <Link to='/'>
                <img src={Logo} alt="" />
                </Link>
               </div>
            </div>
            <div className="col_40">
                <div className="nav_items">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>shop</li>
                        <li> <Link to='/products'>products</Link></li>
                        <li>blogs</li>
                        <li>pages
                        <div className="submenus d_none">
                        <ul>
                        <li>cart</li>
                        <li>checkout</li>
                        </ul>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col_33">
                <div className="search_box">
                <div className='input_box'>
                    <input type="search" name="" id="" placeholder='Search Here'/>
                    <i className='search'></i>
                    </div>
                    <ul>
                   <li><Link to='/cart'><FiShoppingBag/> <span className='cartItem'>{cartCount}</span></Link></li>
                   <li><FaStar/></li>
                   <li><Link to='/login'><FaUser/></Link></li>
                   </ul>
                   
                </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header