import React from "react";
import { shallow } from "enzyme";

import { CartContext } from "context/cart/cartState";
import CartDropdown from "components/cart-dropdown/cartDropdown";

describe("<CartDropdown />", () => {
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
      <CartDropdown {...props} />
       </CartContext.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
