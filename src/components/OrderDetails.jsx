import React from 'react';
import { useCart } from '../CartContext';

const OrderDetails = () => {
    const { cart, quantities } = useCart();
    const{discount} =useCart();
    // Calculate subtotal
    const subtotal = cart.reduce((acc, item, index) => {
        const itemPrice = parseFloat(item.price);
        const itemQuantity = quantities[index];
        if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
            return acc + itemPrice * itemQuantity;
        } else {
            console.error('Invalid price or quantity');
            return acc;
        }
    }, 0);

    // Calculate total before applying discount
    const totalBeforeDiscount = subtotal;

    // Calculate discount amount
    const discountAmount = totalBeforeDiscount * discount;

    // Calculate total after discount
    const total = totalBeforeDiscount - discountAmount;

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
