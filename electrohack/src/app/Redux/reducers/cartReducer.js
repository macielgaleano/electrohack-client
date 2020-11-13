import sortCart from "../../utils/sortCart";

function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const addingProduct = state.find(
        (product) => product.name === action.payload.name
      );

      if (!addingProduct) {
        action.payload.cuantity = 1;
        return [...state, action.payload].sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        const newState = state.filter(
          (item) => item.name !== addingProduct.name
        );
        return [
          ...newState,
          { ...addingProduct, cuantity: addingProduct.cuantity + 1 },
        ].sort(sortCart);
      }
    case "REMOVE_PRODUCT":
      const removingProduct = state.find(
        (product) => product.name === action.payload.name
      );
      if (removingProduct.cuantity > 1) {
        const newState = state.filter(
          (item) => item.name !== removingProduct.name
        );
        return [
          ...newState,
          { ...removingProduct, cuantity: removingProduct.cuantity - 1 },
        ].sort(sortCart);
      } else {
        const newState = state.filter(
          (item) => item.name !== removingProduct.name
        );
        return newState.sort(sortCart);
      }
    default:
      return state.sort(sortCart);
  }
}

export default cartReducer;
