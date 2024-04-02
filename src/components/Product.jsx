import React from 'react';
import './css/Product.css';
import ProductHead from './ProductHead';


const Product = () => {
    

    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>BEST SELLING</h2>
                    </div>
                    <ProductHead/>
                </div>
            </section>
        </>
    );
};

export default Product;
