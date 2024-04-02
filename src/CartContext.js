// CartContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [addedItem, setAddedItem] = React.useState(null);
    // Load cart data from localStorage
    const storedData = localStorage.getItem('cart');
    const storedQuantities = localStorage.getItem('cartQuantities');

    // Initialize cart state with stored data or empty array
    const [cart, setCart] = useState(storedData ? JSON.parse(storedData) : []);
    const [quantities, setQuantities] = useState(storedQuantities ? JSON.parse(storedQuantities) : []);

    // Save cart and quantities to localStorage when they change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartQuantities', JSON.stringify(quantities));
    }, [cart, quantities]);
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
    
       
      };
    // Compute cart count based on the length of the cart array
    const cartCount = cart.length;
    const [couponCode, setCouponCode] = useState('');
    const [discountMessage, setDiscountMessage] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleCouponApply = (e) => {
        e.preventDefault();
        const trimmedCouponCode = couponCode.trim().toLowerCase(); // Trim whitespace and convert to lowercase
        if (trimmedCouponCode === 'yourcouponcode') { // Replace 'yourcouponcode' with your actual coupon code
            setDiscount(0.1); // 10% discount
            setDiscountMessage('Coupon applied: You got 10% discount on your order!');
            setTimeout(() => {
                setDiscountMessage('');
            }, 4000);
        } else {
            setDiscount(0); // Reset discount
            setDiscountMessage('Invalid coupon code');
        }
        setCouponCode(''); // Clear coupon code input
    };
    return (
        <CartContext.Provider value={{ cart, setCart, quantities,discountMessage,discount,couponCode,setCouponCode,handleCouponApply, setQuantities,setAddedItem,addedItem, cartCount,handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};
