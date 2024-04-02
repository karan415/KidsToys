
import React, { useContext } from 'react';
import { useCart } from '../CartContext';
import { proContext } from './ProductContext';

const Product_Compo = () => {
  const {AllData} =useContext(proContext)
  const { handleAddToCart,addedItem} = useCart();

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
              <span className="border">  <button className="btn_purple" onClick={() => handleAddToCart(curElm)}>{addedItem === curElm ? 'Item added to cart' : 'Add To Cart'} </button></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product_Compo;
