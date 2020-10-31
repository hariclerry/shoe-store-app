import React, { createContext, useReducer } from "react";
import { toast } from "react-toastify";

import { productService } from "API/productService";
import { ProductReducer } from "context/products/productsReducer";

const initialState = {
  products: []
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const fetchProducts = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://store-api.glitch.me/api/products"; // site that doesn’t send Access-Control-*
    try {
      const response = await productService.get(proxyurl + url);
      dispatch({ type: "FETCH_PRODUCTS", products: response.data });
    } catch (error) {
      toast.error(`An error has occured, please try again later`);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        fetchProducts,
        products: state.products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
