import { createContext, useState, useContext } from 'react';
import { useToast } from '@chakra-ui/react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const toast = useToast();


    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);

        }
        toast({
            title: "Added to Cart",
            status: "success",
            duration: 2000,
          });
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
        toast({
            title: "Cleared Cart",
            status: "info",
            duration: 3000,
          });

    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };
    const updateCartItemQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item =>
           item.id === itemId ? { ...item, quantity } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
 );
};

export const useCart = () => useContext(CartContext);