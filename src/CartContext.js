import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [addedItem, setAddedItem] = useState(null);
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

    // Function to calculate subtotal
    const calculateSubtotal = () => {
        return cart.reduce((acc, item, index) => {
            const itemPrice = parseFloat(item.price);
            const itemQuantity = quantities[index];
            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                return acc + itemPrice * itemQuantity;
            } else {
                console.error('Invalid price or quantity');
                return acc;
            }
        }, 0);
    };

    // Compute subtotal
    const subtotal = calculateSubtotal();

    // Compute cart count based on the length of the cart array
    const cartCount = cart.length;

    const [couponCode, setCouponCode] = useState('');
    const [discountMessage, setDiscountMessage] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleCouponApply = (e) => {
        e.preventDefault();
        if (couponCode.length === 10) {
            // Apply 10% discount
            const discountPercent = 0.1;
            const discountAmount = subtotal * discountPercent;
            setDiscount(discountAmount);
            setDiscountMessage('Coupon applied: you got 10% discount on your order!');
            setTimeout(() => {
                setDiscountMessage('');
            }, 4000);
        } else {
            setDiscount(0);
            setDiscountMessage('Invalid coupon code');
        }
    };

    // Function to handle adding items to the cart
    const handleAddToCart = (curElm) => {
      const updatedCart = [...cart];
      // Add the new item to the copy of the cart array
      updatedCart.push(curElm);
      setCart(updatedCart);
  };
  
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            quantities,
            discountMessage,
            subtotal,
            discountAmount: discount,
            total: subtotal - discount,
            discount,
            couponCode,
            setCouponCode,
            handleCouponApply,
            setQuantities,
            setAddedItem,
            addedItem,
            cartCount,
            handleAddToCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
