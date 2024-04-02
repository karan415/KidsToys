import React from 'react';
import { useCart } from '../CartContext';

const OrderDetails = () => {
    const { cart, quantities } = useCart();
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
    const totalAmount = cart.reduce((acc, curElm, index) => {
        return acc + quantities[index] * parseFloat(curElm.price);
    }, 0).toFixed(2);
    const discount = 5.78;

    // Calculate total price after discount and tax
    const totalBeforeTax = subtotal - discount;
    const taxRate = 0.1;
    const tax = totalBeforeTax * taxRate;
    const total = totalBeforeTax + tax;

    return (
        <>
            <div className="product_table">
                <table className='itemstable'>
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>subtotal</th>
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
                                <td>
                                </td>
                                <td>${(quantities[index] * parseFloat(item.price)).toFixed(2)}</td>
                            </tr>
                        ))}
                        <ul>
                            <li>Subtotal:<span> ${subtotal.toFixed(2)}</span></li>
                            <li>Discount: <span>${discount.toFixed(2)}</span></li>
                            <li>Tax: <span>${tax.toFixed(2)}</span></li>
                        </ul>
                    </tbody>
                </table>
            </div>
            <ul>
                <li>Total <span>${total.toFixed(2)}</span></li>
            </ul>
        </>
    );
}

export default OrderDetails;
