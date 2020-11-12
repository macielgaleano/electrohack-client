function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const cartProduct = state.find(
        (product) => product.name === action.paylod.name
      );

      if (!cartProduct) {
        action.payload.cuantity = 1;
        return [...state, action.payload];
      } else {
        return [
          ...state,
          { ...cartProduct, cuantity: cartProduct.cuantity + 1 },
        ];
      }
    default:
      return state;
  }
}

export default cartReducer;
