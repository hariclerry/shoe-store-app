import React, { Component, Fragment } from "react";

import ProductItem from "components/product-items/productIems";
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
    isCartVisible: false
  };

  handleToggleCart = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    });
  };

  render() {
    const { isCartVisible } = this.state;
    const { products } = this.props;
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
              <ProductPreviewContainer>
                {products &&
                  products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
              </ProductPreviewContainer>
      </Fragment>
    );
  }
}
export default ProductPage;
