import React from 'react'
import './css/Product.css'
import Product_Compo from './Product_Compo'
const Products = () => {

    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>PRODUCTS BY AGE</h2>
                        <div className="tabing_box flex_box">
                            <ul>
                                <li className="btn active">0 to 12 month</li>
                                <li className="btn"> 12 to 18 month</li>
                                <li className="btn">18 to 24 month</li>
                                <li className="btn">2 to 5 year</li>
                                <li className="btn">5 to 7 years</li>
                            </ul>
                        </div>
                    </div>
                    <Product_Compo />
                </div>
            </section>
        </>
    )
}

export default Products