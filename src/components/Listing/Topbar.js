import React from "react";
import { MdFilterList } from "react-icons/md";
const Topbar = () => {
    return (
        <>
            <div className="maintopbar">
                <div className="topbar-inner">
                    <div className="listing-box">
                        <div className="listing-inner">
                            <h4>CATEGORIES</h4>
                            <ul>
                                <li>Action Toys (4)</li>
                                <li>Educational Toys (7)</li>
                                <li>Electronic Toys (2)</li>
                                <li>Pre-School Toys (5)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="listing-box">
                        <div className="listing-inner">
                            <h4>FILTER BY PRICE</h4>
                            <div className="flex_box">
                                <div className="col_50">
                                    <input type="number" name="" id="" min="10" />
                                </div>
                                <div className="col_50">
                                    <input type="number" name="" id="" max="50" />
                                </div>
                            </div>
                            <button className="btn_pink">filter</button>
                        </div>
                    </div>
                   
                    <div className="listing-box">
                        <div className="listing-inner">
                            <h4>AGE</h4>
                            <ul>
                                <li>0 to 12 months</li>
                                <li>12 to 18 months</li>
                                <li>18 to 24 months</li>
                            </ul>
                        </div>
                    </div>
                    <div className="listing-box">
                    <div className="listing-inner">
                        <button className="btn_pink"><MdFilterList />filters</button>
                    </div>
                </div>
                    <div className="listing-box">
                        <div className="listing-inner">
                            <h4>COLORS</h4>
                            <ul>
                            <li>red</li>
                            <li>pink</li>
                            <li>green</li>
                            </ul>
                        </div>
                    </div>
                    <div className="listing-box">
                        <div className="listing-inner">
                            <h4>BRAND</h4>
                            <ul>
                                <li>Barbie</li>
                                <li>Disney</li>
                                <li>Kidsplay</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
