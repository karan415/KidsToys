import React, { useState } from 'react'
import './css/Product.css'
import Product_Compo from './Product_Compo'
const Product = ({handleClick}) => {
    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>PRODUCTS BY AGE</h2>
                    </div>
                    <Product_Compo handleClick={handleClick}/>

                </div>
            </section>
        </>
    )
}

export default Product