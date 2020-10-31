import React, { useContext } from "react";
import { CartContext } from "context/cart/cartState";

import {
  ProductItemContainer,
  ProductFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./productItems.styles";

const CollectionItem = ({ product }) => {
  const { addCartItem } = useContext(CartContext);
   const { nom, price, currency, imageUrl } = product;

  return (
    <ProductItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <ProductFooterContainer>
        <NameContainer>{nom}</NameContainer>
        <PriceContainer>
          {price}
          {currency}
        </PriceContainer>
      </ProductFooterContainer>
      <AddButton onClick={() => addCartItem(product)} inverted>
        Add to cart
      </AddButton>
    </ProductItemContainer>
  );
};

export default CollectionItem;
