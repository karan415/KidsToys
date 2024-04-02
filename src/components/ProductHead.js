import React, { useEffect } from 'react';
import ProductData from './ProductData';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const ProductHead = () => {
    const { handleAddToCart, addedItem, setAddedItem } = useCart();

    useEffect(() => {
        if (addedItem) {
            setTimeout(() => {
                setAddedItem(null);
            }, 3000); // Change the timeout duration as needed
        }
    }, [addedItem]);

    return (
        <div className="flex_box products">
            {ProductData.selling.map((curElm, indx) => (
                <div className="col_25" key={indx} id={curElm.id}>
                    <div className="product_box row_box">
                        <div className="product_img col">
                            <img src={curElm.image} alt="" />
                        </div>
                        <div className="product_content col">
                            <span>{curElm.product}</span>
                            <i className="star"><img src={curElm.rating} alt="" /></i>
                            <span className='flex_box'><strong>${curElm.saleprice}</strong> <span className="mrp">${curElm.price}</span></span>
                            <span className="border">
                            <button className="btn_purple">
                            {addedItem === curElm ? (<>Item added
                              <Link to='/cart'>view cart</Link>
                            </>) : <span onClick={() => {
                              handleAddToCart(curElm);
                              setAddedItem(curElm);
                            }}>Add To Cart</span>
                            }
                          </button>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductHead;
