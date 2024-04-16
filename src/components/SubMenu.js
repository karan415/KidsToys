import React from 'react'
import { Link } from "react-router-dom";
import { FaLaravel, FaMobile, FaPhp, FaWordpress } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { BsStack } from "react-icons/bs";
const SubMenu = () => {
    return (
        <div className="subchilds">
            <div className="subchild_inner">
                <ul>
                    <li> <div className="first">
                        <div className="bg-pink"> <i><FaPhp /></i></div></div>
                        <div className="sec">
                            <Link to="/php">Php Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-purple"> <i><BsStack /></i></div></div>
                        <div className="sec">
                            <Link to="/fullstack">fullstack Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-grey"> <i><FaLaravel /></i></div></div>
                        <div className="sec">
                            <Link to="/laravel">Laravel Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-violet"> <i><SiVorondesign /></i></div></div>
                        <div className="sec">
                            <Link to="/uiux">uiux Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-pink"> <i><FaWordpress /></i></div></div>
                        <div className="sec">
                            <Link to="/wordpress">wordpress Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-grey"> <i><FaMobile /></i></div></div>
                        <div className="sec">
                            <Link to="/mobileApp">MobileApp Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SubMenu