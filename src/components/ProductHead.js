import React from 'react'
import ProductData from './ProductData';
import { useCart } from '../CartContext';
const ProductHead = () => {
    const [addedItem, setAddedItem] = React.useState(null);
    const { handleAddToCart } = useCart();
    return (
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
                            <span className='flex_box'><strong>${curElm.price}</strong> <span className="saleprize">${curElm.saleprice}</span></span>
                            <span className="border"><button className="btn_purple" onClick={() => handleAddToCart(curElm)}>{addedItem === curElm ? 'Item added to cart' : 'Add To Cart'} </button></span>
                        </div>
                    </div>
                </div>
            ))
        ))}
    </div>
    )
}

export default ProductHead