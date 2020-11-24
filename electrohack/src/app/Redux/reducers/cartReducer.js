import sortCart from "../../utils/sortCart";

function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const addingProduct = state.find(
        (product) => product.name === action.payload.name
      );

      if (!addingProduct) {
        action.payload.quantity = 1;
        return [...state, action.payload].sort(sortCart);
      } else {
        const newState = state.filter(
          (item) => item.name !== addingProduct.name
        );
        return [
          ...newState,
          { ...addingProduct, quantity: addingProduct.quantity + 1 },
        ].sort(sortCart);
      }
    case "REMOVE_PRODUCT":
      const removingProduct = state.find(
        (product) => product.name === action.payload.name
      );
      if (removingProduct.quantity > 1) {
        const newState = state.filter(
          (item) => item.name !== removingProduct.name
        );
        return [
          ...newState,
          { ...removingProduct, quantity: removingProduct.quantity - 1 },
        ].sort(sortCart);
      } else {
        const newState = state.filter(
          (item) => item.name !== removingProduct.name
        );
        return newState.sort(sortCart);
      }
    case "RESTART_CART":
      return action.payload;
    default:
      return state.sort(sortCart);
  }
}

export default cartReducer;
