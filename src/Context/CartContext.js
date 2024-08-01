// CartContext.js
import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCart = async() => {
      try {
        const cart = await JSON.parse(localStorage.getItem("cart"))

        if(!!cart){
          setCartItems(cart)
        }
      } catch (error) {
        console.log(error)
      }      
    }   

    getCart()
  },[]);

  const addItemToCart = (item) => {
    localStorage.setItem("cart", JSON.stringify([item]))
    setCartItems([item]);
  };

  const removeItemFromCart = () => {
    localStorage.setItem("cart", JSON.stringify([]))
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
