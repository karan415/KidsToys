import React, { useEffect } from 'react';
import Header from './Header';
import HeaderBanner from './HeaderBanner';
import Footer from './Footer';
import './css/Cart.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useCart } from '../CartContext';

const Cart = () => {
    const { cart, setCart, quantities, setQuantities } = useCart();

    useEffect(() => {
        setQuantities(prevQuantities => {
            if (prevQuantities.length !== cart.length) {
                return Array(cart.length).fill(1);
            }
            return prevQuantities;
        });
    }, [cart, setQuantities]); 

    if (!quantities) {
        return null; 
    }

    // Delete item from cart
    const deleteItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);

        const updatedQuantities = quantities.filter((_, i) => i !== index);
        setQuantities(updatedQuantities);
    };

    // Update item quantity
    const updateItemQuantity = (index, newQuantity) => {
        if (newQuantity >= 1) {
            const newQuantities = [...quantities];
            newQuantities[index] = newQuantity;
            setQuantities(newQuantities);
        }
    };

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

    const total=subtotal;

    return (
        <>
            <Header />
            <HeaderBanner />
            <section className="cartpage">
                <div className="container">
                    <h2>Your Shopping Cart</h2>
                    <div className="maincart">
                        <div className="flex_box">
                            {cart.length === 0 ? (
                                <div className="cart_empty">
                                    <p>Your cart is empty.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="col_70">
                                        <div className="product_table">
                                            <table className='itemstable'>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Subtotal</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="item_info">
                                                                    <div className="white_bg">
                                                                        <img src={item.image} alt="" />
                                                                    </div>
                                                                    <h5>{item.product}</h5>
                                                                </div>
                                                            </td>
                                                            <td>${item.price}</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <span className="less" onClick={() => updateItemQuantity(index, quantities[index] - 1)}>-</span>
                                                                    <span className="itemnumber">{quantities[index]}</span>
                                                                    <span className="add" onClick={() => updateItemQuantity(index, quantities[index] + 1)}>+</span>
                                                                </div>
                                                            </td>
                                                            <td>${(quantities[index] * parseFloat(item.price)).toFixed(2)}</td>
                                                            <td>
                                                                <FaTrash onClick={() => deleteItem(index)} />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col_33">
                                        <div className="items_information">
                                            <ul>
                                                <li>Subtotal:<span> ${subtotal.toFixed(2)}</span></li>
                                                <li>Total: <span>${total.toFixed(2)}</span></li>
                                            </ul>
                                            <Link to='/checkout'>
                                                <button className="btn_pink">Checkout Now</button>
                                            </Link>
                                            <Link to='/'>
                                                <button className="btn_purple">Back to Shop</button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Cart;
