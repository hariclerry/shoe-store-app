export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};


