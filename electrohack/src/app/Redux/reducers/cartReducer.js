function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const cartProduct = state.find(
        (product) => product.name === action.payload.name
      );

      if (!cartProduct) {
        action.payload.cuantity = 1;
        return [...state, action.payload];
      } else {
        const newState = state.filter((item) => item.name !== cartProduct.name);
        return [
          ...newState,
          { ...cartProduct, cuantity: cartProduct.cuantity + 1 },
        ];
      }
    case "REMOVE_PRODUCT":

    default:
      return state;
  }
}

export default cartReducer;
