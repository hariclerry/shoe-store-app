import React, { Component, Fragment } from "react";

import CollectionItem from "components/product-items/productIems";
import CartIcon from "components/cart-icon/cartIcon";
import CartDropdown from "components/cart-dropdown/cartDropdown";

import {
  ProductPreviewContainer,
  HeaderContainer,
  OptionsContainer,
  CheckOutArrow,
} from "./products.styles";


class ProductPage extends Component {
  state = {
    isCartVisible: false,
    isLoading: false
  };

  handleToggleCart = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    });
  };

  render() {
    const { isCartVisible, isLoading } = this.state;
    const {products} = this.props
    return (
      <Fragment>
        <HeaderContainer>
          <OptionsContainer>
            <CheckOutArrow>Checkout &rarr;</CheckOutArrow>
            <CartIcon onToggleCart={this.handleToggleCart} />
          </OptionsContainer>
          {isCartVisible === false ? null : (
            <CartDropdown onToggleCart={this.handleToggleCart} />
          )}
        </HeaderContainer>
        {products.length === 0 ? isLoading === true && (
          <div>Loading...</div>
        ) : isLoading === false && (
          <ProductPreviewContainer>
            {products &&
              products.map((product) => (
                <CollectionItem key={product.id} product={product} />
              ))}
          </ProductPreviewContainer>
        )}
      </Fragment>
    );
  }
}
export default ProductPage;
