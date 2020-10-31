import React from "react";
import { shallow } from "enzyme";

import { CartContext } from "context/cart/cartState";
import CheckoutItem from "components/checkout-items/checkoutItems";

describe("<CheckoutItem />", () => {
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
  it("renders CheckoutItem component without crashing", () => {
    const wrapper = shallow(
      <CartContext.Provider value={cartItems}>
        <CheckoutItem {...props} />
      </CartContext.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
