// CartContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
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

    // Compute cart count based on the length of the cart array
    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, setCart, quantities, setQuantities, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
