import React, { useContext } from "react";
import { CartContext } from "context/cart/cartState";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cartIcon.styles";

const CartIcon = ({ onToggleCart }) => {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((cartItemsAccumulator, cartItem) => {
    return cartItemsAccumulator + cartItem.quantity;
  }, 0);
  return (
    <CartContainer onClick={onToggleCart}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
