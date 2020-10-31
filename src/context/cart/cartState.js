import React, { createContext, useReducer, useEffect } from "react";

import { CartReducer } from "context/cart/cartReducer";

export const CartContext = createContext();
const storageKey = "localCart";
export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(
    CartReducer,
    [],
    // So we only have to pull from localStorage one time - Less file IO
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );
  useEffect(() => {
    // This is a side-effect and belongs in an effect
    localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  const addCartItem = (item) => {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: item,
    });
  };

  const removeCartItem = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
