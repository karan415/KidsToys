import React from 'react'
import Logo from '../components/images/logo (2).png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './css/Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="flex_box footer_boxes">
                        <div className="col_20">
                            <div className="footer_inner_box">
                                <div className="logo">
                                    <img src={Logo} alt="" />
                                    <ul>
                                        <li className='under_line'>Support@example.com</li>
                                        <li> <strong>+ (1800)-88-66-99</strong></li>
                                    </ul>
                                    <p>My Company, 42 Puffin Street 12345 Puffinville France</p>
                                </div>
                            </div>
                        </div>
                        <div className='col_40 flex_box'>
                        <div className="col_50">
                            <div className="footer_inner_box">
                                <ul>
                                    <li>MY ACCOUNT</li>
                                    <li>About</li>
                                    <li>My Account</li>
                                    <li>Contact</li>
                                    <li>Reviews</li>
                                    <li>Return Policy</li>
                                    <li>Shipping</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col_50">
                            <div className="footer_inner_box">
                                <ul>
                                    <li>MY ACCOUNT</li>
                                    <li>About</li>
                                    <li>My Account</li>
                                    <li>Contact</li>
                                    <li>Reviews</li>
                                    <li>Return Policy</li>
                                    <li>Shipping</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col_20">
                            <div className="footer_inner_box mb_flex">
                                <div className='col_50'>
                            <ul>
                                    <li>MY ACCOUNT</li>
                                    <li>About</li>
                                    <li>My Account</li>
                                    <li>Contact</li>

                                </ul>
                                </div>
                                <div className='col_50'>
                                <ul>
                                    <li>Reviews</li>
                                    <li>Return Policy</li>
                                    <li>Shipping</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer_inner_box">
                                <ul>
                                    <li>newsletter</li>
                                </ul>
                                <span>Sign up for newsletter and get 10% cash back offer</span>
                                <div className="search_box">
                                    <div className='input_box'>
                                        <input type="search" name="" id="" placeholder='Search Here' />
                                        <i className='search'></i>
                                    </div>
                                </div>
                                <div className="social_icons">
                                    <ul>
                                        <li><i><FaFacebookF /></i></li>
                                        <li><i><FaInstagram /></i></li>
                                        <li><i><FaTwitter /></i></li>
                                        <li><i><FaLinkedinIn /></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p>Copyright © 2023 Pippo – All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer