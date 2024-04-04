import React from 'react';
import { useCart } from '../CartContext';

const OrderDetails = () => {
    const { cart, quantities } = useCart();
    const { subtotal, discountAmount, total } = useCart();

    return (
        <>
            <div className="product_table">
                <table className='itemstable'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="item_info">
                                        <h5>{item.product}<span className="itemnumber"> ({quantities[index]})</span></h5>
                                    </div>
                                </td>
                                <td>${(quantities[index] * parseFloat(item.price)).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ul>
                <li>Subtotal: <span>${subtotal.toFixed(2)}</span></li>
                <li>Discount: <span>${discountAmount.toFixed(2)}</span></li>
                <li>Total: <span>${total.toFixed(2)}</span></li>
            </ul>
        </>
    );
}

export default OrderDetails;
