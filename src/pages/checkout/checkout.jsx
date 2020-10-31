import React, { Fragment, useContext } from "react";
import { CustomDialog } from "react-st-modal";

import { CartContext } from "context/cart/cartState";
import CustomButton from "components/customButton/button";

import CheckoutItem from "components/checkout-items/checkoutItems";
import PaymentModal from "components/paymentModal/modal";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  BackToLink,
} from "./checkout.styles";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((cartItemsAccumulator, cartItem) => {
    return cartItemsAccumulator + cartItem.quantity * cartItem.price;
  }, 0);
  return (
    <Fragment>
      {" "}
      <BackToLink to="/"> &larr; Back to Products Page</BackToLink>
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Name</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <CustomButton
          onClick={async () => {
            await CustomDialog(<PaymentModal />, {
              title: "Payment Details",
              showCloseIcon: true,
            });
          }}
        >
          Pay
        </CustomButton>
      </CheckoutPageContainer>
    </Fragment>
  );
};

export default CheckoutPage;
