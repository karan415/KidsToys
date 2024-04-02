import React from 'react';
import './css/Product.css';
import ProductData from './ProductData';
import { useCart } from '../CartContext';

const Product = () => {
    const [addedItem, setAddedItem] = React.useState(null);
    const { handleAddToCart } = useCart();

    return (
        <>
            <section className="our-products">
                <div className="container">
                    <div className="text_center">
                        <h4>Our Products</h4>
                        <h2>BEST SELLING</h2>
                    </div>
                    <div className="flex_box products">
                        {Object.keys(ProductData.all).map((ageGroup) => (
                            ProductData.all[ageGroup].map((curElm, indx) => (
                                <div className="col_25" key={indx} id={curElm.id}>
                                    <div className="product_box row_box">
                                        <div className="product_img col">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="product_content col">
                                            <span>{curElm.product}</span>
                                            <i className="star"><img src={curElm.rating} alt="" /></i>
                                            <span><strong>${curElm.price}</strong></span>
                                            <span className="border"><button className="btn_purple" onClick={() => handleAddToCart(curElm)}>{addedItem === curElm ? 'Item added to cart' : 'Add To Cart'} </button></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;
