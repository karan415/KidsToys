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
    
        setAddedItem(curElm);
        setTimeout(() => {
          setAddedItem(null);
        }, 2000);
      };
    // Compute cart count based on the length of the cart array
    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, setCart, quantities, setQuantities, cartCount,handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};
