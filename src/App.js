import React, { Fragment, useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalContext } from "context/products/productState";
import ProductPage from "./pages/products/products";
import CheckoutPage from "./pages/checkout/checkout";
import Loader from "./App.styles.jsx"
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { fetchProducts, products, isCartVisible } = useContext(GlobalContext);
  const [ isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    fetchProducts();
    setIsLoading(false)
  }, [])

 
  if (isLoading) {
    return <Loader/>;
  }
  return (
    <Fragment>
      <ToastContainer
        draggable={false}
        hideProgressBar={true}
        autoClose={3000}
        bodyStyle={{ fontSize: "1rem" }}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <ProductPage products={products} isCartVisible={isCartVisible} />
          )}
        />
        <Route exct path="/checkout" component={CheckoutPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
