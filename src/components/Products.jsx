import React, { useState } from 'react'
import './css/Product.css'
import Product_Compo from './Product_Compo'
const Products = ({handelClick}) => {
  
    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>PRODUCTS BY AGE</h2>
                        <div className="tabing_box flex_box">
                            <button className="btn active">0 to 12 month</button>
                            <button className="btn"> 12 to 18 month</button>
                            <button className="btn">18 to 24 month</button>
                            <button className="btn">2 to 5 year</button>
                            <button className="btn">5 to 7 years</button>
                        </div>
                    </div>
                    <Product_Compo handelClick={handelClick}/>
                </div>
            </section>
        </>
    )
}

export default Products