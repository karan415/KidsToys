import React, { useContext } from 'react';
import './css/Product.css';
import Product_Compo from './Product_Compo';
import { proContext } from './ProductContext';

const Products = () => {
    const { activeTab, handleTab } = useContext(proContext);

    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>PRODUCTS BY AGE</h2>
                        <div className="tabing_box flex_box">
                            <ul>
                                <li className={activeTab === '12month' ? 'btn active' : 'btn'} onClick={() => handleTab('12month')}>0 to 12 month</li>
                                <li className={activeTab === '18month' ? 'btn active' : 'btn'} onClick={() => handleTab('18month')}>12 to 18 month</li>
                                <li className={activeTab === '24month' ? 'btn active' : 'btn'} onClick={() => handleTab('24month')}>18 to 24 month</li>
                                <li className={activeTab === '2year' ? 'btn active' : 'btn'} onClick={() => handleTab('2year')}>2 to 5 year</li>
                                <li className={activeTab === '5year' ? 'btn active' : 'btn'} onClick={() => handleTab('5year')}>5 to 7 years</li>
                            </ul>
                        </div>
                    </div>
                    <Product_Compo />
                </div>
            </section>
        </>
    );
};

export default Products;
