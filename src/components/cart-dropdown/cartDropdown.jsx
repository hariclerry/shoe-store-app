import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { CartContext } from "context/cart/cartState";
import CartItem from "components/cart-items/cartItems";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cartDropdown.styles";

const CartDropdown = ({ onToggleCart }) => {
  const { cartItems } = useContext(CartContext);
  let history = useHistory();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={(e) => {
          history.push("/checkout");
          onToggleCart();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
