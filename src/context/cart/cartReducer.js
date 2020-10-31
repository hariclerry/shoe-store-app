const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialValue;

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const product = action.payload;
      const existingCartItem = state.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingCartItem) {
        return state.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      const existingCartItem = state.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingCartItem.quantity === 1) {
        return state.filter((cartItem) => cartItem.id !== product.id);
      }

      return state.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

    default:
      return state;
  }
};
