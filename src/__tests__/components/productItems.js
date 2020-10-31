import React from "react";
import { shallow } from "enzyme";

import { CartContext } from "context/cart/cartState";
import ProductItem from "components/product-items/productIems";

describe("<ProductItem />", () => {
  const props = {};
  const cartItems = [
    {
      id: 1,
      nom: "Air Jordan 1",
      price: 12,
      currency: "$",
      imageUrl: "/imageurl",
    },
  ];
  it("renders ProductItem component without crashing", () => {
    const wrapper = shallow(
      <CartContext.Provider value={cartItems}>
        <ProductItem {...props} />
      </CartContext.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
