// Product_Compo.js
import React from 'react';
import { useCart } from '../CartContext';
import ProductData from './ProductData';

const Product_Compo = () => {
  const { cart, setCart, quantities, setQuantities } = useCart();
  const [addedItem, setAddedItem] = React.useState(null);

  const handleAddToCart = (curElm) => {
    const index = cart.findIndex(cartItem => cartItem.id === curElm.id);

    if (index !== -1) {
      const updatedCart = cart.map((item, i) => (
        i === index ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      ));
      setCart(updatedCart);

      const updatedQuantities = [...quantities];
      updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
      setQuantities(updatedQuantities);
    } else {
      setCart(prevCart => [...prevCart, { ...curElm, quantity: 1 }]);
      setQuantities(prevQuantities => [...prevQuantities, 1]);
    }

    setAddedItem(curElm);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  return (
    <div className="flex_box products">
      {ProductData.map((curElm, indx) => (
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
