import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

const Topbar = () => {
    const [priceFilter, setPriceFilter] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [brandFilter, setBrandFilter] = useState("");

    const handlePriceChange = (event) => {
        setPriceFilter(event.target.value);
    };

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const handleAgeFilter = (age) => {
        setAgeFilter(age);
    };

    const handleBrandFilter = (brand) => {
        setBrandFilter(brand);
    };

    return (
        <div className="maintopbar">
            <div className="topbar-inner">
            <div className="searchingbox">
            <label htmlFor=""><FaSearch /></label>
            <input type="search" name="" id="searchitem" placeholder="Search Here"/>
            </div>
            
                <div className="listing-box">
                    <div className="listing-inner">
                        <h4>CATEGORIES</h4>
                        <ul>
                           
                            <li>
                                <input type="radio" name="category" value="Action Toys" onChange={() => handleCategoryFilter("Action Toys")} /> Action Toys (4)
                            </li>
                            <li>
                                <input type="radio" name="category" value="Educational Toys" onChange={() => handleCategoryFilter("Educational Toys")} /> Educational Toys (7)
                            </li>
                            <li>
                                <input type="radio" name="category" value="Electronic Toys" onChange={() => handleCategoryFilter("Electronic Toys")} /> Electronic Toys (2)
                            </li>
                            <li>
                                <input type="radio" name="category" value="Pre-School Toys" onChange={() => handleCategoryFilter("Pre-School Toys")} /> Pre-School Toys (5)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listing-box">
                    <div className="listing-inner">
                        <h4>FILTER BY PRICE</h4>
                        <div className="flex_box">
                            <span>${priceFilter}</span>
                            <input type="range" id="vol" name="vol" min="0" max="50" value={priceFilter} onChange={handlePriceChange} />
                        </div>
                        <div className="flex_box content-end">
                            <button className="btn_pink">filter</button>
                        </div>
                    </div>
                </div>
                <div className="listing-box">
                    <div className="listing-inner">
                        <h4>AGE</h4>
                        <ul>
                            <li>
                                <input type="radio" name="age" value="0 to 12 months" onChange={() => handleAgeFilter("0 to 12 months")} /> 0 to 12 months
                            </li>
                            <li>
                                <input type="radio" name="age" value="12 to 18 months" onChange={() => handleAgeFilter("12 to 18 months")} /> 12 to 18 months
                            </li>
                            <li>
                                <input type="radio" name="age" value="18 to 24 months" onChange={() => handleAgeFilter("18 to 24 months")} /> 18 to 24 months
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listing-box">
                    <div className="listing-inner">
                        <button className="btn_pink">
                            <MdFilterList />
                            filters
                        </button>
                    </div>
                </div>
                <div className="listing-box">
                    <div className="listing-inner">
                        <h4>BRAND</h4>
                        <ul>
                            <li> <input type="radio" name="brand" id="barbie" onChange={() => handleBrandFilter("Barbie")} />Barbie </li>
                            <li> <input type="radio" name="brand" id="disney" onChange={() => handleBrandFilter("Disney")} /> Disney</li>
                            <li> <input type="radio" name="brand" id="kidsplay" onChange={() => handleBrandFilter("Kidsplay")} />Kidsplay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
