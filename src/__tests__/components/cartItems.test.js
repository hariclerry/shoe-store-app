import React from "react";
import { shallow } from "enzyme";

import { CartContext } from "context/cart/cartState";
import CartItem from "components/cart-items/cartItems";

describe("<CartItem />", () => {
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
  it("renders CartItem component without crashing", () => {
    const wrapper = shallow(
      <CartContext.Provider value={cartItems}>
        <CartItem {...props} />
      </CartContext.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
