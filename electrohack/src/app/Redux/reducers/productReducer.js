function productReducer(state = [], action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
      console.log(action.payload);
      return [];

    default:
      return state;
  }
}
export default productReducer;
