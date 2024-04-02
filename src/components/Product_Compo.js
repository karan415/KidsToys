import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useCart } from '../CartContext';
import { proContext } from './ProductContext';

const Product_Compo = () => {
  const { AllData } = useContext(proContext);
  const { handleAddToCart, addedItem, setAddedItem } = useCart();

  useEffect(() => {
    if (addedItem) {
      setTimeout(() => {
        setAddedItem(null);
      }, 3000);
    }
  }, [addedItem]);

  return (
    <div className="flex_box products">
      {AllData.map((curElm, indx) => (
        <div className="col_25" key={indx} id={curElm.id}>
          <div className="product_box row_box ">
            <div className="product_img col">
              <img src={curElm.image} alt="" />
            </div>
            <div className="product_content col">
              <span>{curElm.product}</span>
              <i className="star"><img src={curElm.rating} alt="" /></i>
              <span><strong>${curElm.price}</strong></span>
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
};

export default Product_Compo;
