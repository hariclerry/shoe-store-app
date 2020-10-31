import React from "react";
import { shallow } from "enzyme";

import { CartContext } from "context/cart/cartState";
import CartIcon from "components/cart-icon/cartIcon";

describe("<CartIcon />", () => {
  const props = {
    onToggleCart: jest.fn(),
  };
  const cartItems = [
    {
      id: 1,
      nom: "Air Jordan 1",
      price: 12,
      currency: "$",
      imageUrl: "/imageurl",
    },
  ];
  it("renders CartDropdown component without crashing", () => {
    const wrapper = shallow(
      <CartContext.Provider value={cartItems}>
        <CartIcon {...props} />
      </CartContext.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
